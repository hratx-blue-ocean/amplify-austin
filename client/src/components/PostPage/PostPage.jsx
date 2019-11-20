import React, { useState, useEffect } from "react";
import axios from "axios";
import { PostPageButtons } from "./PostPageButtons/PostPageButtons";
// import coords from "../MapPage/dummyCoordinates";
import Map from "../Map/Map";
import style from "./PostPage.module.css";
import { useParams, useHistory } from "react-router-dom";
import PostPageSubGroup from "./PostPageSubGroup/PostSubGroup";
import { API } from "../../constants";
import EmptyStarIcon from "../Icons/EmptyStarIcon.jsx";
import FilledStarIcon from "../Icons/FilledStarIcon.jsx";

const PostPage = props => {
  // state
  const [post, setPost] = useState(undefined);
  const [coords, setCoords] = useState([]);
  const [fave, setFave] = useState(props.favorite);
  const [status, setStatus] = useState(undefined);
  // token
  const userID = localStorage.getItem("user_id");
  // helpers
  const { postID } = useParams();
  const history = useHistory();

  useEffect(() => {
    getPost();
  }, []);

  const getPost = async () => {
    try {
      const response = await axios.get(API.ISSUE, {
        params: {
          userId: userID || "",
          postId: postID
        }
      });

      const postData = response.data;
      if (postData === undefined) {
        throw new Error("no response from GET request");
      }
      setPostState(postData);
    } catch (error) {
      // TODO add error page
      console.error(error);
      history.push("/");
    }
  };

  const setPostState = data => {
    setPost(data);
    setCoords([
      {
        lat: data.lat,
        lng: data.lng,
        categoryName: data.categoryName,
        headline: data.headline
      }
    ]);
    setStatus(data.status);
  };

  const handleFavorite = async e => {
    e.stopPropagation();
    try {
      const response = await axios.post(API.FAVORITE, {
        userId: userID,
        postId: postID
      });
      if (response.data.split(" ")[0] === "postId") {
        setFave(!fave);
      }
    } catch (error) {
      console.error(error);
    }
  };

  const handleStatus = async () => {
    const ENDPOINT = status === "resolved" ? API.DISPUTE : API.RESOLVE;
    const response = await axios.post(ENDPOINT, {
      userId: userID,
      postId: postID
    });
    const newStatus = response.data;
    setStatus(newStatus);
  };

  if (post) {
    {
      console.log(post);
    }
    return (
      <div>
        <div className={style.titleField}>
          <div className={style.heading}>
            <h2>{post.headline}</h2>
            <PostPageSubGroup
              type={post.type}
              categoryName={post.categoryName}
              created_at={post.created_at}
            />
          </div>
          <div className={style.favorite}>
            <div onClick={handleFavorite}>
              {fave === true ? (
                <FilledStarIcon></FilledStarIcon>
              ) : (
                  <EmptyStarIcon></EmptyStarIcon>
                )}
            </div>
          </div>
        </div>
        <div className={style.descriptionWrapper}>
          <p>{post.description}</p>
        </div>
        <PostPageButtons
          contact={post.contacts[0]}
          status={status}
          handleStatus={handleStatus}
        />
        <div className={style.map}>
          <Map coordinates={coords}></Map>
        </div>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default PostPage;

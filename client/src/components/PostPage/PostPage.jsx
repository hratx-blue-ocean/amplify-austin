import React, { useState, useEffect } from "react";
import axios from "axios";
import { PostPageButtons } from "./PostPageButtons/PostPageButtons";
// import coords from "../MapPage/dummyCoordinates";
import Map from "../Map/Map";
import style from "./PostPage.module.css";
import { useParams, useHistory } from "react-router-dom";
import PostPageSubGroup from "./PostPageSubGroup/PostSubGroup";
import NotificationModal from "../NotificationModal/NotificationModal";
import { API } from "../../constants";
import Icon from "../Icon/Icon";
import Loading from "../Loading/Loading";
import ErrorModal from "../NotificationModal/ErrorModal";

const PostPage = props => {
  // state
  const [post, setPost] = useState(undefined);
  const [coords, setCoords] = useState([]);
  const [fave, setFave] = useState(undefined);
  const [status, setStatus] = useState(undefined);
  const [displayModal, toggleDisplayModal] = useState(false);
  // token
  const userID = localStorage.getItem("user_id");
  // helpers
  const { postID } = useParams();
  const history = useHistory();
  // error
  const [errorToggle, setErrorToggle] = useState(false);

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
      setFave(postData.isFavorited);
    } catch (error) {
      // TODO add error page
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
        headline: data.headline,
        postId: postID
      }
    ]);
    setStatus(data.status);
  };

  const handleFavorite = async e => {
    e.stopPropagation();
    if (!userID) {
      return toggleDisplayModal(!displayModal);
    }
    try {
      const response = await axios.post(API.FAVORITE, {
        userId: userID,
        postId: postID
      });
      if (response.data.split(" ")[0] === "postId") {
        setFave(!fave);
      }
    } catch (error) {
      setErrorToggle(true);
    }
  };

  const handleStatus = async () => {
    if (!userID) {
      return toggleDisplayModal(true);
    }
    const ENDPOINT = status === "resolved" ? API.DISPUTE : API.RESOLVE;
    const response = await axios.post(ENDPOINT, {
      userId: userID,
      postId: postID
    });
    const newStatus = response.data;
    setStatus(newStatus.status);
  };

  if (post) {
    return (
      <React.Fragment>
        <div>
          <NotificationModal
            display={displayModal}
            toggleDisplayModal={toggleDisplayModal}
            message={"You must be logged in to use this feature!"}
          />
          <div className={style.titleField}>
            <div className={style.heading}>
              <h2>{post.headline}</h2>
              <PostPageSubGroup
                categoryName={post.categoryName}
                created_at={post.created_at}
              />
            </div>
            <div className={style.favorite}>
              <div onClick={handleFavorite}>
                {fave === true ? (
                  <Icon category={"watched"} onClick={handleFavorite} />
                ) : (
                  <Icon category={"unwatched"} onClick={handleFavorite} />
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
        <ErrorModal
          CurrentState={errorToggle}
          ChangeState={setErrorToggle.bind(this)}
          Message="An Error Occured"
        />
      </React.Fragment>
    );
  } else {
    return <Loading />;
  }
};

export default PostPage;

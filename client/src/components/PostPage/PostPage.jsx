import React, { useState, useEffect } from "react";
import axios from "axios";
import { PostPageButtons } from "./PostPageButtons/PostPageButtons";
// import coords from "../MapPage/dummyCoordinates";
import Map from "../Map/Map";
import style from "./PostPage.module.css";
import { useParams, Redirect, useHistory } from "react-router-dom";
import PostPageSubGroup from "./PostPageSubGroup/PostSubGroup";
import { Icon } from "@material-ui/core";
import { ICONLABEL, API } from "../../constants";

const PostPage = props => {
  // state
  const [post, setPost] = useState(undefined);
  const [coords, setCoords] = useState([]);
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
          // replace with postID
          postId: postID
        }
      });
      const { data } = response;
      console.log(response.data);
      const postData = response.data;
      if (postData === undefined) {
        throw new Error("no response from GET request");
      }
      setPost(postData);
      setCoords([
        {
          lat: postData.lat,
          lng: postData.lng,
          categoryName: postData.categoryName
        }
      ]);
    } catch (error) {
      // TODO add error page
      console.error(error);
      history.push("/");
    }
  };

  const handleReachOut = () => {
    console.log("Reach Out");
    // TODO send notification to contact list
  };

  const handleResolveDispute = () => {
    console.log("Resolved or Disputed");
    // TODO set post status to resolved or disputed
    // if (this.post.resolved) {
    //   axios.post("/ENDPOINT/postID", (dispute))
    // } else {
    //   axios.post("/ENDPOINT/postID", (resolved))
    // }
  };
  if (post) {
    console.log("in here");
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
            <Icon type={ICONLABEL.starEmpty} />
          </div>
        </div>
        <div className={style.descriptionWrapper}>
          <p>{post.description}</p>
        </div>
        <PostPageButtons
          resolved={post && post.status === "resolved" ? true : false}
          handleResolveDispute={handleResolveDispute}
        />
        <div className={style.map}>
          {/* TODO: use coordinates in get request */}
          <Map coordinates={coords}></Map>
        </div>
      </div>
    );
  } else {
    return <div>loading</div>;
  }
};

export default PostPage;

import React, { useState, useEffect } from "react";
import axios from "axios";
import { PostPageButtons } from "./PostPageButtons/PostPageButtons";
import coords from "../MapPage/dummyCoordinates";
import Map from "../Map/Map";
import style from "./PostPage.module.css";
import { useParams, Redirect, useHistory } from "react-router-dom";
import PostPageSubGroup from "./PostPageSubGroup/PostSubGroup";
import { Icon } from "@material-ui/core";
import { ICONLABEL } from "../../constants";

const PostPage = () => {
  // state
  const [post, setPost] = useState({});
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
      const response = await axios.get(`http://localhost:8000/api/issue/`, {
        params: {
          userId: userID || "",
          // replace with postID
          postId: 53
        }
      });
      const { data } = response;
      const postData = data;
      if (postData === undefined || !postData.canAmplify === undefined) {
        console.log("here");
        throw new Error("no response from GET request");
      }
      setPost(postData);
      setCoords([
        {
          lat: postData.lat,
          lng: postData.lng,
          category: postData.category
        }
      ]);
    } catch (error) {
      // TODO add error page
      console.log(error);
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

  return (
    <div>
      <div className={style.titleField}>
        <div className={style.heading}>
          <h2>{post.headline}</h2>
          <PostPageSubGroup
            type={post.type}
            categorName={post.categorName}
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
};

export default PostPage;

import React, { useState, useEffect } from "react";
import { PostPageButtons } from "./PostPageButtons/PostPageButtons";
import { firstPost } from "../../FAKEDATA";
import coords from "../MapPage/dummyCoordinates";
import Map from "../Map/Map";
import style from "./PostPage.module.css"

const PostPage = props => {
  const [post, setPost] = useState(undefined)
  const resolved = (post && post.resolved) || true;

  // useEffect(() => {
  //   const postData = axios.get("/ENDPOINT/issue/postid/userid");
  //   setPost(postData.data)
  // })

  const handleReachOut = () => {
    console.log("Reach Out");
    // if (this.post.resolved) {
    //   axios.post("/ENDPOINT/issue/postid/userID", (dispute))
    // } else {
    //   axios.post("/ENDPOINT/issue/postid/userID", (resolved))
    // }
  };

  const handleResolveDispute = () => {
    console.log("Resolved or Disputed");
    // if (this.post.resolved) {
    //   axios.post("/ENDPOINT/postID", (dispute))
    // } else {
    //   axios.post("/ENDPOINT/postID", (resolved))
    // }
  };

  return (
    <div>
      <PostPageButtons resolved={resolved} handleResolveDispute={handleResolveDispute} />
      <div>
        <div className={style.headline}>
          <h2>{firstPost.headline}</h2>
        </div>
        <div>STAR</div>
      </div>
      <div className={style.descriptionWrapper}>
        <p>{firstPost.description}</p>
      </div>
      <div className={style.map}>
        <Map coordinates={coords()}></Map>
      </div>
    </div>
  );
};

export default PostPage;

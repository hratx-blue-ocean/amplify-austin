import React, { useState, useEffect } from "react";
import { PostPageButtons } from "./PostPageButtons/PostPageButtons";
import { firstPost } from "../../FAKEDATA";
import coords from "../MapPage/dummyCoordinates";
import Map from "../Map/Map";
import style from "./PostPage.module.css";

const PostPage = () => {
  const [post, setPost] = useState(undefined);
  // const [coords, setCoords] = useState([]);
  const resolved = (post && post.resolved) || true;

  // useEffect(() => {
  //   const postData = axios.get("/ENDPOINT/issue/postid/userid");
  //   setPost(postData.data)
  //   setCoords([{
  //     lat: postData.lat,
  //     lng: postData.lng,
  //     category: postData.category
  //   }])
  // },[post, coords])

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
      <div className={style.titleField}>
        <div className={style.heading}>
          <h2>{firstPost.headline}</h2>
          <div className={style.subheading}>
            <div className={style.subGroup}>
              <h4>Type: </h4>
              <h6>{firstPost.type}</h6>
            </div>
            <div className={style.subGroup}>
              <h4>Category: </h4>
              <h6>{firstPost.category}</h6>
            </div>
            <div className={style.subGroup}>
              <h4>Date Reported: </h4>
              <h6>{firstPost.created_at.toDateString()}</h6>
            </div>
          </div>
        </div>
        <div className={style.favorite}>STAR</div>
      </div>
      <div className={style.descriptionWrapper}>
        <p>{firstPost.description}</p>
      </div>
      <PostPageButtons
        resolved={resolved}
        handleResolveDispute={handleResolveDispute}
      />
      <div className={style.map}>
        {/* TODO: use coordinates in get request */}
        <Map coordinates={coords()}></Map>
      </div>
    </div>
  );
};

export default PostPage;

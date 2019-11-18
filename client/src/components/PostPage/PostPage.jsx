import React, { useState, useEffect } from "react";
import axios from "axios";
import { PostPageButtons } from "./PostPageButtons/PostPageButtons";
import { firstPost } from "../../FAKEDATA";
import coords from "../MapPage/dummyCoordinates";
import Map from "../Map/Map";
import style from "./PostPage.module.css";
import { useParams } from "react-router-dom";

const PostPage = () => {
  let userId = window.localStorage.getItem("user_id");

  // const { postId } = useParams();
  const [post, setPost] = useState({});
  // const [coords, setCoords] = useState([]);
  // Ethan commented out line below
  // const resolved = (post && post.resolved) || true;
  const resolved = (post && post.status === "resolved") || true;

  // useEffect(() => {
  //   const postData = axios.get(`/ENDPOINT/issue/${postID}/`${userid ? userid : undefined}`);
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

  useEffect(() => {
    console.log("hello from post PAge");
    axios
      .get("http://localhost:8000/api/issue", {
        params: {
          userId: userId,
          postId: 53
        }
      })
      .then(response => {
        console.log(response);
        setPost(response.data);
      });
  }, []);

  if (!post.created_at) {
    return <div></div>;
  }

  console.log(typeof post.created_at);
  return (
    <div>
      <div className={style.titleField}>
        <div className={style.heading}>
          <h2>{post.headline}</h2>
          <div className={style.subheading}>
            <div className={style.subGroup}>
              <h4>Type: </h4>
              <h6>{post.type}</h6>
            </div>
            <div className={style.subGroup}>
              <h4>Category: </h4>
              <h6>{post.categoryName}</h6>
            </div>
            <div className={style.subGroup}>
              <h4>Date Reported: </h4>
              <h6>{post.created_at}</h6>
            </div>
          </div>
        </div>
        <div className={style.favorite}>STAR</div>
      </div>
      <div className={style.descriptionWrapper}>
        <p>{post.description}</p>
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

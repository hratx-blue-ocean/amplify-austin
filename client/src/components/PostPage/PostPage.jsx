import React from "react";
import style from "./PostPage.module.css";

const PostPage = props => {
  let resolved;
  if (this && this.props && this.props.resolved !== undefined) {
    resolved = this.props.resolved;
  } else {
    resolved = false;
  }

  const handleReachOut = () => {
    console.log("Reach Out");
    // if (this.post.resolved) {
    //   axios.post("/ENDPOINT/postID", (dispute))
    // } else {
    //   axios.post("/ENDPOINT/postID", (resolved))
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
      <div className={style.btnWrapper}>
        <button className={style.reachOutBtn}>Reach Out</button>
        {resolved ? (
          <button onClick={handleResolveDispute} className={style.resolvedBtn}>
            Mark Resolved?
          </button>
        ) : (
          <button onClick={handleResolveDispute} className={style.disputeBtn}>
            Dispute Resolution
          </button>
        )}
      </div>
      <div>
        <span>STAR ICON</span> ISSUE NAME
      </div>
      <p>ISSUE CONTENT HERE</p>
      <div>MAP HERE</div>
    </div>
  );
};

export default PostPage;

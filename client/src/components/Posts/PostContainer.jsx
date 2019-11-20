import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Post from "../Post/Post.jsx";
import Styles from "./PostContainer.module.css";

const containerStyles = makeStyles(theme => ({
  root: {
    marginTop: "5vh",
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 0)
  }
}));

const PostContainer = props => {
  const checkForEmpty = () => {
    if (props.postData.length === 0) {
      return (
        <div>
          <h1 className={Styles.errorContainer}>
            There are no issues or events that fit your request!{" "}
          </h1>
          <img
            className={Styles.imgContainer}
            src="amplify_austin_grey.png"
            height="500px"
            width="500px"
          ></img>
        </div>
      );
    }
  };

  const postContStyles = containerStyles();
  // console.log(props);
  return (
    <div className={postContStyles.root}>
      {props.postData.map(post => {
        return (
          <Post
            key={post.postId}
            postID={post.postId}
            type={post.type}
            category={post.categoryName}
            title={post.headline}
            description={post.description}
            datecreated={post.created_at}
            address={post.address}
            votes={post.upvotes}
            username={post.username}
            status={post.status}
            favorited={post.favorited}
          />
        );
      })}
      {checkForEmpty()}
    </div>
  );
};

export default PostContainer;

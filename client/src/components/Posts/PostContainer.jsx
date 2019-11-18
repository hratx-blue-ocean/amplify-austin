import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Post from "../Post/Post.jsx";

const containerStyles = makeStyles(theme => ({
  root: {
    marginTop: "5vh",
    flexGrow: 1,
    overflow: "hidden",
    padding: theme.spacing(0, 3)
  }
}));

const PostContainer = props => {
  const postContStyles = containerStyles();

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
            location={post.location}
            votes={post.upvotes}
            username={post.username}
            status={post.status}
            favorited={post.favorited}
          />
        );
      })}
    </div>
  );
};

export default PostContainer;

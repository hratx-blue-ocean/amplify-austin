import React from "react";
import Post from "../Post/Post";

export class Posts extends React.Component {
  render() {
    return (
      <>
        <h1>ToDo Posts!</h1>
        <Post />
      </>
    );
  }
}

export default Posts;

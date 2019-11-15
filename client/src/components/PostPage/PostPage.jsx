import React from "react";

export class PostPage extends React.Component {
  render() {
    return (
      <div>
        <button>Reach Out</button>
        <button>Mark as Resolved</button>
        <div>
          <span>STAR ICON</span> ISSUE NAME
        </div>
        <p>ISSUE CONTENT HERE</p>
        <div>MAP HERE</div>
      </div>
    );
  }
}

export default PostPage;

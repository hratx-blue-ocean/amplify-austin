import React from "react";

export class Favorite extends React.Component {
  constructor(props) {
    super(props);
  }

  handleSave() {
    this.props.savePost(this.props.post.id);
  }

  render() {
    return (
      <div onClick={this.handleSave}>
        STAR ICON
      </div>
    );
  }
}

export default Favorite;

import React from "react";
import Icon from "../Icon/Icon";
import { ICONLABEL } from "../../constants";

export class Favorite extends React.Component {
  handleSave() {
    if (this.props.favorite) {
      this.props.unsavePost(this.props.post.id);
    } else {
      this.props.savePost(this.props.post.id);
    }
  }

  render() {
    return (
      <div onClick={this.handleSave}>
        {this.props.favorite ? (
          <Icon type={ICONLABEL.starFilled} />
        ) : (
          <Icon type={ICONLABEL.starEmpty} />
        )}
      </div>
    );
  }
}

export default Favorite;

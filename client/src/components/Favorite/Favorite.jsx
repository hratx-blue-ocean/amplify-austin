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
      <div onClick={this.handleSave} style={"cursor: pointer;"}>
        {this.props.favorite ? (
          <Icon type={ICONLABEL.starFilled} style={"cursor: pointer;"} />
        ) : (
          <Icon type={ICONLABEL.starEmpty} style={"cursor: pointer;"} />
        )}
      </div>
    );
  }
}

export default Favorite;

import React from "react";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import Icon from "@material-ui/core/Icon";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      istoggled: false
    };
  }
  render() {
    return (
      <React.Fragment>
        <div className="HeaderContainer">
          <MenuIcon className="menuIcon" />
          <div>MyAtx</div>
          <MapOutlinedIcon className="mapIcon" />
        </div>
      </React.Fragment>
    );
  }
}

export default Header;

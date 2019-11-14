import React from "react";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "../Menu/Menu";

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
          {/*ToDo Menu */}
          <Menu />
          <div>MyAtx</div>
          <MapOutlinedIcon className="mapIcon" />
        </div>
      </React.Fragment>
    );
  }
}

export default Header;

import React from "react";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "../Menu/Menu";
import "./header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsToggled: false
    };
  }

  toggleMenu() {
    this.setState({
      menuIsToggled: true
    });
  }
  render() {
    return (
      <React.Fragment>
        <div data-test="HeaderContainer" id="HeaderContainer">
          <div>
            <MenuIcon
              onClick={() => {
                this.toggleMenu();
              }}
              style={{ height: 30, width: 30 }}
            />
          </div>
          <div>
            <p>Amplify Austin</p>
          </div>
          <div>
            <MapOutlinedIcon style={{ height: 30, width: 30 }} />
          </div>
        </div>
        {/*ToDo Menu */}
        <Menu />
      </React.Fragment>
    );
  }
}

export default Header;

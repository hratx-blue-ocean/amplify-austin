import React from "react";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "../Menu/Menu.jsx";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import "./header.css";

const styles = {
  paper: {
    background: "#6202ee",
    color: "white"
  }
};

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      menuIsToggled: false
    };
  }

  toggleMenu() {
    let reverse = !this.state.menuIsToggled;
    this.setState({
      menuIsToggled: reverse
    });
  }
  render() {
    const { classes } = this.props;
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
        <Drawer
          anchor="left"
          open={this.state.menuIsToggled}
          onClose={this.toggleMenu.bind(this)}
          classes={{ paper: classes.paper }}
        >
          <Menu />
        </Drawer>
      </React.Fragment>
    );
  }
}

export default withStyles(styles)(Header);

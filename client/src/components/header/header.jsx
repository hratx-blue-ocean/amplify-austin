import React, { useState } from "react";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "../Menu/Menu";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import "./header.css";

const styles = {
  paper: {
    background: "#6202ee",
    color: "white"
  }
};

const Header = props => {
  const [menuToggled, setMenuToggled] = useState(false);

  const toggleMenu = () => {
    let reverse = !menuToggled;
    setMenuToggled(reverse);
  };
  console.log(menuToggled)
  const { classes } = props;
  const history = useHistory();
  return (
    <React.Fragment>
      <div data-test="HeaderContainer" id="HeaderContainer">
        <div>
          <MenuIcon onClick={toggleMenu} style={{ height: 30, width: 30 }} />
        </div>
        <div>
          <p>Amplify Austin</p>
        </div>
        <div>
          <MapOutlinedIcon
            style={{ height: 30, width: 30 }}
            onClick={() => {
              history.push("/map");
            }}
          />
        </div>
      </div>
      {/*ToDo Menu */}
      <Drawer
        anchor="left"
        open={menuToggled}
        onClose={toggleMenu}
        classes={{ paper: classes.paper }}
      >
        <Menu onClose={toggleMenu} />
      </Drawer>
    </React.Fragment>
  );
};

export default withStyles(styles)(Header);

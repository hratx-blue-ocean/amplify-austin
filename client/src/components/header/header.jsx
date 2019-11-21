import React, { useState } from "react";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "../Menu/Menu";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import style from "./header.module.css";

const styles = {
  paper: {
    background: "#34435E",
    color: "white"
  }
};

const Header = props => {
  const [menuToggled, setMenuToggled] = useState(false);
  const { classes } = props;
  const history = useHistory();

  const toggleMenu = () => {
    let reverse = !menuToggled;
    setMenuToggled(reverse);
  };

  const navToHome = () => {
    props.changeSelectBy(null);
    history.push("/");
  };

  const navToMap = () => {
    history.push("/map");
  };

  return (
    <React.Fragment>
      <div data-test="HeaderContainer" className={style.headerContainer}>
        <div className={style.navigatingDiv}>
          <MenuIcon onClick={toggleMenu} style={{ height: 30, width: 30 }} />
        </div>
        <div>
          <img
            height="50"
            width="60"
            src="amplify_austinwhite.png"
            className={style.navigatingDiv}
            onClick={navToHome}
          />
        </div>
        <div className={style.navigatingDiv}>
          <MapOutlinedIcon
            style={{ height: 30, width: 30 }}
            onClick={navToMap}
          />
        </div>
      </div>
      <Drawer
        anchor="left"
        open={menuToggled}
        onClose={toggleMenu}
        classes={{ paper: classes.paper }}
      >
        <Menu onClose={toggleMenu} changeSelectBy={props.changeSelectBy} />
      </Drawer>
    </React.Fragment>
  );
};

export default withStyles(styles)(Header);

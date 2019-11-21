import React, { useState, useEffect } from "react";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "../Menu/Menu";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import style from "./header.module.css";
const drawerWidth = 280;
const styles = {
  drawer: {
    width: drawerWidth,
    flexShrink: 0
  },
  paper: {
    width: drawerWidth,
    background: "#34435E",
    color: "white"
  }
};

const Header = props => {
  const [menuToggled, setMenuToggled] = useState(false);
  const [drawertype, setDrawerType] = useState(
    window.innerWidth > 1250 ? "permanent" : "temporary"
  );
  const { classes } = props;
  const history = useHistory();

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1250) {
        setDrawerType("permanent");
      } else {
        setDrawerType("temporary");
      }
    });
  });

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
            src="https://amplify-austin.s3.us-east-2.amazonaws.com/amplify_austinwhite.png"
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
        className={style.Drawer}
        anchor="left"
        variant={drawertype}
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

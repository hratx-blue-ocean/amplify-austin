import React, { useState, useEffect } from "react";
import MapOutlinedIcon from "@material-ui/icons/MapOutlined";
import MenuIcon from "@material-ui/icons/Menu";
import Menu from "../Menu/Menu";
import Drawer from "@material-ui/core/Drawer";
import { withStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import styles from "./userstatus.module.css";

const Userstatus = props => {
  const [menuToggled, setMenuToggled] = useState(false);
  const [name, setName] = useState("");
  const { classes } = props;
  const username = localStorage.getItem("username");
  const history = useHistory();

  useEffect(() => {
    username ? setName(username) : setName("Login / Sign-Up");
  }, [username, name]);
  const navToSignIn = () => {
    history.push("/signin");
  };

  const navToSignUp = () => {
    history.push("/signup");
  };

  return (
    <div>
      {!username ? (
        <p className={styles.conditionalRenderP}>
          <span onClick={navToSignIn}>Login</span> /{" "}
          <span onClick={navToSignUp}>Sign Up</span>
        </p>
      ) : (
        <p
          onClick={() => {
            localStorage.removeItem("user_id");
            localStorage.removeItem("username");
            history.push("/signin");
          }}
          className={styles.conditionalRenderP}
        >
          Log Out
        </p>
      )}
    </div>
  );
};

export default Userstatus;

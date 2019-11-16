import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import "./Menu.css";
import { useHistory } from "react-router-dom";

const Menu = props => {
  let logged = false;
  const history = useHistory();
  if (logged) {
    return (
      <div className="NavBarContainer" data-test="NavMenu">
        <div>
          <button
            data-test="Home"
            onClick={() => {
              history.push("/");
            }}
          >
            Home
            <HomeOutlinedIcon />
          </button>
        </div>
        <div>
          <button data-test="MyPosts">
            My Posts
            <ChatOutlinedIcon />
          </button>
        </div>
        <div>
          <button data-test="Favorites">
            Favorites
            <StarBorderOutlinedIcon />
          </button>
        </div>
        <div>
          <button data-test="Settings">
            Settings
            <SettingsOutlinedIcon />
          </button>
        </div>
        <div>
          <button
            data-test="SignIn"
            onClick={() => {
              history.push("/signin");
            }}
          >
            {" "}
            Sign In{" "}
          </button>
        </div>
        <div>
          <button
            data-test="SignUp"
            onClick={() => {
              history.push("/signup");
            }}
          >
            {" "}
            Sign Up{" "}
          </button>
        </div>
      </div>
    );
  } else {
    return (
      <div className="NavBarContainer" data-test="NavMenu">
        <div>
          <button
            data-test="Home"
            onClick={() => {
              history.push("/");
            }}
          >
            Home
            <HomeOutlinedIcon />
          </button>
        </div>
        <div>
          <button
            data-test="SignIn"
            onClick={() => {
              history.push("/signin");
            }}
          >
            {" "}
            Sign In{" "}
          </button>
        </div>
        <div>
          <button
            data-test="SignUp"
            onClick={() => {
              history.push("/signup");
            }}
          >
            {" "}
            Sign Up{" "}
          </button>
        </div>
      </div>
    );
  }
};

export default Menu;

import React, { useState } from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import MapOutLinedIcon from "@material-ui/icons/MapOutlined";
import "./Menu.css";
import { useHistory } from "react-router-dom";

const Menu = props => {
  const [auth, setAuth] = useState(true);
  const history = useHistory();
  if (auth) {
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
          <button data-test="Map">
            Create Post
            <ChatOutlinedIcon
              onClick={() => {
                history.push("/create");
              }}
            />
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
          <button data-test="Map">
            Map
            <MapOutLinedIcon
              onClick={() => {
                history.push("/map");
              }}
            />
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
              setAuth(false);
              //todo change logged to false
              history.push("/signin");
            }}
          >
            {" "}
            Sign Out{" "}
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
          <button data-test="Map">
            Map
            <MapOutLinedIcon
              onClick={() => {
                history.push("/map");
              }}
            />
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

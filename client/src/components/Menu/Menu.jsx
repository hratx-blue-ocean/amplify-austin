import React from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import SettingsOutlinedIcon from "@material-ui/icons/SettingsOutlined";
import "./Menu.css";

const Menu = props => {
  return (
    <div className="NavBarContainer" data-test="NavMenu">
      <div>
        <button data-test="Home">
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
        <button data-test="SignIn"> Sign In </button>
      </div>
      <div>
        <button data-test="SignUp"> Sign Up </button>
      </div>
    </div>
  );
};

export default Menu;

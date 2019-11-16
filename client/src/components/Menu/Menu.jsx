import React, { useState } from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import MapOutLinedIcon from "@material-ui/icons/MapOutlined";
import style from "./Menu.module.css";
import { useHistory } from "react-router-dom";

const Menu = props => {
  const [auth, setAuth] = useState(true);
  const history = useHistory();
  return (
    <div className={style.NavBarContainer} data-test="NavMenu">
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
      {auth &&
        <>
          <div>
            <button data-test="Create">
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
        </>
      }
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
      {auth ?
        <div>
          <button
            data-test="SignOut"
            onClick={() => {
              setAuth(false);
              //todo change logged to false
              history.push("/");
            }}
          >
            {" "}
            Sign Out{" "}
          </button>
        </div> :
        <>
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
        </>
      }
    </div>
  );
};

export default Menu;

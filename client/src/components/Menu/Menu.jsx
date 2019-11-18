import React, { useState, useEffect } from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import MapOutLinedIcon from "@material-ui/icons/MapOutlined";
import style from "./Menu.module.css";
import { useHistory } from "react-router-dom";

const Menu = props => {
  const [auth, setAuth] = useState();
  const history = useHistory();
  const onClose = props.onClose;

  useEffect(() => {
    if (localStorage.getItem("user_id")) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [auth]);

  return (
    <div className={style.NavBarContainer} data-test="NavMenu">
      <div>
        <button
          data-test="Home"
          onClick={() => {
            history.push("/");
            onClose();
          }}
        >
          Home
          <HomeOutlinedIcon />
        </button>
      </div>
      {auth && (
        <>
          <div>
            <button
              data-test="Create"
              onClick={() => {
                history.push("/create");
                onClose();
              }}
            >
              Create Post
              <ChatOutlinedIcon />
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
      )}
      <div>
        <button
          data-test="Map"
          onClick={() => {
            history.push("/map");
            onClose();
          }}
        >
          Map
          <MapOutLinedIcon />
        </button>
      </div>
      {auth ? (
        <div>
          <button
            data-test="SignOut"
            onClick={() => {
              localStorage.removeItem("user_id");
              localStorage.removeItem("username");
              history.push("/");
              onClose();
            }}
          >
            {" "}
            Sign Out{" "}
          </button>
        </div>
      ) : (
        <>
          <div>
            <button
              data-test="SignIn"
              onClick={() => {
                history.push("/signin");
                onClose();
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
                onClose();
              }}
            >
              {" "}
              Sign Up{" "}
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;

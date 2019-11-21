import React, { useState, useEffect } from "react";
import HomeOutlinedIcon from "@material-ui/icons/HomeOutlined";
import ChatOutlinedIcon from "@material-ui/icons/ChatOutlined";
import VisibilityOutlinedIcon from "@material-ui/icons/VisibilityOutlined";
import StarBorderOutlinedIcon from "@material-ui/icons/StarBorderOutlined";
import MapOutLinedIcon from "@material-ui/icons/MapOutlined";
import style from "./Menu.module.css";
import Button from "@material-ui/core/Button";
import { useHistory } from "react-router-dom";

const Menu = props => {
  const [auth, setAuth] = useState();
  const history = useHistory();
  const onClose = props.onClose;
  const username = localStorage.getItem("username");
  const [name, setName] = useState("");

  useEffect(() => {
    username ? setName(username) : setName("Login / Sign-Up");
    if (localStorage.getItem("user_id")) {
      setAuth(true);
    } else {
      setAuth(false);
    }
  }, [auth, username, name]);

  return (
    <div className={style.NavBarContainer} data-test="NavMenu">
      <div>
        {name === "Login / Sign-Up" ? (
          ""
        ) : (
          <p className={style.conditionalRenderP}>{name}</p>
        )}
      </div>
      <div>
        <Button
          onClick={() => {
            // TODO push w/ filter for users favorites
            props.changeSelectBy(null);
            history.push("/");
            onClose();
          }}
          variant="contained"
          endIcon={<HomeOutlinedIcon />}
        >
          Home
        </Button>
      </div>
      {auth && (
        <>
          <div>
            <Button
              onClick={() => {
                history.push("/create");
                onClose();
              }}
              variant="contained"
              endIcon={<ChatOutlinedIcon />}
            >
              Create Post
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                // TODO push w/ filter for users posts
                props.changeSelectBy("myPosts");
                history.push("/");
                onClose();
              }}
              variant="contained"
              endIcon={<ChatOutlinedIcon />}
            >
              My Posts
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                // TODO push w/ filter for users posts
                props.changeSelectBy("favorites");
                history.push("/");
                onClose();
              }}
              variant="contained"
              endIcon={<VisibilityOutlinedIcon />}
            >
              Watch List
            </Button>
          </div>
        </>
      )}
      <div>
        <Button
          onClick={() => {
            history.push("/map");
            onClose();
          }}
          variant="contained"
          endIcon={<MapOutLinedIcon />}
        >
          Map
        </Button>
      </div>
      {auth ? (
        <div>
          <Button
            onClick={() => {
              localStorage.removeItem("user_id");
              localStorage.removeItem("username");
              history.push("/signin");
              onClose();
            }}
            variant="contained"
          >
            {" "}
            Sign Out{" "}
          </Button>
        </div>
      ) : (
        <>
          <div>
            <Button
              onClick={() => {
                history.push("/signin");
                onClose();
              }}
              variant="contained"
            >
              {" "}
              Login{" "}
            </Button>
          </div>
          <div>
            <Button
              onClick={() => {
                history.push("/signup");
                onClose();
              }}
              variant="contained"
            >
              {" "}
              Sign Up{" "}
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default Menu;

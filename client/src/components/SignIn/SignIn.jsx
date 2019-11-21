import React, { useState } from "react";
import axios from "axios";
import { Link, useHistory } from "react-router-dom";
import style from "./SignIn.module.css";
import { API } from "../../constants";
import ErrorModal from "../NotificationModal/ErrorModal";

const SignIn = props => {
  const history = useHistory();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorToggle, setErrorToggle] = useState(false);
  const [errorMessage, setErrorMessage] = useState(
    "An error has occured please try again"
  );
  const handleUsername = e => {
    setUsername(e.target.value);
  };

  const handlePassword = e => {
    setPassword(e.target.value);
  };

  const checkInputs = () => {
    if (
      password.length >= 8 &&
      password.length <= 32 &&
      username.length >= 6 &&
      username.length <= 16
    ) {
      return true;
    } else {
      return false;
    }
  };

  const authenticateUser = async () => {
    try {
      const response = await axios.post(API.LOGIN, {
        username,
        password
      });
      if (response && response.data && response.data.id) {
        localStorage.setItem("user_id", response.data.id);
        localStorage.setItem("username", username);
      } else {
        throw Error("invalid response");
      }
      return true;
    } catch (error) {
      setErrorMessage("Invalid credentials, please try again");
      setErrorToggle(true);
      return false;
    }
  };

  const loginUser = async () => {
    try {
      const validInput = checkInputs();
      const authenticated = await authenticateUser();
      if (validInput && authenticated) {
        setUsername("");
        setPassword("");
        history.push("/");
      } else {
        throw Error("bad credentials");
      }
    } catch (error) {
      setErrorMessage("Invalid credentials, please try again");
      setErrorToggle(true);
    }
  };
  // TODO
  // styling

  return (
    <React.Fragment>
      <div className={style.container}>
        <h3 className={style.textInfo}>Sign In</h3>
        <form
          onSubmit={e => {
            e.preventDefault();
            loginUser();
          }}
        >
          <div>
            <input
              type={"text"}
              id={"username"}
              placeholder={"username"}
              value={username}
              onChange={handleUsername}
              className={style.textFeild}
            ></input>
          </div>
          <div>
            <input
              type={"password"}
              placeholder={"password"}
              value={password}
              onChange={handlePassword}
              className={style.textFeild}
            ></input>
          </div>
          <div>
            <button type={"submit"} className={style.button}>
              Sign In
            </button>
          </div>
        </form>
        <div className={style.textInfo}>
          Don't have an account? <Link to="/signup">Sign Up!</Link>
        </div>
      </div>
      <ErrorModal
        CurrentState={errorToggle}
        ChangeState={setErrorToggle.bind(this)}
        Message={errorMessage}
      />
    </React.Fragment>
  );
};

export default SignIn;

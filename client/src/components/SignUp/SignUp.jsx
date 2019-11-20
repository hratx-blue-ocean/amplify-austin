import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import axios from "axios";
import style from "./SignUp.module.css";
import { API } from "../../constants";

const SignUp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [confirmation, setConfirmation] = useState("");

  const history = useHistory();

  const checkRequirements = () => {
    // verify passwords match & meet conditions
    if (
      password === confirmation &&
      password.length >= 8 &&
      password.length <= 32 &&
      username.length >= 3 &&
      username.length <= 32
    ) {
      return true;
    } else {
      return false;
    }
  };

  const createAccount = async () => {
    try {
      const response = await axios.post(API.SIGNUP, {
        username,
        password: password
      });
      return response.data;
    } catch (error) {
      console.error(error);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      const validRequirements = checkRequirements();
      if (validRequirements) {
        const data = await createAccount();
        if (data) {
          setUsername("");
          setPassword("");
          setConfirmation("");
          localStorage.setItem("username", data[0]);
          localStorage.setItem("user_id", data[1]);
          history.push("/");
        } else {
          throw new Error(422);
        }
      } else {
        window.alert(`Your username must be at least 3 characters.
        Your password must be at least 8 characters.`);
      }
    } catch (error) {
      handleError(error);
    }
  };

  const handleError = error => {
    if (error.message === "422") {
      setUsername("");
      window.alert("That username is already in use. Please try another.");
    } else {
      window.alert("Theres been an error, please try again");
    }
  };

  const handleUsernameInput = e => {
    setUsername(e.target.value);
  };
  const handlePasswordInput = e => {
    setPassword(e.target.value);
  };
  const handleConfirmationInput = e => {
    setConfirmation(e.target.value);
  };

  return (
    <div className={style.container}>
      <h3 className={style.textInfo}>Create an Account</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            type={"text"}
            id={"username"}
            placeholder={"username"}
            className={style.textFeild}
            value={username}
            onChange={handleUsernameInput}
          ></input>
        </div>
        <div>
          <input
            type={"password"}
            placeholder={"password"}
            className={style.textFeild}
            value={password}
            onChange={handlePasswordInput}
          ></input>
        </div>
        <div>
          <input
            type={"password"}
            placeholder={"confirm password"}
            className={style.textFeild}
            value={confirmation}
            onChange={handleConfirmationInput}
          ></input>
        </div>
        <div>
          <button type={"submit"} className={style.button}>
            Sign Up
          </button>
        </div>
      </form>
      <h5 className={style.textInfo}>
        Already have an Account? <Link to="/signin">Sign In</Link>
      </h5>
    </div>
  );
};

export default SignUp;

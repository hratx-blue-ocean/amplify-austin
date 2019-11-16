import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import style from "./SignIn.module.css";

const SignIn = props => {
  const checkLogIn = function(username, password) {
    if (
      password.length >= 6 &&
      password.length <= 16 &&
      username.length >= 6 &&
      username.length <= 16
    ) {
      return true;
    }
  };
  //to do
  //verify account
  //styling

  return (
    <div className={style.container}>
      <h3 className={style.textInfo}>Sign In</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          axios
            .get("http://localhost:8000/api")
            .then(response => {
              console.log("compare users info with data base response.");
            })
            .catch(err => {
              console.log(err);
            });
        }}
      >
        <div>
          <input
            type={"text"}
            id={"username"}
            placeholder={"username"}
            className={style.textFeild}
          ></input>
        </div>
        <div>
          <input
            type={"password"}
            placeholder={"password"}
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
  );
};

export default SignIn;

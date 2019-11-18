import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import style from "./SignUp.module.css";

const SignUp = props => {
  const checkPassword = function(password, reenter) {
    if (password === reenter && password.length >= 8 && password.length <= 32) {
      return true;
    } else {
      return false;
    }
  };
  //to do

  //post request for new user
  //more password logic
  //styling

  return (
    <div className={style.container}>
      <h3 className={style.textInfo}>Create an Account</h3>
      <form
        onSubmit={e => {
          e.preventDefault();
          console.log(e.target[0].value, e.target[1].value, e.target[2].value);
          if (!checkPassword(e.target[1].value, e.target[2].value)) {
            alert("passwords did not match or password too short!");
            return;
          }
          axios
            .post("http://localhost:8000/api/signup", {
              username: e.target[0].value,
              password: e.target[1].value
            })
            .then(response => {
              localStorage.setItem("user_id", response.data.id);
              // next direct to main page
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
          <input
            type={"password"}
            placeholder={"confirm password"}
            className={style.textFeild}
          ></input>
        </div>
        <div>
          <input
            type={"submit"}
            value={"Sign Up"}
            className={style.button}
          ></input>
        </div>
      </form>
      <h5 className={style.textInfo}>
        Already have an Account? <Link to="/signin">Sign In</Link>
      </h5>
    </div>
  );
};

export default SignUp;

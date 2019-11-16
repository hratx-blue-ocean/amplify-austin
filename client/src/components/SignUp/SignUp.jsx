import React from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import style from "./SignUp.module.css";

const SignUp = props => {
  const checkPassword = function(password, reenter) {
    if (password === reenter && password.length >= 6 && password.length <= 18) {
      return true;
    }
  };
  //to do
  //post request for new user
  //more password logic
  //styling

  return (
    <div>
      Create an Account
      <form
        onSubmit={e => {
          e.preventDefault();
          axios
            .post("http://localhost:8000/api", {
              username: e.target[0].value,
              password: e.target[1].value
            })
            .then(response => {
              console.log(
                "this is the response from you attempt to create account: ",
                response
              );
            })
            .catch(err => {
              console.log(err);
            });
        }}
      >
        <div>
          <input type={"text"} id={"username"} placeholder={"username"}></input>
        </div>
        <div>
          <input type={"password"} placeholder={"password"}></input>
        </div>
        <div>
          <input type={"password"} placeholder={"confirm password"}></input>
        </div>
        <div>
          <input
            type={"submit"}
            value={"Sign Up"}
            className={style.button}
          ></input>
        </div>
      </form>
      <div>
        Already have an Account? <Link to="/signin">Sign In</Link>
      </div>
    </div>
  );
};

export default SignUp;

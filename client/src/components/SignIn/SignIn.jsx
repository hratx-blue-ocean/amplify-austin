import React from "react";
import axios from "axios";
import { Link } from "react-router-dom";
const SignIn = props => {
  const checkLogIn = function (username, password) {
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
    <div>
      Create an Account
      <form
        onSubmit={e => {
          e.preventDefault();
          axios.get('http://localhost:8000/api')
            .then(response => {
              console.log('compare users info with data base response.');
            })
            .catch(err => {
              console.log(err);
            })
        }}
      >
        <div>
          <input type={"text"} id={"username"} placeholder={"username"}></input>
        </div>
        <div>
          <input type={"password"} placeholder={"password"}></input>
        </div>
        <div>
          <input type={"submit"} value={"Sign Up"}></input>
        </div>
      </form>
      <div>
        Don't have an account? <Link to="/signup">Sign Up!</Link>
      </div>
    </div>
  );
};

export default SignIn;

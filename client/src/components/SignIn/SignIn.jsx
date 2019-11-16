import React from "react";

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
    <div>
      Create an Account
      <form
        onSubmit={e => {
          e.preventDefault();
          if (checkLogIn(e.target[0].value, e.target[1].value)) {
            console.log("I`m in! =>", e.target[0].value, e.target[1].value);
          } else {
            console.log("This password username combo is ass");
          }
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
        Don't have an account? <a href={""}>Sign Up</a>
      </div>
    </div>
  );
};

export default SignIn;

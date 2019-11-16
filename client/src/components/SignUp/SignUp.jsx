import React from "react";

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
          if (checkPassword(e.target[1].value, e.target[2].value)) {
            console.log(
              "These bad boys match =>",
              e.target[1].value,
              e.target[2].value
            );
          } else {
            console.log(
              "These passwords do not match, or too long, or not long enough"
            );
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
          <input type={"password"} placeholder={"confirm password"}></input>
        </div>
        <div>
          <input type={"submit"} value={"Sign Up"}></input>
        </div>
      </form>
      <div>
        Already have an Account? <a href={""}>Sign In</a>
      </div>
    </div>
  );
};

export default SignUp;

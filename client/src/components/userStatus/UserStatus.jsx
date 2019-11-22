import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import styles from "./userstatus.module.css";

const Userstatus = props => {
  const [name, setName] = useState("");
  const username = localStorage.getItem("username");
  const [logout, setLogout] = useState(
    window.innerWidth >= 1250 ? "permanent" : "temporary"
  );
  const history = useHistory();

  useEffect(() => {
    username ? setName(username) : setName("Login / Sign-Up");
  }, [username, name]);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth >= 1250) {
        setLogout("permanent");
      } else {
        setLogout("temporary");
      }
    });
  });

  const navToSignIn = () => {
    history.push("/signin");
  };

  const navToSignUp = () => {
    history.push("/signup");
  };

  return (
    <div className={styles.subheader}>
      {!username ? (
        <p className={styles.conditionalRenderP}>
          <span onClick={navToSignIn}>Login</span> /{" "}
          <span onClick={navToSignUp}>Sign Up</span>
        </p>
      ) : (
          <p
            onClick={() => {
              localStorage.removeItem("user_id");
              localStorage.removeItem("username");
              history.push("/signin");
            }}
            className={styles.conditionalRenderP}
          >
            {logout === "temporary" && "Log Out"}
          </p>
        )}
    </div>
  );
};

export default Userstatus;

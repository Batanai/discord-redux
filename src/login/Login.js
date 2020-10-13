import { Button } from "@material-ui/core";
import React from "react";
import { auth, provider } from "../firebase/firebase";
import "./Login.css";

const Login = () => {
  const signIn = () => {
    auth.signInWithPopup(provider).catch((error) => alert(error.message));
  };

  return (
    <div className="login">
      <div className="login__logo">
        <img
          src="https://www.wotangames.co.uk/wp-content/uploads/2020/08/Discord-LogoWordmark-Color.png"
          alt=""
        />
      </div>
      <Button onClick={signIn}>Sign In</Button>
    </div>
  );
};

export default Login;

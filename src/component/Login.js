import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";
import { LOGIN_BACKGROUND } from "../utils/constants";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  return (
    <div>
      <img
        className="absolute w-full h-screen -z-50 brightness-50  object-fill"
        alt="bg-image"
        src={LOGIN_BACKGROUND}
      />

      {isSignInForm ? (
        <Signin setIsSignInForm={setIsSignInForm} />
      ) : (
        <Signup setIsSignInForm={setIsSignInForm} />
      )}
    </div>
  );
};

export default Login;

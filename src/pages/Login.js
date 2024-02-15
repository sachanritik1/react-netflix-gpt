import React, { useState } from "react";
import Signin from "../component/Signin";
import Signup from "../component/Signup";
import { LOGIN_BACKGROUND } from "../utils/constants";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Login = () => {
  const user = useSelector((appStore) => appStore.user);
  const [isSignInForm, setIsSignInForm] = useState(true);
  return user ? (
    <Navigate to="/browse" />
  ) : (
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

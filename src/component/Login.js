import React, { useState } from "react";
import Signin from "./Signin";
import Signup from "./Signup";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);
  return (
    <div>
      <div className="absolute bg-gradient-to-t from-transparent to-black w-full h-24 mb-20 z-50">
        <img
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          className="w-56"
          alt="logo"
        />
      </div>

      <img
        className="absolute w-full h-screen -z-50 brightness-50  object-fill"
        alt="bg-image"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/d1532433-07b1-4e39-a920-0f08b81a489e/67033404-2df8-42e0-a5a0-4c8288b4da2c/IN-en-20231120-popsignuptwoweeks-perspective_alpha_website_large.jpg"
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

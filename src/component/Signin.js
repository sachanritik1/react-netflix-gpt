import React, { useRef, useState } from "react";
import { validateData } from "../utils/validate";

const Signin = ({ setIsSignInForm }) => {
  const email = useRef(null);
  const password = useRef(null);

  const [error, setError] = useState(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    const msg = validateData(email.current.value, password.current.value);
    setError(msg);
  };
  return (
    <form className="bg-black bg-opacity-80 w-[30%] absolute top-[10%] left-[35%] mx-auto flex flex-col py-20 px-10 text-white">
      <label className="font-medium text-4xl pb-10">Sign In</label>
      <input
        ref={email}
        className="p-3 my-3 rounded-md bg-gray-700"
        type="email"
        placeholder="Email"
      />
      <input
        ref={password}
        className="p-3 my-3 rounded-md bg-gray-700"
        type="password"
        placeholder="Password"
      />
      {error && <p className="text-red-600 text-sm">{error}</p>}
      <button
        className="p-3 mt-5 mb-2 bg-red-800 rounded-md"
        type="submit"
        onClick={handleButtonClick}
      >
        Sign In
      </button>
      <div className="flex justify-between text-gray-400 ">
        <p
          className="cursor-pointer hover:text-blue-300 "
          onClick={() => setIsSignInForm(false)}
        >
          Don't have an account? SignUp
        </p>

        <a className="hover:text-blue-300" href="/">
          Need help?
        </a>
      </div>
    </form>
  );
};

export default Signin;

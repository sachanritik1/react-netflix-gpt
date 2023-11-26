import React from "react";

const Signup = ({ setIsSignInForm }) => {
  return (
    <form className="bg-black bg-opacity-80 w-[35%] absolute top-[10%] left-[33%] mx-auto flex flex-col p-20 text-white">
      <label className="font-medium text-4xl pb-10">Sign Up</label>
      <input
        className="p-3 my-3 rounded-md bg-gray-700"
        type="text"
        placeholder="Full Name"
      />
      <input
        className="p-3 my-3 rounded-md bg-gray-700"
        type="email"
        placeholder="Email"
      />
      <input
        className="p-3 my-3 rounded-md bg-gray-700"
        type="password"
        placeholder="Password"
      />
      <button className="p-3 mt-5 mb-2 bg-red-800 rounded-md" type="submit">
        Sign Up
      </button>
      <div className="flex justify-between text-gray-400">
        <p
          className="cursor-pointer  hover:text-blue-300"
          onClick={() => setIsSignInForm(true)}
        >
          Already have an account? SignIn
        </p>
        <a className=" hover:text-blue-300" href="/">
          Need help?
        </a>
      </div>
    </form>
  );
};

export default Signup;

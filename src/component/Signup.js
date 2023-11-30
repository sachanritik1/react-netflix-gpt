import React, { useRef, useState } from "react";
import { validateData } from "../utils/validate";
import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser } from "../utils/userSlice";

const Signup = ({ setIsSignInForm }) => {
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = (e) => {
    e.preventDefault();
    const msg = validateData(email.current.value, password.current.value);
    setError(msg);

    createUserWithEmailAndPassword(
      auth,
      email.current.value,
      password.current.value
    )
      .then((userCredential) => {
        const user = userCredential.user;
        updateProfile(user, {
          displayName: name.current.value,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            const user = auth.currentUser;
            dispatch(
              addUser({
                uid: user.uid,
                email: user.email,
                displayName: user.displayName,
                photoURL: user.photoURL,
              })
            );
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setError(errorMessage + "-" + errorCode);
      });
  };
  return (
    <form className="bg-black bg-opacity-80 w-[30%] absolute top-[10%] left-[35%] mx-auto flex flex-col py-20 px-10 text-white">
      <label className="font-medium text-4xl pb-10">Sign Up</label>
      <input
        ref={name}
        className="p-3 my-3 rounded-md bg-gray-700"
        type="text"
        placeholder="Full Name"
      />
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

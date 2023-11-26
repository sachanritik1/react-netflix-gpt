import React from "react";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        // An error happened.
      });
  };
  return (
    <div className="flex justify-between items-center -mt-2 -ml-2 pr-2">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        className="w-56 "
        alt="logo"
      />
      <div className="flex">
        <img
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="user-avatar"
          className="w-10 h-10 cursor-pointer"
        />
        <button
          className="bg-red-800 p-2 rounded-md text-white text-sm"
          onClick={handleButtonClick}
        >
          SignOut
        </button>
      </div>
    </div>
  );
};

export default Header;

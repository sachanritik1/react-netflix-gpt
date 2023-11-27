import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";

const Header = () => {
  const user = useSelector((appStore) => appStore.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleButtonClick = () => {
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div className="absolute bg-gradient-to-t from-transparent to-black w-full h-24 mb-20 z-50 flex justify-between items center">
      <img
        src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
        className="w-56"
        alt="logo"
      />
      {user && (
        <div className="flex items-center">
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
      )}
    </div>
  );
};

export default Header;

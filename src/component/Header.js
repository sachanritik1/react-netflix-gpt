import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import { NETFLIX_LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const user = useSelector((appStore) => appStore.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    //on unmount
    return () => unsubscribe();
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
      <img src={NETFLIX_LOGO} className="w-56" alt="logo" />
      {user && (
        <div className="flex items-center">
          <img
            src={USER_AVATAR}
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

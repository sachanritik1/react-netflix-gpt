import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { signOut, onAuthStateChanged } from "firebase/auth";
import {
  NETFLIX_LOGO,
  SUPPORTED_LANGUAGES,
  USER_AVATAR,
} from "../utils/constants";
import { hideGpt, toggleGpt } from "../utils/gptSlice";
import { setLanguage } from "../utils/configSlice";

const Header = () => {
  const user = useSelector((appStore) => appStore.user);
  const [showGpt, setShowGpt] = useState(false);
  const [showSignOut, setShowSignOut] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(addUser({ uid, email, displayName, photoURL }));
        dispatch(hideGpt());
        // navigate("/browse");
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

  const handleShowGptSearch = () => {
    if (showGpt) {
      navigate("/browse");
    } else {
      navigate("/gpt/search");
    }
    setShowGpt(!showGpt);
  };

  const handleLanguageChange = (e) => {
    const selectedLanguage = e.target.value;
    dispatch(setLanguage(selectedLanguage));
  };
  return (
    <div className="absolute bg-gradient-to-t from-transparent to-black w-full h-24 mb-20 z-50 flex justify-between items-center">
      <img
        src={NETFLIX_LOGO}
        className="w-56"
        alt="logo"
        onClick={() => {
          navigate("/browse");
          setShowGpt(false);
        }}
      />
      {user && (
        <div className="flex items-center px-2">
          {showGpt && (
            <select
              className="bg-gray-800 text-white px-2 py-2 rounded-md mx-2"
              onChange={(e) => handleLanguageChange(e)}
            >
              {SUPPORTED_LANGUAGES.map((lang) => (
                <option key={lang.id} value={lang.id}>
                  {lang.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="bg-red-700 text-white px-4 py-2 rounded-md mx-2"
            onClick={handleShowGptSearch}
          >
            {showGpt ? "Home" : "GPT Search"}
          </button>
          <img
            src={USER_AVATAR}
            alt="user-avatar"
            className="w-10 h-10 cursor-pointer ml-2 rounded-lg mr-10"
            onClick={() => setShowSignOut(!showSignOut)}
          />
          {showSignOut && (
            <div className="fixed flex flex-col items-center gap-2 justify-center rounded-md text-black text-sm top-20 right-10 bg-gray-400 py-4 px-4">
              <p>@{user?.email}</p>
              <button
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md text-white"
                onClick={handleButtonClick}
              >
                SignOut
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Header;

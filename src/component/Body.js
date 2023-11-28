import React, { useEffect } from "react";
import Login from "./Login";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";

const Body = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <>
      <Header />
      <div className="bg-black">
        <Outlet />
      </div>
    </>
  );
};

export default Body;

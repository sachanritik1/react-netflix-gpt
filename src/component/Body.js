import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "./Header";

const Body = () => {
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

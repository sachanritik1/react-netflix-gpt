import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Header from "../component/Header";

const Body = () => {
  return (
    <div className="bg-black">
      <Header />
      <Outlet />
    </div>
  );
};

export default Body;

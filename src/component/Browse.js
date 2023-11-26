import React from "react";

import Header from "./Header";
import { useSelector } from "react-redux";
import appStore from "../utils/appStore";

const Browse = () => {
  const user = useSelector((appStore) => appStore.user);
  console.log(user);
  return (
    <div>
      <Header />
    </div>
  );
};

export default Browse;

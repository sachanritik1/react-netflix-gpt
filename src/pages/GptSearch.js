import React, { useEffect } from "react";
import GptSearchBar from "../component/GptSearchBar";
import GptMovieSuggestion from "../component/GptMovieSuggestion";

const GptSearch = () => {
  return (
    <div className="absolute w-full h-[250vh] bg-black">
      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;

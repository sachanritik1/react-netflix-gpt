import React from "react";
import { useSelector } from "react-redux";
import { lang } from "../languageConstants";

const GptSearch = () => {
  const langId = useSelector((appStore) => appStore.config.language);
  console.log(langId);
  return (
    <div className="absolute mt-32 z-50 w-full px-[30%]">
      <form className="flex justify-center bg-black p-4 rounded-md">
        <input
          className="p-2 w-72 rounded-md mx-2"
          placeholder={lang[langId].gptSearchPlaceholder}
        />
        <button className="text-white bg-red-600 mx-2 p-2 rounded-md">
          {lang[langId].gptSearchButton}
        </button>
      </form>
    </div>
  );
};

export default GptSearch;

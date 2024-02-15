import React from "react";
import { useNavigate } from "react-router-dom";

const VideoTitle = ({ mainMovie }) => {
  const { title, overview, id } = mainMovie;
  const navigate = useNavigate();
  return (
    <div className="absolute text-white bg-gradient-to-r px-6 pt-72 from-black w-full h-screen ">
      <p className="font-semibold text-6xl py-1">{title}</p>
      <p className="h-18 w-1/3 py-1 opacity-70">
        {overview.length < 300 ? overview : overview.slice(0, 300) + "..."}
      </p>
      <div className="flex py-1">
        <button
          className="bg-white text-black px-5 py-2 rounded-sm text-lg hover:bg-opacity-80"
          onClick={() => navigate("/watch/" + id)}
        >
          ▶️ Play
        </button>
        <button className="mx-5 bg-gray-600 px-5 py-2 rounded-sm text-white text-lg">
          ℹ️ More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;

import React from "react";

const VideoTitle = ({ title, overview }) => {
  return (
    <div className="absolute text-white bg-gradient-to-r px-6 pt-80 from-black w-full h-screen opacity-70">
      <p className="font-semibold text-6xl py-1">{title}</p>
      <p className="h-18 w-1/3 py-1">{overview}</p>
      <div className="flex py-1">
        <button className="bg-white text-black px-5 py-2 rounded-sm text-lg hover:bg-opacity-80">
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

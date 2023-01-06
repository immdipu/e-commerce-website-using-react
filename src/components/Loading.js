import React from "react";

const Loading = () => {
  return (
    <div>
      <div className="bg-white flex space-x-12 p-12 justify-center items-center">
        <div className="flex items-center justify-center space-x-2 animate-pulse">
          <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
          <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
          <div className="w-8 h-8 bg-indigo-500 rounded-full"></div>
        </div>
      </div>
    </div>
  );
};

export default Loading;

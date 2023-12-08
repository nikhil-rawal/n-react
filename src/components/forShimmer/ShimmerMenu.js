import React from "react";

const ShimmerMenu = () => {
  return (
    <div className="mx-40">
      <div className="flex animate-pulse flex-row items-center h-full justify-start my-6">
        <div className="w-5/12 bg-gray-300 h-5 rounded-2xl "></div>
      </div>
      <div className="flex animate-pulse flex-row items-center h-full justify-start my-6">
        <div className="w-3/12 bg-gray-300 h-5 rounded-2xl "></div>
      </div>
      <div className="w-6/12 h-24 border-2 rounded-md mx-auto mt-8">
        <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
          <div className="flex flex-col space-y-3">
            <div className="w-80 bg-gray-300 h-4 rounded-2xl "></div>
            <div className="w-60 bg-gray-300 h-4 rounded-2xl "></div>
          </div>
          <div className="w-16 bg-gray-300 h-16 rounded-full "></div>
        </div>
      </div>
      <div className="w-6/12 h-24 border-2 rounded-md mx-auto mt-8">
        <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
          <div className="flex flex-col space-y-3">
            <div className="w-80 bg-gray-300 h-4 rounded-2xl "></div>
            <div className="w-60 bg-gray-300 h-4 rounded-2xl "></div>
          </div>
          <div className="w-16 bg-gray-300 h-16 rounded-full "></div>
        </div>
      </div>
      <div className="w-6/12 h-24 border-2 rounded-md mx-auto mt-8">
        <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
          <div className="flex flex-col space-y-3">
            <div className="w-80 bg-gray-300 h-4 rounded-2xl "></div>
            <div className="w-60 bg-gray-300 h-4 rounded-2xl "></div>
          </div>
          <div className="w-16 bg-gray-300 h-16 rounded-full "></div>
        </div>
      </div>
      <div className="w-6/12 h-24 border-2 rounded-md mx-auto mt-8">
        <div className="flex animate-pulse flex-row items-center h-full justify-center space-x-5">
          <div className="flex flex-col space-y-3">
            <div className="w-80 bg-gray-300 h-4 rounded-2xl "></div>
            <div className="w-60 bg-gray-300 h-4 rounded-2xl "></div>
          </div>
          <div className="w-16 bg-gray-300 h-16 rounded-full "></div>
        </div>
      </div>
    </div>
  );
};

export default ShimmerMenu;

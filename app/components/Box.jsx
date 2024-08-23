import React from "react";

const Box = ({ children }) => {
  return (
    <div className="min-h-screen overflow-hidden w-full max-h-screen  flex lg:justify-center  relative lg:items-center ">
      <div className="w-full min-h-full lg:min-w-[90%]   z-50  lg:max-w-[1000px]   lg:min-h-[88vh] lg:max-h-[88vh]  lg:rounded-lg shadow-xl">
        {children}
      </div>
    </div>
  );
};

export default Box;

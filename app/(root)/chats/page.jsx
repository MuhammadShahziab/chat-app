import Box from "@app/components/Box";
import LeftSideBar from "@app/components/LeftSideBar";
import React from "react";

const ChatsPage = () => {
  return (
    <Box>
      <div className=" grid grid-cols-12  rounded-lg h-full  lg:min-h-[88vh] overflow-hidden lg:max-h-[88vh]    ">
        <div className="grid col-span-12 md:col-span-5 lg:col-span-3 md:border-r  ">
          <LeftSideBar />
        </div>
        <div className="grid col-span-7 lg:col-span-9 bg-white max-md:hidden ">
          <div className="flex flex-col justify-center  items-center">
            <img
              src="/assets/group-chat.png"
              className="w-52 object-contain animate-pulse"
            ></img>
            <p className="text-2xl">Download Chat App for Windows</p>
            <p className="text-gray-400 max-w-lg   lg:max-w-xl text-center mt-2">
              Make calls, share your screen and get a faster experience when you
              download the windows app.
            </p>
            <button className="bg-orange px-6 py-2 mt-6 rounded-full shadow-lg text-white">
              Get from Microsoft Store
            </button>
          </div>
        </div>
      </div>
    </Box>
  );
};

export default ChatsPage;

import React, { useRef, useState } from "react";
import { MdOutlineNavigateNext } from "react-icons/md";
import ImageSlider from "./ImageSlider";

const ChatMediaDropdown = ({ open, setOpen, icon, bg, color, data, title }) => {
  const imgRef = useRef();
  const [imageIndex, setImageIndex] = useState(null);

  const scrollImages = () => {
    imgRef.current.scrollBy({
      left: 100,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className={`${
          open ? "bg-gray-100" : ""
        } mt-2 px-3 rounded-md flex cursor-pointer justify-between items-center hover:bg-gray-100 py-2`}
      >
        <div className="flex gap-x-2">
          <span className={` ${bg} ${color} rounded-md px-3 py-1`}>{icon}</span>{" "}
          <div className="flex flex-col">
            <p className="text-sm">{title}</p>
            <p
              className="text-[12px] text-start 
             text-[#c4c4c4]"
            >
              {data?.length > 0 ? data?.length : "0"}
            </p>
          </div>
        </div>
        <MdOutlineNavigateNext
          className={`text-2xl transition-transform duration-300 ease-in-out ${
            open ? "rotate-90" : "rotate-0"
          }`}
        />
      </div>
      {open && data?.length > 0 && (
        <div className="px-3 flex transy items-center py-2 ">
          <div
            className="flex gap-x-2 overflow-x-scroll scrollbar-hide outline-none  w-full"
            ref={imgRef}
          >
            {data?.map((item, index) => (
              <img
                onClick={() => setImageIndex(index)}
                key={index}
                src={item}
                className="lg:w-14 lg:max-w-14 min-w-11 max-w-11 lg:h-14 h-11 cursor-pointer  object-cover rounded-md"
              ></img>
            ))}
          </div>
          <MdOutlineNavigateNext
            onClick={scrollImages}
            className="text-2xl cursor-pointer "
          ></MdOutlineNavigateNext>
        </div>
      )}

      <ImageSlider
        images={data}
        imageIndex={imageIndex}
        setImageIndex={setImageIndex}
      ></ImageSlider>
    </div>
  );
};

export default ChatMediaDropdown;

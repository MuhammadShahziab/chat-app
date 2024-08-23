import React from "react";
import { RxCross1 } from "react-icons/rx";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";
import { saveAs } from "file-saver";

const ImageSlider = ({ setImageIndex, images, imageIndex }) => {
  const showNextPhoto = () => {
    if (imageIndex < images?.length - 1) {
      setImageIndex(imageIndex + 1);
    }
  };

  const showPreImage = () => {
    if (imageIndex > 0) {
      setImageIndex(imageIndex - 1);
    }
  };

  const downloadImage = () => {
    saveAs(images[imageIndex], `image-${imageIndex + 1}.jpg`);
  };

  // Ensure imageIndex is valid
  const isVisible =
    imageIndex !== null && imageIndex >= 0 && imageIndex < images.length;

  return (
    <div
      className={`fixed top-0 left-0 right-0 bottom-0 bg-black z-50 flex justify-center items-center 
        ${isVisible ? "scale-100 opacity-100" : "scale-0 opacity-0"} 
        transition-transform  duration-300`}
    >
      <RxCross1
        onClick={() => setImageIndex(null)}
        className="absolute lg:right-10 right-5 top-5 lg:text-2xl text-xl cursor-pointer text-white"
      />

      <button
        onClick={downloadImage}
        className="absolute top-[18px] lg:right-24 right-16 text-[28px] text-white cursor-pointer"
      >
        <MdOutlineFileDownload />
      </button>

      <button
        onClick={showPreImage}
        disabled={imageIndex === 0}
        className="absolute top-1/2 lg:left-10 left-4 text-2xl text-white"
      >
        <FaChevronLeft />
      </button>

      <div className="lg:w-[50%] h-full flex items-center w-full">
        {isVisible && (
          <img
            src={images[imageIndex]}
            className="w-full h-full object-contain"
            alt={`Image ${imageIndex + 1}`}
          />
        )}

        <div className="absolute right-0 left-0 lg:bottom-7 py-2 bottom-12 bg-white/10 backdrop-blur-lg backdrop-saturate-150">
          <div className="flex gap-x-4 px-6  py-2  overflow-x-scroll scrollbar-hide items-center">
            {images?.map((image, index) => (
              <img
                onClick={() => setImageIndex(index)}
                key={index}
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className={`${
                  imageIndex === index ? "border-2  -translate-y-1" : ""
                } w-20 h-20 rounded-lg cursor-pointer object-contain`}
              />
            ))}
          </div>
        </div>
      </div>

      <button
        onClick={showNextPhoto}
        disabled={imageIndex === images?.length - 1}
        className="absolute top-1/2 lg:right-10 right-4 text-2xl text-white"
      >
        <FaChevronRight />
      </button>
    </div>
  );
};

export default ImageSlider;

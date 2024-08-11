import React from "react";

const ImageSlider = ({ images }) => {
  return (
    <>
      <div className="w-full sm:flex sm:flex-col gap-2 sm:w-1/3">
        <div className=" h-96 border border-gray-300 rounded-xl p-1">
          <img src={images.mainImage} alt="" />
        </div>

        <div>
          <div className=" hidden sm:flex gap-2 ">
            {images.chidlImages.map((subImage) => {
              return (
                <div className="w-20  border-2">
                  <img src={subImage.imgUrl} alt="" className="w-full" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;

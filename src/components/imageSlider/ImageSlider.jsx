import React from "react";

const ImageSlider = () => {
  return (
    <>
      <div className="w-full sm:flex sm:flex-col gap-2 sm:w-1/3">
        <div className=" h-96 border border-gray-300 rounded-xl p-1">
          <img
            src="https://images.mamaearth.in/catalog/product/w/h/white_bg.jpg?format=auto&height=600"
            alt=""
          />
        </div>

        <div>
          <div className=" hidden sm:flex gap-2 ">
            <div className="w-20 h-20 px-2 border-2 border-sky-700">
              <img
                src="https://images.mamaearth.in/catalog/product/o/n/onion-shampoo_3_1__7.jpg?format=auto&height=600"
                alt=""
                className="w-full"
              />
            </div>

            <div className="w-20 h-20 px-2 border-2 border-sky-700">
              <img
                src="https://images.mamaearth.in/catalog/product/o/n/onion-shampoo_4_8.jpg?format=auto&height=600"
                alt=""
                className="w-full"
              />
            </div>

            <div className="w-20 h-20 px-2 border-2 border-sky-700">
              <img
                src="https://images.mamaearth.in/catalog/product/o/n/onion-shampoo_6_7.jpg?format=auto&height=600"
                alt=""
                className="w-full"
              />
            </div>

            <div className="w-20 h-20 px-2 border-2 border-sky-700">
              <img
                src="https://images.mamaearth.in/catalog/product/o/n/onion-shampoo_7_5.jpg?format=auto&height=600"
                alt=""
                className="w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ImageSlider;

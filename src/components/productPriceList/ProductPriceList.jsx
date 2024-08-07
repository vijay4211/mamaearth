import React from "react";

const ProductPriceList = () => {
  return (
    <div className="overflow-auto flex gap-2 sm:flex sm:flex-wrap ">
      <div className="flex sm:flex gap-2 mb-3">
        <div className="border-2 border-green-600 rounded-xl">
          <p className=" px-3 py-1 rounded-tr-lg rounded-tl-lg font-semibold  bg-green-600 text-white">
            250ml
          </p>
          <p className="text-md font-semibold px-3 py-2">
            <span className="text-md font-bold">&#8377;</span>349.00
          </p>
          <p className="px-3 pb-2 text-green-900 font-semibold text-nowrap">
            <span className="font-bold">&#8377;</span> 140 / 100 ml
          </p>
        </div>

        <div className="  border-2 border-gray-300 rounded-xl">
          <p className=" px-3 py-1 rounded-tr-lg rounded-tl-lg bg-gray-300">
            400ml
          </p>
          <p className="text-md font-semibold px-3 py-2">
            <span className="text-md font-bold">&#8377;</span>499.00
          </p>
          <p className="px-3 pb-2 text-green-900 font-semibold text-nowrap">
            <span className="font-bold ">&#8377;</span> 125 / 100 ml
          </p>
        </div>

        <div className="  border-2 border-gray-300 rounded-xl">
          <p className=" px-3 py-1 rounded-tr-lg rounded-tl-lg  bg-gray-300">
            600ml
          </p>
          <p className="text-md font-semibold px-3 py-2">
            <span className="text-md font-bold">&#8377;</span>749.00
          </p>
          <p className="px-3 pb-2 text-green-900 font-semibold text-nowrap">
            <span className="font-bold">&#8377;</span> 125 / 100 ml
          </p>
        </div>
      </div>

      <div className="flex gap-2">
        <div className="border border-gray-400   rounded-xl">
          <p className="bg-gray-100 px-4 py-1 rounded-tr-xl rounded-tl-xl text-nowrap">
            650ml *{" "}
            <span className="text-sm text-blue-500">7h : 32m : 37s</span>
          </p>
          <div className=" flex gap-2 px-4 py-1">
            <div className="font-semibold">
              <span>&#8377;</span>
              <span>507.00</span>
            </div>
            <div className="font-semibold text-gray-400  line-through	">
              <span>&#8377;</span>
              <span>845</span>
            </div>
            <div className="text-red-600 text-nowrap">
              <span>40% off</span>
            </div>
          </div>
          <p className=" px-4 pt-1 pb-2 font-semibold text-green-700">
            <span>&#8377; 78 / 100 ml</span>
          </p>
        </div>

        <div className="border border-gray-400  rounded-xl">
          <p className="bg-gray-100 px-4 py-1 rounded-tr-xl rounded-tl-xl text-nowrap">
            1000ml *{" "}
            <span className="text-sm text-blue-500">7h : 32m : 37s</span>
          </p>
          <div className=" flex gap-2 px-4 py-1">
            <div className="font-semibold">
              <span>&#8377;</span>
              <span>649.00</span>
            </div>
            <div className="font-semibold text-gray-400  line-through	">
              <span>&#8377;</span>
              <span>845</span>
            </div>
            <div className="text-red-600 text-nowrap">
              <span>40% off</span>
            </div>
          </div>
          <p className=" px-4 pt-1 pb-2 font-semibold text-green-700">
            <span>&#8377; 65 / 100 ml</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProductPriceList;

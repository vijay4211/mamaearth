import React from "react";

const ProductPriceList = ({ liquiedData, liquiedData1 }) => {

  return (
    <div className="overflow-auto flex gap-2 sm:flex sm:flex-wrap">

      <div className="flex sm:flex gap-2 mb-3">
        {liquiedData.map((liquid) => {
          return (
            <div className="border-2 border-green-600 rounded-xl">
              <p className=" px-3 py-1 rounded-tr-lg rounded-tl-lg font-semibold  bg-green-600 text-white">
                {liquid.liquiedInUnite}
              </p>
              <p className="text-md font-semibold px-3 py-2">
                <span className="text-md font-bold">&#8377;</span>
                {liquid.liquiedAmout}
              </p>
              <p className="px-3 pb-2 text-green-900 font-semibold text-nowrap">
                <span className="font-bold">&#8377;</span>
                {liquid.liquiedAmoutWithAmout}
              </p>
            </div>
          );
        })}
      </div>

      <div className="flex gap-2">
        {liquiedData1.map((liquid1) => {
          return (
            <div className="border border-gray-400   rounded-xl">
              <p className="bg-gray-100 px-4 py-1 rounded-tr-xl rounded-tl-xl text-nowrap">
                {liquid1.liquiedInUnite}{" "}
                <span className="text-sm text-blue-500">{liquid1.timmer}</span>
              </p>
              <div className=" flex gap-2 px-4 py-1">
                <div className="font-semibold">
                  <span>&#8377;</span>
                  <span>{liquid1.liquiedAmout}</span>
                </div>
                <div className="font-semibold text-gray-400  line-through	">
                  <span>&#8377;</span>
                  <span>{liquid1.liquiedOldPrice}</span>
                </div>
                <div className="text-red-600 text-nowrap">
                  <span>{liquid1.liquiedDiscount} off</span>
                </div>
              </div>
              <p className=" px-4 pt-1 pb-2 font-semibold text-green-700">
                <span>&#8377; {liquid1.liquiedAmoutWithAmout}</span>
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ProductPriceList;

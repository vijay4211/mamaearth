import React from "react";
import { CiStar } from "react-icons/ci";
import { FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import { FaShoppingCart } from "react-icons/fa";

const ProductAddToCard = () => {
  return (
    <>
      <div className="text-white bg-blue-400 fixed left-0 right-0 bottom-0 rounded-sm flex justify-center items-center gap-2 px-1 py-2 sm:hidden">
        <span>
          <FaShoppingCart />
        </span>
        <span className="font-sans text-sm">ADD TO CARD</span>
      </div>

      <div className="hidden sm:block w-1/5  border border-gray-300  px-3 py-2 rounded-lg  top-1/2 right-20 fixed">
        <p className="text-xl font-semibold">
          <span>&#8377;</span>
          <span>559.00</span>
        </p>

        <p className="text-sm text-gray-600 italic">Inclusive of all Taxes</p>

        <div className=" flex gap-3 py-2">
          <div className="flex items-center gap-1">
            <span className="font-medium text-gray-700">4.8</span>
            <CiStar className="text-orange-500" />
          </div>
          <p className="text-sky-600 font-medium">311 Reviwes</p>
        </div>
        <span>400ml</span>

        <div className="flex items-center gap-4 mb-2">
          <span>Quantity : </span>
          <div className="border border-gray-400 flex items-center gap-3 rounded-md px-1  py-1">
            <span className="hover:bg-blue-500 px-2 py-1 hover:text-white  cursor-pointer">
              <FaMinus />
            </span>
            <span className="font-medium">1</span>
            <span className="text-blue-500 hover:bg-blue-500 hover:text-white cursor-pointer px-2 py-1">
              <FaPlus />
            </span>
          </div>
        </div>

        <div className="text-white bg-blue-400  rounded-sm flex justify-center items-center gap-2 px-1 py-2">
          <span>
            <FaShoppingCart />
          </span>
          <span className="font-sans text-sm">ADD TO CARD</span>
        </div>
      </div>
    </>
  );
};

export default ProductAddToCard;

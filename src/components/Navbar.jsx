import React, { useContext } from "react";
import { IoIosSearch } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { FiUser } from "react-icons/fi";
import earth from "../assets/img-1.svg";

import { countContext } from "../App";
const Navbar = () => {
  const { name, setName } = useContext(countContext);

  function namehandler(event) {
    setName(event.target.value);
  }

  return (
    <div>


      <div className="flex justify-between bg-red-500 text-white text-xs px-8 py-2 w-full">
        <a href="#" className="hidden sm:block">
          Asia's 1st Brand with MADE SAFE Certified Productions
        </a>

        <a href="#">
          Get Upto 25% Off On Orders Above Rs. 599 | Use Code: SAVE25 | SHOP NOW
        </a>
      </div>






      {/* =======================For Desktop Responsive======================== */}
      {/* ===================Search Bar==================== */}
      <div className="flex justify-between sm:justify-evenly  items-center  py-2 px-2 sm:px-20 border">
       
       
       
       
        <div>
          <img
            className=" sm:w-32 w-28"
            src="https://images.mamaearth.in/wysiwyg/mamaearth-logo.png"
            alt="Image"
          />
        </div>





        <div className="hidden sm:flex  rounded-md w-1/2 border">
          <div className="mt-2 px-1">
            <IoIosSearch className="text-xl" />
          </div>
          <div className="mx-3 my-1 w-full border-green-900">
            <input
              type="text"
              placeholder="Enter Name"
              className="outline-none w-full"
              onChange={namehandler}
              value={name}
            />
          </div>

          <div className="flex align-middle bg-blue-300 px-3 py-1 gap-1 w-24 rounded-tr-md rounded-br-md">
            <div className="mt-1">
              <IoIosSearch className="text-xl" />
            </div>
            <div className="">
              <button>Search</button>
            </div>
          </div>

          
        </div>





        <div className="">
          <img src={earth} alt="" className="h-10 hidden sm:block" />
        </div>




        <div className="flex gap-6">
          <div className="flex items-center gap-2">
            <IoCartOutline className="text-blue-300 text-2xl" />
            <h5 className="text-sm   hidden sm:block">Cart</h5>
          </div>

          <div className="flex items-center gap-2">
            <FiUser className="text-2xl text-blue-300" />
            <h5 className=" hidden sm:block"> Login</h5>
          </div>
        </div>





      </div>






      {/* =======================For Mobile Responsive======================== */}
      <div className="flex rounded-md w-full border sm:hidden">
       
       
       
        <div className="mt-2 px-1">
          <IoIosSearch className="text-xl" />
        </div>



        <div className="mx-3 my-1 w-full border-green-900">
          <input
            type="text"
            placeholder="Enter Name"
            className="outline-none"
            onChange={namehandler}
            value={name}
          />
        </div>



        <div className="flex align-middle bg-blue-300 px-3 py-1 gap-1 w-24 rounded-tr-md rounded-br-md">
          <div className="mt-1">
            <IoIosSearch className="text-xl" />
          </div>
          <div className="">
            <button>Search</button>
          </div>
        </div>




      </div>




    </div>
  );
};

export default Navbar;

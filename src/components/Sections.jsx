
import React from 'react'
import { FaAngleRight } from "react-icons/fa6";


const Sections = () => {
  return (
    <div>

<div className="px-3  flex sm:justify-evenly justify-between items-center">
        <div>
          <p className="text-2xl font-medium">Best Sellers</p>

          <p className="hidden my-4 font-serif sm:block ">
            Explore best-selling safe, natural, and 100% toxin-free baby and
            beauty products from Mamaearth. Get amazing deals and start your
            toxin-free skin, hair, and baby care journey.
          </p>
        </div>

        <div className="flex justify-center items-center gap-1  border border-blue-700 rounded-lg px-3 py-1 text-xs  text-blue-700  sm:bg-blue-500 sm:rounded-md sm:text-nowrap sm:px-2 sm:py-2 sm:text-white  ">
          <button className="text-md">VIEW ALL</button>
          <FaAngleRight className="text-lg sm:hidden" />
        </div>
      </div>

    </div>
  )
}

export default Sections

// import bestSeller from "../assets/bestSeller_1.avif";
import { IoStarSharp } from "react-icons/io5";
import { MdOutlineCurrencyRupee } from "react-icons/md";

function Card({
  imageUrl,
  title,
  descrition,
  starCount,
  reviewCount,
  priceCount,
  tag,
}) {
  return (
    <div className="border shadow-2xl px-3  sm:px-0 sm:shadow-none sm:rounded-tl-lg relative">
      <img className="w-full" src={imageUrl} alt="" />

      <div className=" ">
        <p className="py-1 text-center text-sm sm:text-lg font-semibold px-2 sm:p-3 h-24">
          {title}
        </p>
        <p className="py-1 text-center sm:flex justify-center items-center text-green-500">
          {descrition}
        </p>

        <div className="mt-1 flex justify-center gap-3 sm:mt-1">
          <div className="flex items-center gap-1">
            <IoStarSharp className="text-xs text-orange-300 font-bold" />
            <p className="text-sm">{starCount}</p>
          </div>

          <div className="flex items-center gap-1">
            <IoStarSharp className="text-xs" />
            <p className="text-sm sm:text-sm">{reviewCount}</p>
          </div>
        </div>

        <div className="flex justify-center items-center">
          <span>
            <MdOutlineCurrencyRupee className="text-md sm:text-lg " />
          </span>
          <p className=" text-md flex justify-center py-3 sm:text-xl font-medium">
            {priceCount}
          </p>
        </div>

        <div className="mb-3  bg-blue-400 sm:py-1 text-center rounded-lg">
          <button className="py-2 text-white font-medium ">ADD TO CART</button>
        </div>
      </div>

      {tag === "BEST SELLER" && (
        <div className="absolute top-0 bg-blue-300 text-white text-xs px-3 py-1 rounded-tl-md rounded-br-md">
          Best Seller
        </div>
      )}

      {tag === "TRENDING" && (
        <div className="absolute top-0 bg-orange-400 text-white text-xs px-3 py-1 rounded-tl-md rounded-br-md ">
          TRENDING
        </div>
      )}
    </div>
  );
}
export default Card;

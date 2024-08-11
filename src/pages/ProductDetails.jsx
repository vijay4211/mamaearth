import { useParams } from "react-router-dom";
import ImageSlider from "../components/imageSlider/ImageSlider";
import ProductAddToCard from "../components/productPriceList/ProductAddToCard";
import ProductPriceList from "../components/productPriceList/ProductPriceList";
import { CiStar } from "react-icons/ci";
import { productList } from "../data/Data";

function ProductDetails() {
  // useParams
  const { id } = useParams();
  

  const findProductData = productList.find((item) => item.id == id);
  console.log("findProductData", findProductData); 

  return (
    <>
      <div className=" sm:flex sm:px-28 sm:gap-3  pb-20">
        {/* Left Side */}
        <ImageSlider images={findProductData.Images} />

        <div className="mt-7 px-2  sm:px-0 sm:mt-0 w-full sm:w-2/3">
          {/* Right side*/}

          <div className="hidden text-md sm:block">
            <span>
              Home <span>&gt;</span>
            </span>
            <span>
              Hair-Shampoo <span>&gt; </span>
            </span>
            <span>{findProductData.title}</span>
          </div>

          <p className="text-xl mt-2 mb-3">{findProductData.title}</p>

          <p className="text-xl my-2 text-gray-600">
            {findProductData.description}
          </p>

          <div className="flex gap-3">
            <div className="flex items-center gap-1">
              <p className="text-md">{findProductData.starCount}</p>
              <CiStar className="text-xs text-orange-500" />
            </div>
            <div>
              <p className="text-md text-blue-400 font-semibold">
                {findProductData.reviewCount}
              </p>
            </div>
          </div>

          <div className="flex gap-1">
            <div className="text-xl font-semibold">
              <span className="">&#8377;</span>
              <span>{findProductData.priceCount}</span>
            </div>
            <div className="flex items-end">
              {" "}
              <span className="flex items-end text-sm text-gray-500 italic">
                Incl.of all taxes
              </span>{" "}
            </div>
          </div>

          <p className="font-semibold text-gray-700 my-1 text-lg">
            Select Variant
          </p>

          <ProductPriceList
            liquiedData={findProductData.liquidData}
            liquiedData1={findProductData.liquidData1}
          />
        </div>

        <ProductAddToCard />
      </div>
    </>
  );
}
export default ProductDetails;

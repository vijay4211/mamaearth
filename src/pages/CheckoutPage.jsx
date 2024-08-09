import { PiNotepadLight } from "react-icons/pi";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { IoIosCheckmark } from "react-icons/io";

function CheckoutPage() {
  return (
    <>
      <div className="flex flex-col py-9 px-3 sm:px-28 sm:py-10 sm:flex sm:flex-row sm:gap-1 h-lvh">
        {/* left section */}
        <div className=" w-full sm:w-4/6 sm:pr-16">
          <div className="flex justify-between">
            <div className="flex gap-1 items-center">
              {" "}
              <span>
                <PiNotepadLight className="text-3xl font-extrabold" />
              </span>
              <span className="text-md font-medium text-gray-700">
                Cart details
              </span>
            </div>
            <div>
              <span className="text-sm font- text-gray-600">
                Total items: <span className="text-black font-medium">1</span> |
                To pay:{" "}
                <span className="text-black font-medium">&#8377;531.05</span>
              </span>
            </div>
          </div>

          <div className="flex items-center justify-between gap-2 py-4">
            <div className="flex gap-1 h-20">
              <div className="w-44 sm:w-20 px-1 border-gray-600">
                <img
                  src="https://images.mamaearth.in/catalog/product/w/i/with-ingredient.jpg"
                  alt=""
                  className=""
                />
              </div>

              <div className=" gap-1 flex flex-col sm:gap-6">
                <p className="text-xs font-medium text-gray-600">
                  Onion Shampoo with Oninon & Plant Keratin for Hair Fall
                  Control - 400ml
                </p>
                <span className="text-xs font-medium">&#8377;599</span>
              </div>
            </div>

            <div className="border border-gray-100 flex  sm:border-gray-300  sm:flex  sm:px-2 justify-center items-center  rounded-sm">
              <div className=" px-2 py-2 h-full text-xs  flex items-center ">
                <FiMinus />
              </div>
              <div className="px-3 py-2 h-full text-xs font-bold  flex items-center bg-gray-300">
                1
              </div>
              <div className=" px-2 py-2 h-full text-xs  flex items-center">
                <FaPlus />
              </div>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className=" sm:w-2/5  sm:pl-16">
          <div className="flex items-center gap-1 pb-2">
            <span className="text-3xl">
              <PiNotepadLight className="font-medium" />
            </span>
            <span className="font-medium">Price Summary</span>
          </div>

          <div className="sm:w-full sm:pl-9">
            <div className="flex justify-between items-center py-1">
              <p className="text-sm text-gray-500">Order Total</p>
              <p className="text-sm font-medium">&#8377;559.00</p>
            </div>
            <div className="flex justify-between items-center py-1">
              <p className="text-sm text-gray-500">Shipping</p>
              <div className="flex gap-1 items-center">
                <span className="font-medium text-green-500">Free</span>
                <span className="text-sm font-medium line-through">
                  &#8377;40
                </span>
              </div>
            </div>
            <div className="flex justify-between py-1">
              <p className="text-sm text-gray-500">
                5% online payment discount
              </p>
              <p className="text-sm font-medium text-green-500">
                -&#8377;27.05
              </p>
            </div>

            <div className="border border-gray-200 my-2"></div>

            <div className="flex justify-between">
              <p className="font-medium tex">To Pay</p>
              <p className="text-sm font-medium">&#8377;531.05</p>
            </div>

            <div className="hidden mt-9 sm:block">
              <div className="hidden  border-2 bg-gray-100 sm:flex items-center mt-7 px-1 py-3 rounded-tr-xl rounded-tl-xl">
                <span className="text-green-600 font-extrabold text-2xl">
                  <IoIosCheckmark />
                </span>
                <p className="text-gray-700 text-sm">
                  You are saving
                  <span className="text-black font-semibold">
                    &#8377;67.95
                  </span>{" "}
                  on this order
                </p>
              </div>
              <button className=" bg-blue-500 py-3 w-full rounded-lg text-white font-semibold">
                Add address
              </button>
            </div>
          </div>
        </div>

        {/* ====================for mobile (made add to card button)) */}
        <div className="sm:hidden bg-green-500 fixed bottom-0 left-0 right-0 px-3 py-2">
          <div className="flex items-center bg-blue-100 rounded-tl-lg rounded-tr-lg">
            <span className="text-green-600 font-extrabold text-2xl">
              <IoIosCheckmark />
            </span>
            <p className="text-gray-700 text-sm">
              You are saving
              <span className="text-black font-semibold">&#8377;67.95</span> on
              this order
            </p>
          </div>

          <div className="flex text-white">
            <div className="flex flex-col px-2 py-1 bg-blue-600 rounded-bl-lg">
              <span>To pay</span>
              <span>305.00</span>
            </div>
            <div className=" w-full py-4 bg-blue-500 rounded-br-lg">
              <div className="flex items-center justify-center">
                ADD TO CARD
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CheckoutPage;

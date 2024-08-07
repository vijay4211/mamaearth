import { PiNotepadLight } from "react-icons/pi";
import { FiMinus } from "react-icons/fi";
import { FaPlus } from "react-icons/fa6";
import { IoIosCheckmark } from "react-icons/io";

function CheckoutPage() {
  return (
    <>
      <div className=" px-28 py-10 flex">
        {/* left section */}
        <div className=" w-4/6 pr-16">
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
            <div className="flex gap-2">
              <div className="w-16 border px-1 border-gray-300 rounded-md  ">
                <img
                  src="https://images.mamaearth.in/catalog/product/w/i/with-ingredient.jpg"
                  alt=""
                />
              </div>

              <div className="flex flex-col gap-6">
                <p className="text-xs font-medium">
                  Onion Shampoo with Oninon & Plant Keratin for Hair Fall
                  Control - 400ml
                </p>
                <span className="text-xs font-medium">&#8377;599</span>
              </div>
            </div>

            <div className="border-2 border-gray-200 h-8 flex  justify-center items-center  rounded-sm">
              <div className=" px-2 py-2 h-full text-xs  flex items-center ">
                <FiMinus />
              </div>
              <div className="px-2 py-2 h-full text-xs  flex items-center bg-gray-300">
                1
              </div>
              <div className=" px-2 py-2 h-full text-xs  flex items-center">
                <FaPlus />
              </div>
            </div>
          </div>
        </div>

        {/* right section */}
        <div className=" h-52 w-2/5  pl-16">
          <div className="flex items-center gap-1 pb-2">
            <span className="text-3xl">
              <PiNotepadLight className="font-medium" />
            </span>
            <span className="font-medium">Price Summary</span>
          </div>

          <div className="w-full pl-9">
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

            <div className="mt-9">
              <div className="border-2 bg-gray-100 flex items-center mt-7 px-1 py-3 rounded-tr-xl rounded-tl-xl">
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
              <button className="bg-blue-500 py-3 w-full rounded-lg text-white font-semibold">
                Add address
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default CheckoutPage;

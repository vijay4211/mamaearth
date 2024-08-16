import { useState } from "react";
import { RxCross1 } from "react-icons/rx";
import { useNavigate } from "react-router-dom";

function LoginPage() {
  // define state
  const [inputValue, setInputValue] = useState("");

  function handleInputChange(event) {
    console.log("event", event.target.value);
    setInputValue(event.target.value);
  }

  const navigator = useNavigate();

  function logiWithOtphandler() {
    navigator("/signuppage");
  }

  return (
    <>
      <div className=" sm:flex sm:justify-center">
        <div className=" px-5 sm:w-1/3 h-96 rounded-xl border-2 sm:px-10">
          <span className="flex justify-end">
            <RxCross1 className="text-lg cursor-pointer" />
          </span>
          <div>
            <h1 className="text-2xl flex justify-center py-5 font-medium">
              Login/ Signup
            </h1>
            <div className="flex">
              <div className="p-3 border">+91</div>
              <div className="w-full border">
                <input
                  type="tel"
                  placeholder="Mobile number"
                  className="p-3 w-full border-none outline-none"
                  onChange={handleInputChange}
                  value={inputValue}
                  maxLength={10}
                />
              </div>
            </div>
            <div className="mt-6  text-sm">
              <p className="flex justify-center">
                By continuing, you agree to Mamaearth's
              </p>
              <p className="text-blue-600 flex justify-center gap-1">
                Terms and Conditions<span className="text-black">and</span>
                Privacy Policy
              </p>
            </div>
            <button
              className="bg-blue-500 py-3 w-full text-white font-semibold mt-4"
              onClick={logiWithOtphandler}
            >
              Login with OTP
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default LoginPage;

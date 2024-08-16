import { GoArrowLeft } from "react-icons/go";

function SignupPage() {
  return (
    <>
      <div className="flex justify-center h-lvh">
        <div className="sm:w-1/3 border-2 shadow-2xl sm:rounded-2xl py-3">
          <div className="flex gap-3 pl-4">
            <span>
              <GoArrowLeft className="text-xl sm:text-3xl text-gray-500" />
            </span>
            <p className="sm:text-2xl text-blue-500">
              Signup for the Goodness Inside
            </p>
          </div>
          <div className="px-10">
            <div className="p-2 border-2 my-5">
              <input
                type="text"
                placeholder="8007696483"
                disabled
                className="w-full outline-none"
              />
            </div>
            <div className="p-2 border-2 my-5">
              <input
                type="text"
                placeholder="FirstName"
                className="w-full outline-none"
              />
            </div>
            <div className="border-2 my-5 p-2">
              <input
                type="text"
                placeholder="LastName"
                className="w-full outline-none"
              />
            </div>
            <div className="border-2 my-5 p-2">
              <input
                type="text"
                placeholder="Emain ID"
                className="w-full outline-none"
              />
            </div>

            <p>Gender</p>
            <div className="flex gap-5 py-2 text-gray-600">
              <div className="text-sm  flex items-center gap-2 sm:text-md">
                <input type="radio" name="name" />
                <span>Male</span>
              </div>
              <div className="text-sm  flex items-center gap-2 sm:text-md">
                <input type="radio" name="name" />
                <span>Female</span>
              </div>
              <div className="text-sm  flex items-center gap-2 sm:text-md">
                <input type="radio" name="name" />
                <span>Not Specified</span>
              </div>
            </div>

            <div className="border-2 p-2 my-3">
              <input type="date" className="w-full outline-none" />
            </div>

            <div className="border-2 p-2 my-3">
              <input
                type="text"
                placeholder="REFERAL CODE"
                className="w-full outline-none"
              />
            </div>
            <button className="bg-blue-600 text-white py-2 w-full">
              SIGN UP
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
export default SignupPage;

import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

function NavbarShow({ children }) {
  const [shownavbar, setShowNavbar] = useState(false);

  const location = useLocation();

  // every time location change it will Re-render.
  useEffect(() => {
    // console.log("location");
    if (location.pathname == "CheckoutPage") {
      setShowNavbar(false);
    } else {
      setShowNavbar(false);
    }
  }, [location]);

  return (
    <>
      <div>{shownavbar && children}</div>
      <div className="">
        <div className="bg-red-100 h-16 px-20"></div>
      </div>
    </>
  );
}
export default NavbarShow;

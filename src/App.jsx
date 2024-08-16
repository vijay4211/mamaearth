import { createContext, useState } from "react";
import "./App.css";
// import Child2 from "./Child2";
import Navbar from "./components/Navbar";
import HomeScreen from "./pages/HomeScreen";
import ProductDetails from "./pages/ProductDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CheckoutPage from "./pages/CheckoutPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";

//create Context
export const countContext = createContext();
function App() {
  //define state
  const [name, setName] = useState();

  //navbar

  return (
    <countContext.Provider value={{ name, setName }}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="" element={<HomeScreen />} />
          <Route path="/productDetails/:id" element={<ProductDetails />} />
          <Route path="checkoutpage" element={<CheckoutPage />} />
          <Route path="loginpage" element={<LoginPage />} />
          <Route path="signuppage" element={<SignupPage />} />
        </Routes>
      </BrowserRouter>
    </countContext.Provider>
  );
}

export default App;

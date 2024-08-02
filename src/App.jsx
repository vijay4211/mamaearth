import { createContext, useState } from "react";
import "./App.css";
// import Child2 from "./Child2";
import Navbar from "./components/Navbar";
import HomeScreen from "./components/HomeScreen";
import ListBar from "./components/ListBar";
import Banner from "./components/Banner";

//create Context
export const countContext = createContext();
function App() {
  //define state
  const [name, setName] = useState();

  return (
    <countContext.Provider value={{ name, setName }}>
      <div className="App">
        <Navbar />
        <ListBar />
        <Banner />
        <HomeScreen />
      
      </div>
    </countContext.Provider>
  );
}

export default App;

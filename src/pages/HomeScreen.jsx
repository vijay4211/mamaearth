import React, { useContext, useEffect } from "react";
import { countContext } from "../App";
import Sections from "../components/Sections";

import { productList } from "../data/Data";
import Card from "../components/card/Card";
import Banner from "../components/Banner";
import { useNavigate } from "react-router-dom";

function HomeScreen() {
  const { name } = useContext(countContext);

  const navigator = useNavigate();

  function clickHandler(id) {
    console.log("id==",id); //1
    
    
    navigator(`/productDetails/${id}`);
  }

  return (
    <div className="sm:px-32 sm:mt-14">
      <h1>{name}</h1>
      <Banner />
      <Sections />
      <div
        className="grid grid-cols-2  sm:grid-cols-4 gap-2"
       
      >
        {productList.map((product, index) => {
          return (
            <Card
            clickHandler = {clickHandler}
              key={index}
              id={product.id}
              title={product.title}
              descrition={product.descrition}
              starCount={product.starCount}
              reviewCount={product.reviewCount}
              priceCount={product.priceCount}
              imageUrl={product.imageUrl}
              tag={product.tag}
            />
          );
        })}
      </div>
    </div>
  );
}
export default HomeScreen;

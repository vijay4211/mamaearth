import React, { useContext } from "react";
import { countContext } from "../App";
import Sections from "./Sections";
import Card from "./Card";
import { productList } from "../data/Data";

function HomeScreen() {
  const { name } = useContext(countContext);
  //   console.log(productList);

  return (
    <div className="sm:px-32 sm:mt-14">
      <h1>{name}</h1>
      <Sections />
      <div className="grid grid-cols-2  sm:grid-cols-4 gap-2">
        {productList.map((product, index) => {
          return (
            <Card
              key={index}
              id={product.id}
              title={product.title}
              descrition={product.descrition}
              starCount={product.starCount}
              reviewCount={product.reviewCount}
              priceCount={product.priceCount}
              imageUrl={product.imageUrl}
              tag = {product.tag}
            />
          );
        })}
      </div>
    </div>
  );
}
export default HomeScreen;

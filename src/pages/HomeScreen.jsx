import React, { useContext } from "react";
import { countContext } from "../App";
import Sections from "../components/Sections";

import { productList } from "../data/Data";
import Card from "../components/card/Card";
import Banner from "../components/Banner";

function HomeScreen() {
  const { name } = useContext(countContext);

  return (
    <div className="sm:px-32 sm:mt-14">
      <h1>{name}</h1>
      <Banner />
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
              tag={product.tag}
            />
          );
        })}
      </div>
    </div>
  );
}
export default HomeScreen;

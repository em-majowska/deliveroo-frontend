import React from "react";
import Category from "./Category";
import Cart from "./Cart";
import Hero from "./Hero";

const Main = ({ data }) => {
  return (
    <main>
      <Hero
        title={data.restaurant.name}
        content={data.restaurant.description}
        picture={data.restaurant.picture}
      />
      <div className="content container">
        <div className="categories">
          {data.categories.slice(0, 6).map((category, index) => {
            return (
              <Category
                key={index}
                name={category.name}
                meals={category.meals}
              />
            );
          })}
        </div>
        <Cart />
      </div>
    </main>
  );
};

export default Main;

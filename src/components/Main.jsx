import Category from "./Category";
import Cart from "./Cart";
import Hero from "./Hero";
import { useState } from "react";

const Main = ({ data }) => {
  const [cart, setCart] = useState([]);

  return (
    <main>
      <Hero
        title={data.restaurant.name}
        content={data.restaurant.description}
        picture={data.restaurant.picture}
      />
      <div className="content container">
        <div className="categories">
          {data.categories.map((category, index) => {
            return (
              category.meals.length > 0 && (
                <Category
                  key={`${category.name} ${index}`}
                  category={category}
                  setCart={setCart}
                  cart={cart}
                />
              )
            );
          })}
        </div>
        <Cart cart={cart} setCart={setCart} isMobile={false} />
        <Cart cart={cart} setCart={setCart} isMobile={true} />
      </div>
    </main>
  );
};

export default Main;

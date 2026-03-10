import Category from "./Category";
import Cart from "./Cart";
import Hero from "./Hero";
import { useState, useEffect } from "react";

const Main = ({ data }) => {
  const getWindowSize = () => {
    const { innerWidth, innerHeight } = window;
    return { innerWidth, innerHeight };
  };
  const [cart, setCart] = useState([]);
  const [windowSize, setWindowSize] = useState(getWindowSize());

  useEffect(() => {
    const handleWindowResize = () => setWindowSize(getWindowSize());

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

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
        <Cart
          cart={cart}
          setCart={setCart}
          isMobile={windowSize.innerWidth < 769}
        />
      </div>
    </main>
  );
};

export default Main;

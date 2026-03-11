import Hero from "./Hero";
import { useState } from "react";
import Menu from "./Menu";

const Main = ({ data }) => {
  const [cart, setCart] = useState([]);

  return (
    <main>
      <Hero
        title={data.restaurant.name}
        content={data.restaurant.description}
        picture={data.restaurant.picture}
      />

      <Menu cart={cart} setCart={setCart} data={data} />
    </main>
  );
};

export default Main;

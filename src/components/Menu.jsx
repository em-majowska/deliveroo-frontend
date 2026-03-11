import Cart from "./Cart";
import Category from "./Category";

const Menu = ({ data, cart, setCart }) => {
  return (
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
  );
};

export default Menu;

import Item from "./Item";

const Category = ({ category, setCart, cart }) => {
  return (
    <section>
      <h2>{category.name}</h2>
      <div className="menu">
        {category.meals.map((meal) => {
          return (
            <Item key={meal.id} meal={meal} setCart={setCart} cart={cart} />
          );
        })}
      </div>
    </section>
  );
};

export default Category;

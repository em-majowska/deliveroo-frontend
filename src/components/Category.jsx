import Item from "./Item";

const Category = (props) => {
  return (
    <section>
      <h2>{props.name}</h2>
      <div className="menu">
        {props.meals.map((meal) => {
          return (
            <Item
              key={meal.id}
              title={meal.title}
              description={meal.description}
              price={meal.price}
              popular={meal.popular}
              picture={meal.picture}
            />
          );
        })}
      </div>
    </section>
  );
};

export default Category;

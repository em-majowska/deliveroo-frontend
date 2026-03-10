import "../assets/fonts/icons.css";
const Item = ({ meal, cart, setCart }) => {
  const handleClick = (id, name, price) => {
    const item = cart.find((item) => item.id === id);

    if (!item) {
      const newItem = {
        id: id,
        name: name,
        price: Number(price),
        quantity: 1,
      };

      setCart([...cart, newItem]);
    } else {
      const copy = [...cart];

      item.quantity++;
      setCart(copy);
    }
  };

  const formatString = (str) => {
    return str.length > 60 ? str.slice(0, 60) + "..." : str;
  };

  return (
    <article onClick={() => handleClick(meal.id, meal.title, meal.price)}>
      <div className="col-1">
        <h3>{meal.title}</h3>
        <p>{formatString(meal.description)}</p>
        <div className="details">
          <span className="price">{meal.price} €</span>
          {meal.popular && (
            <span className="rating">
              <i className="icon-STAR_FILL"></i> Populaire
            </span>
          )}
        </div>
      </div>

      {meal.picture && <img src={meal.picture} alt="répas" />}
    </article>
  );
};

export default Item;

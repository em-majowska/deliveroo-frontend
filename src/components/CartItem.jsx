const CartItem = ({ item, changeQuantity, calculatePrice }) => {
  return (
    <div className="item">
      <div className="counter">
        <button onClick={() => changeQuantity("-", item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => changeQuantity("+", item.id)}>+</button>
      </div>
      <p>{item.title}</p>
      <span>{calculatePrice(item.price, item.quantity).toFixed(2)} €</span>
    </div>
  );
};

export default CartItem;

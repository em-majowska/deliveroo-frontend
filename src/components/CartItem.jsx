const CartItem = ({ item, changeQuantity }) => {
  const itemTotal = (item.price * item.quantity).toFixed(2);
  return (
    <div className="item">
      <div className="counter">
        <button onClick={() => changeQuantity("-", item.id)}>-</button>
        <span>{item.quantity}</span>
        <button onClick={() => changeQuantity("+", item.id)}>+</button>
      </div>
      <p>{item.name}</p>
      <span>{itemTotal} €</span>
    </div>
  );
};

export default CartItem;

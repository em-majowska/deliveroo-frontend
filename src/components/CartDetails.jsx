import CartItem from "./CartItem";

const CartDetails = ({
  cart,
  changeQuantity,
  subtotal,
  deliveryFee,
  total,
  onClose,
}) => {
  return (
    <div className="cart-details">
      {onClose && (
        <button className="btn-close" onClick={onClose}>
          <i className="icon-cross"></i>
        </button>
      )}
      <div className="items">
        {cart.map((item) => {
          return (
            item.quantity > 0 && (
              <CartItem
                key={item.id}
                item={item}
                changeQuantity={changeQuantity}
              />
            )
          );
        })}
      </div>
      <hr />
      <div className="summary">
        <p>
          Sous-total
          <span>
            {subtotal.toLocaleString("fr-FR", {
              minimumFractionDigits: 2,
            })}
            €
          </span>
        </p>
        <p>
          Frais de livraison
          <span>
            {deliveryFee.toLocaleString("fr-FR", {
              minimumFractionDigits: 2,
            })}
            €
          </span>
        </p>
      </div>
      <hr />
      <p className="total">
        Total
        <span>
          {total.toLocaleString("fr-FR", {
            minimumFractionDigits: 2,
          })}
          €
        </span>
      </p>
    </div>
  );
};

export default CartDetails;

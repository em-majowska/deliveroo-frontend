// import { useState } from "react";
import CartItem from "./CartItem";

const Cart = ({ cart, setCart }) => {
  // const [isOpen, setIsOpen] = useState(false);

  const subtotal = cart.reduce((acc, curr) => {
    return acc + curr.quantity * curr.price;
  }, 0);
  const deliveryFee = 2.7;
  const total = subtotal + deliveryFee;

  const changeQuantity = (val, id) => {
    const item = cart.find((item) => item.id === id);
    const copy = [...cart];

    if (val === "-") {
      if (item.quantity < 2) {
        const index = cart.indexOf((item) => item.id === id);
        copy.splice(index, 1);
      } else {
        item.quantity--;
      }
    } else {
      const copy = [...cart];

      item.quantity++;
      setCart(copy);
    }

    setCart(copy);
  };

  return (
    <section className="shopping-cart">
      {cart.length > 0 ? (
        <>
          <button>Valider le panier</button>
          <div className="cart-details">
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
                Sous-total{" "}
                <span>
                  {subtotal.toLocaleString("fr-FR", {
                    minimumFractionDigits: 2,
                  })}{" "}
                  €
                </span>
              </p>
              <p>
                Frais de livraison{" "}
                <span>
                  {deliveryFee.toLocaleString("fr-FR", {
                    minimumFractionDigits: 2,
                  })}{" "}
                  €
                </span>
              </p>
            </div>
            <hr />
            <p className="total">
              Total{" "}
              <span>
                {total.toLocaleString("fr-FR", {
                  minimumFractionDigits: 2,
                })}{" "}
                €
              </span>
            </p>
          </div>
        </>
      ) : (
        <>
          <button disabled>Valider le panier</button>
          <p>Votre panier est vide</p>
        </>
      )}
    </section>
  );
};

export default Cart;

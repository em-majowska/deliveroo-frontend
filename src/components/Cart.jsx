import "../assets/fonts/icons.css";
import { useState } from "react";
import CartDetails from "./CartDetails";

const Cart = ({ cart, setCart, isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const calculatePrice = (quantity, price) => {
    return Math.round(quantity * Number(price) * 100) / 100;
  };

  const subtotal = cart.reduce((acc, curr) => {
    return acc + calculatePrice(curr.quantity, curr.price);
  }, 0);
  const deliveryFee = 2.7;

  const total = subtotal + deliveryFee;
  const itemsCount = cart.reduce((acc, curr) => acc + curr.quantity, 0);

  // Change quantity of meals in the cart
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
      item.quantity++;
    }

    setCart(copy);
  };

  return (
    <section
      className={isMobile ? "shopping-cart" : "shopping-cart desktop-cart"}>
      {cart.length > 0 ? (
        <>
          {isMobile && isOpen ? (
            <>
              <button>Valider le panier</button>
              <CartDetails
                cart={cart}
                changeQuantity={changeQuantity}
                subtotal={subtotal}
                deliveryFee={deliveryFee}
                total={total}
                itemsCount={itemsCount}
                onClose={() => setIsOpen(!isOpen)}
                calculatePrice={calculatePrice}
              />
            </>
          ) : isMobile ? (
            <button onClick={() => setIsOpen(true)}>
              <span className="btn-count">{itemsCount}</span>
              <span className="btn-text">Voir le panier</span>
              <span className="btn-total">
                {total.toLocaleString("fr-FR", {
                  minimumFractionDigits: 2,
                })}{" "}
                €
              </span>
            </button>
          ) : (
            // desktop cart
            <>
              <button>Valider le panier</button>
              <CartDetails
                cart={cart}
                changeQuantity={changeQuantity}
                subtotal={subtotal}
                deliveryFee={deliveryFee}
                total={total}
                itemsCount={itemsCount}
                calculatePrice={calculatePrice}
              />
            </>
          )}
        </>
      ) : (
        <>
          <button disabled>Valider le panier</button>
          {isMobile || <p>Votre panier est vide</p>}
        </>
      )}
    </section>
  );
};

export default Cart;

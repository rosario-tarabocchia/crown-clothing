import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import CartItem from "../../components/cart-item/cart-item.component";
import "./checkout.styles.scss";

const Checkout = () => {
  const { cartItems, addItemToCart } = useContext(CartContext);

  return (
    <div>
      <h1>HELLO</h1>
      <div>
        {cartItems.map((cartItem) => {
          const { name, quantity, id } = cartItem;
          return (
            <div key={id}>
              <h2>{name}</h2>
              <span>{quantity}</span>
              <br/>
              <span>decrement</span>
              <br />
              <span onClick={() => addItemToCart(cartItem)}>increment</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Checkout;

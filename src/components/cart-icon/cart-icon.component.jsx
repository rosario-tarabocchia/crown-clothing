import { ReactComponent as ShoppingCartIcon } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./cart-icon.styles.scss";

const CartIcon = () => {
  const { isCartOpen, setIsCartOpen, totalNumberOfItems } = useContext(CartContext);
  const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);
  return (
    <div className="cart-icon-container" onClick={toggleIsCartOpen}>
      <ShoppingCartIcon className="shopping-icon" />
      <span className="item-count">{totalNumberOfItems}</span>
    </div>
  );
};

export default CartIcon;

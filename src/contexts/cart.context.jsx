import { createContext, useState, useEffect } from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(
    (cartItem) => cartItem.id === productToAdd.id
  );

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quanity: cartItem.quanity + 1 }
        : cartItem
    );
  }

  return [...cartItems, { ...productToAdd, quanity: 1 }];
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  cartCount: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalNumberOfItems, setTotalNumberOfItems] = useState(0);

  useEffect(() => {
      const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quanity, 0)
      setTotalNumberOfItems(newCartCount);
    }, [cartItems])
  

  const addItemToCart = (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  };



  const value = { isCartOpen, setIsCartOpen, addItemToCart, cartItems, totalNumberOfItems };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

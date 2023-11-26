import { createContext, useState } from "react";
import { ASIAN_DISH } from "../data/asian";

export const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  removeItem: () => {},
});

export default function CartContextProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart = (id) => {
    const existingItem = cartItems.find((item) => item.id === id);

    if (existingItem) {
      setCartItems((prevCart) =>
        prevCart.map((item) =>
          item.id === id ? { ...item, quantity: item.quantity + 1 } : item
        )
      );
    } else {
      const product = ASIAN_DISH.find((item) => item.id === id);
      setCartItems((prevCart) => [{ ...product, quantity: 1 }, ...prevCart]);
    }
  };

  const handleIncreaseItem = (id) => {
    setCartItems((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseItem = (id) => {
    setCartItems((prevCart) => {
      const updatedCart = prevCart.map((item) => {
        if (item.id === id) {
          if (item.quantity > 1) {
            return { ...item, quantity: item.quantity - 1 };
          } else {
            return null; // Set to null to indicate removal
          }
        }
        return item;
      });
      return updatedCart.filter((item) => item !== null);
    });
  };

  const cnxtValue = {
    items: cartItems,
    addItemToCart: addItemToCart,
    handleIncreaseItem: handleIncreaseItem,
    handleDecreaseItem: handleDecreaseItem,
  };

  return (
    <CartContext.Provider value={cnxtValue}>{children}</CartContext.Provider>
  );
}

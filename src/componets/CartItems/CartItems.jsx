import { useContext } from "react";
import { CartContext } from "../../store/cart-context";

const CartItems = () => {
  const shopCnxt = useContext(CartContext);
  return (
    <ul>
      {shopCnxt.items.map((item) => (
        <li>{item.title}</li>
      ))}
    </ul>
  );
};

export default CartItems;

import { useContext, useEffect, useState } from "react";
import { Backdrop, Modal } from "./Cart.styled";
import { CartContext } from "../../store/cart-context";
import CartEmpty from "./CartEmpty";
import CartFilled from "./CartFilled";

import bg from "../../data/assets/b.jpeg";
import CartItems from "../CartItems/CartItems";

const Cart = ({ handleCloseButton }) => {
  const shopCnxt = useContext(CartContext);
  const [totalCost, setTotalCost] = useState(0);

  useEffect(() => {
    let total = 0;
    shopCnxt.items.forEach((item) => {
      total += item.price * item.quantity;
    });
    setTotalCost(total);
  }, [shopCnxt.items]);

  return (
    <Backdrop>
      <Modal
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
        }}
      >
        <div>
          <h1>Your Cart</h1>
          <div>
            {shopCnxt.items.length > 0 ? (
              <CartItems />
            ) : (
              <p>Your Cart is Empty!</p>
            )}
          </div>
        </div>
        <div>
          {shopCnxt.items.length === 0 ? (
            <CartEmpty handleCloseButton={handleCloseButton} />
          ) : (
            <CartFilled
              handleCloseButton={handleCloseButton}
              totalCost={totalCost.toFixed(2)}
            />
          )}
          {/* <button onClick={handleCloseButton}>Close</button> */}
        </div>
      </Modal>
    </Backdrop>
  );
};

export default Cart;

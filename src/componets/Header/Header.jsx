import { useContext, useState } from "react";
import {
  NavigationContainer,
  StyledNavLink,
  StyledNavLinkMenu,
  Button,
  Header,
} from "../../App.styled";

import Cart from "../Cart/Cart";
import { CartContext } from "../../store/cart-context";

const HeaderComponent = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const cartCnxt = useContext(CartContext);

  const handleCartOpen = () => {
    setCartOpen(!cartOpen);
  };

  const handleCloseButton = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <NavigationContainer>
      {cartOpen && <Cart handleCloseButton={handleCloseButton} />}
      <div style={{ width: "120px", marginRight: "55px" }}>
        <StyledNavLink to="/">Food Culture</StyledNavLink>
      </div>

      <Header>
        <StyledNavLinkMenu to="/sushi">asian food</StyledNavLinkMenu>
        <StyledNavLinkMenu to="/pizza">fast food</StyledNavLinkMenu>
        <StyledNavLinkMenu to="/salads">simple food</StyledNavLinkMenu>{" "}
        <Button onClick={handleCartOpen}>Cart ({cartCnxt.items.length})</Button>
      </Header>
    </NavigationContainer>
  );
};

export default HeaderComponent;

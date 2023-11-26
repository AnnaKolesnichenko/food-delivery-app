import React from "react";
import sushiBg from "../../data/assets/asian.jpeg";
import { ASIAN_DISH } from "../../data/asian";
import FoodItem from "./FoodItem";
import { ListItems, Container } from "./SushiPage.styled";
import Background from "../../data/assets/wall1.jpeg";

const SushiPage = () => {
  return (
    <Container>
      <ListItems>
        {ASIAN_DISH.map((item) => (
          <FoodItem item={item} />
        ))}
      </ListItems>
    </Container>
  );
};

export default SushiPage;

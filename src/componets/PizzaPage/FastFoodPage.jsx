// import React, { useEffect, useState } from "react";
import { FastFood } from "../../data/available-meals.js";
import { Container, ListItems } from "./FastFoodPage.styled.js";
import FastFoodItem from "./FastFoodItem.jsx";

const FastFoodPage = () => {
  return (
    <Container>
      <ListItems>
        {FastFood.map((item) => (
          <FastFoodItem item={item} />
        ))}
      </ListItems>
    </Container>
  );
};

export default FastFoodPage;

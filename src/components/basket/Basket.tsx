import React from "react";
import { useBasket } from "../../context/BasketContex";

const Basket = () => {
  const { totalBasket } = useBasket();
  return (
    <>
      <div>
        TOTAL
        <span>{totalBasket}</span>
      </div>
    </>
  );
};

export default Basket;

import React from "react";
import { useBasket } from "../../context/BasketContex";
import { basketSticker } from "./basket.module.scss";
import ButtonPrimary from "../button/ButtonPrimary";

const Basket = () => {
  const { totalBasket, basketItems } = useBasket();
  console.log(totalBasket);
  return (
    <>
      {basketItems.length === 0 ? null : (
        <div className={basketSticker}>
          <div>
            <span>{basketItems.length} ürün</span>
            <span>₺ {totalBasket}</span>
          </div>
          <ButtonPrimary>Öde</ButtonPrimary>
        </div>
      )}
    </>
  );
};

export default Basket;

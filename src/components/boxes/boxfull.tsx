import React from "react";
import image from "./../../asset/image/menu/somon.png";
import { menuListTypo } from "../../data/menu";
import { useBasket } from "../../context/BasketContex";

const BoxFull = ({ ItemData }: { ItemData: menuListTypo }) => {
  const { name, img, price, description } = ItemData;
  const { addBasket } = useBasket();
  const handleBasket = () => {
    console.log(ItemData);
    addBasket(ItemData);
  };
  return (
    <>
      <div className="box__full">
        <img src={image} alt="" />
        <div className="box__full--content">
          <div>
            <h4>{name}</h4>
            <p>{description}</p>
          </div>
          <div className="box__full--content--bottom">
            <span className="price">₺ {price}</span>
            <button onClick={handleBasket} className="addBasket">
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxFull;

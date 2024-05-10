import React from "react";
import { menuListTypo } from "../../data/menu";
import image from "./../../asset/image/menu/somon.png";

export default function ImageBox({ data }: { data: menuListTypo }) {
  const { img, price, name } = data;
  return (
    <div className="box__image">
      <img src={image} alt="" />
      <div className="box__image__content">
        <span>₺ {price}</span>
        <p>{name}</p>
      </div>
    </div>
  );
}

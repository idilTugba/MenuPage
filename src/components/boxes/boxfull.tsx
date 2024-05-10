import React from "react";
import image from "./../../asset/image/menu/somon.png";

const BoxFull = () => {
  return (
    <>
      <div className="block">
        <h2>Cazip Fiyatlar</h2>
        <p>Cazip Fiyatlı ve Birbirinden lezzetli menüler.</p>
      </div>
      <div className="box__full">
        <img src={image} alt="" />
        <div className="box__full--content">
          <div className="title">DEneme</div>
          <div className="describtion">Lorem isoernff</div>
          <div>
            <span className="price">99 TL</span>
            <button className="addBasket">+</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BoxFull;

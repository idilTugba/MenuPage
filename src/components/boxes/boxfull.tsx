import React, { useEffect, useState } from "react";

import { menuListTypo } from "../../data/menu";

import { useBasket } from "../../context/BasketContex";
import { loadImage } from "../../utils/loaderImg";
import notFound from "../../asset/image/notFound.png";
import { boxFull } from "./boxes.module.scss";

const BoxFull = React.memo(({ ItemData }: { ItemData: menuListTypo }) => {
  const { name, img, price, description } = ItemData;
  const { addBasket } = useBasket();
  const handleBasket = () => {
    addBasket(ItemData);
  };

  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      const src = await loadImage(img);
      setImageSrc(src);
    };

    fetchImage();
  }, [img]);

  return (
    <>
      <div className={boxFull}>
        <img
          className={`${imageSrc ? "" : "notFound"}`}
          src={imageSrc ? imageSrc : notFound}
          alt={name}
        />
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
});

export default BoxFull;

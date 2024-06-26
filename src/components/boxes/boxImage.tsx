import React, { useEffect, useState } from "react";
import { menuListTypo } from "../../data/menu";
import { loadImage } from "../../utils/loaderImg";
import notFound from "../../asset/image/notFound.png";
import { boxImage, boxImageContent } from "./boxes.module.scss";

function ImageBox({ data }: { data: menuListTypo }) {
  const { img, price, name } = data;

  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    const fetchImage = async () => {
      const src = await loadImage(img);
      setImageSrc(src);
    };

    fetchImage();
  }, [img]);
  return (
    <div className={boxImage}>
      <img
        className={`${imageSrc ? "" : "notFound"}`}
        src={imageSrc ? imageSrc : notFound}
        alt={name}
      />
      <div className={boxImageContent}>
        <span className="price">₺ {price}</span>
        <p>{name}</p>
      </div>
    </div>
  );
}

export default React.memo(ImageBox);

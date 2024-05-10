import React, { useState } from "react";

import { scrollableTabs } from "./menu.module.scss";
import ImageBox from "../boxes/boxImage";
import { useMenuList } from "../../context/MenuContext";
import ScrollableNavbar from "../navbar/ScrollableNavbar";

export default function Menu() {
  const [openTab, setOpenTab] = useState<string[]>([
    "Popüler",
    "Restoranın en çok tercih edilen ürünleri",
  ]);

  const { typeOfFoodMap, foodTypeList } = useMenuList();

  return (
    <>
      <div className={scrollableTabs}>
        <ScrollableNavbar
          tabs={foodTypeList}
          activeTab={openTab[0]}
          onClickEvent={setOpenTab}
        />
      </div>

      <h2>{openTab[0]}</h2>
      <p>{openTab[1]}</p>
      <div className="block">
        {typeOfFoodMap.get(openTab[0])?.map((item) => {
          return <ImageBox key={item.id} data={item} />;
        })}
      </div>
    </>
  );
}

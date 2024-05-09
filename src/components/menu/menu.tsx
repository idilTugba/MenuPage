import React, { useState } from "react";

import { scrollableTabs } from "./menu.module.scss";
import ImageBox from "../boxes/boxImage";
import { useMenuList } from "../../context/MenuContext";
import ScrollableNavbar from "../navbar/ScrollableNavbar";

export default function Menu() {
  const [openTab, setOpenTab] = useState<string>("Popüler");

  const { typeOfFoodMap, foodTypeList } = useMenuList();

  return (
    <>
      <div className={scrollableTabs}>
        <ScrollableNavbar
          tabs={foodTypeList}
          activeTab={openTab}
          onClickEvent={setOpenTab}
        />
      </div>

      <div>
        {typeOfFoodMap.get(openTab)?.map((item) => {
          return <ImageBox key={item.id} data={item} />;
        })}
      </div>
    </>
  );
}

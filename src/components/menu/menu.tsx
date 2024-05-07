import React, { useState } from "react";

import { menu } from "./menu.module.scss";
import ImageBox from "../boxes/boxImage";

import { menuList, menuListTypo } from "../../data/menu";

const menuListName: Array<string> = [
  "Popüler",
  "Menüler",
  "Salatalar",
  "Pizzalar",
  "Tatlılar",
];

let typeFoodMap: Map<string, Array<menuListTypo> | null> = new Map();
let favorite: Array<menuListTypo> = menuList.filter((item) => item.popular);

export default function Menu() {
  const [openTab, setOpenTab] = useState<string>("Popüler");

  return (
    <>
      <ul className={menu}>
        {menuListName.map((item) => {
          {
            let typeFood: Array<menuListTypo> = [];
            menuList.map((foodName) => {
              for (let [key, value] of Object.entries(foodName)) {
                if (
                  (item === "Popüler" && key === "popular" && value) ||
                  value === item
                ) {
                  typeFood.push(foodName);
                }
              }
            });
            typeFoodMap.set(item, typeFood);
          }
          return (
            <li
              className={`${openTab === item && "active"} `}
              onClick={(e) => setOpenTab(item)}
              key={item}
            >
              {item}
            </li>
          );
        })}
      </ul>
      <div>
        {typeFoodMap.get(openTab)?.map((item: menuListTypo) => {
          return <ImageBox data={item} />;
        })}
      </div>
    </>
  );
}

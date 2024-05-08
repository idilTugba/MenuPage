import React, { useState } from "react";

import { scrollableTabs } from "./menu.module.scss";
import ImageBox from "../boxes/boxImage";

import { menuList, menuListTypo } from "../../data/menu";

import { useMenuList } from "../../context/MenuContext";

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

  const menuList = useMenuList();
  console.log(menuList);
  return (
    <>
      <div className={scrollableTabs}>
        <ul>
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
                className={`${openTab === item ? "active" : ""} `}
                onClick={(e) => setOpenTab(item)}
                key={item}
              >
                {item}
              </li>
            );
          })}
        </ul>
      </div>

      <div>
        {typeFoodMap.get(openTab)?.map((item: menuListTypo) => {
          return <ImageBox data={item} />;
        })}
      </div>
    </>
  );
}

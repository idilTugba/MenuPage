import React, { createContext, useContext } from "react";
import { menuList, menuListTypo } from "./../data/menu";

interface ThemeProviderProps {
  children: React.ReactNode;
}

interface MenuContextType {
  menuList: menuListTypo[];
  foodTypeList: string[];
  typeOfFoodMap: Map<string, Array<menuListTypo> | null>;
  cheapestFoods: menuListTypo[];
}

const defaultMenuContext: MenuContextType = {
  menuList: [],
  foodTypeList: [],
  typeOfFoodMap: new Map(),
  cheapestFoods: [],
};

const MenuContext = createContext<MenuContextType>(defaultMenuContext);

const MenuProvider = ({ children }: ThemeProviderProps) => {
  //food type
  let menuTypeSet: Set<string> = new Set();
  menuList.map((item) => menuTypeSet.add(item.type));
  const foodTypeList: Array<string> = ["Popüler", ...menuTypeSet]; // The Type of List

  //Populer foods
  const populerFoods = menuList.filter((item) => item.popular === true);

  //categories of food type
  let typeOfFoodMap: Map<string, Array<menuListTypo> | null> = new Map(); //categories of food type
  foodTypeList.map((item: string) => {
    let newListArray = new Array();
    newListArray = menuList.filter((food) => food.type === item);
    typeOfFoodMap.set(item, newListArray);
  });
  typeOfFoodMap.set("Popüler", populerFoods);

  //cheapest foods
  const cheapestFoods = menuList.filter((item) => item.price <= 100);

  const values = {
    menuList,
    foodTypeList,
    typeOfFoodMap,
    cheapestFoods,
  };

  return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>;
};

const useMenuList = (): MenuContextType => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { useMenuList, MenuProvider };

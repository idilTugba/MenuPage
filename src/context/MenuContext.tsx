import React, { createContext, useContext } from "react";
import { menuList, menuListTypo } from "./../data/menu";

interface ThemeProviderProps {
  children: React.ReactNode;
}

const MenuContext = createContext<menuListTypo[]>([]);

const MenuProvider = ({ children }: ThemeProviderProps) => {
  let menuTypeSet: Set<menuListTypo> = new Set();
  menuList.map((item) => menuTypeSet.add(item));
  const menuTypeList = [...menuTypeSet];

  const values = {
    menuList,
    menuTypeList,
  };

  return <MenuContext.Provider value={values}>{children}</MenuContext.Provider>;
};

const useMenuList = (): menuListTypo[] => {
  const context = useContext(MenuContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { useMenuList, MenuProvider };

import React, { createContext, useContext, useEffect, useState } from "react";
import { menuListTypo } from "../data/menu";

interface ProviderTypo {
  children: React.ReactNode;
}

interface BasketContextTypo {
  basketItems: menuListTypo[];
  addBasket: (item: menuListTypo) => void;
  totalBasket: number;
}

const defaultBasket: BasketContextTypo = {
  basketItems: [],
  addBasket: () => {},
  totalBasket: 0,
};

const BasketContext = createContext<BasketContextTypo>(defaultBasket);

const BasketProvider = ({ children }: ProviderTypo) => {
  const [basketItems, setBasketItems] = useState<menuListTypo[]>([]);
  const [totalBasket, setTotalBasket] = useState<number>(0);

  const addBasket = (item: menuListTypo) => {
    setBasketItems((prevItems) => [...prevItems, item]);
  };

  useEffect(() => {
    const latesBasket = basketItems.reduce((accumulator, currentItem) => {
      return accumulator + (currentItem.price || 0);
    }, 0);
    setTotalBasket(latesBasket);
  }, [basketItems]);

  const values = {
    basketItems,
    addBasket,
    totalBasket,
  };

  return (
    <BasketContext.Provider value={values}>{children}</BasketContext.Provider>
  );
};

const useBasket = (): BasketContextTypo => {
  const context = useContext(BasketContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export { BasketProvider, useBasket };

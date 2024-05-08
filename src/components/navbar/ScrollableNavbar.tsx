import React from "react";
import { useMenuList } from "../../context/MenuContext";

interface Tab {
  id: string;
  label: string;
}

interface ScrollableTabsType {
  tabs: Tab[];
  activeTab: string;
  onClickEvent: (tabId: string) => void;
}

const ScrollableNavbar: React.FC<ScrollableTabsType> = (el) => {
  const { tabs, activeTab, onClickEvent } = el;
  const menuList = useMenuList();
  return (
    <ul>
      {tabs.map((tab) => {
        return (
          <li
            className={activeTab === tab.id ? "active" : ""}
            key={tab.id}
            onClick={() => onClickEvent(tab.id)}
          >
            {tab.label}
          </li>
        );
      })}
    </ul>
  );
};

export default ScrollableNavbar;

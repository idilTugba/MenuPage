import React from "react";

interface ScrollableTabsType {
  tabs: string[];
  activeTab: string;
  onClickEvent: (tabId: string) => void;
}

const ScrollableNavbar: React.FC<ScrollableTabsType> = (props) => {
  const { tabs, activeTab, onClickEvent } = props;

  return (
    <ul>
      {tabs.map((tab) => {
        return (
          <li
            className={activeTab === tab ? "active" : ""}
            key={tab}
            onClick={() => onClickEvent(tab)}
          >
            {tab}
          </li>
        );
      })}
    </ul>
  );
};

export default ScrollableNavbar;

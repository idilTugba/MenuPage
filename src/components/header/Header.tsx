import React from "react";
import { ReactComponent as SvgLogo } from "./../../asset/image/menu.svg";
import { header } from "./header.module.scss";

const Header = () => {
  return (
    <header className={header}>
      <div className="container">
        <div>. </div>
        <SvgLogo />
      </div>
    </header>
  );
};

export default React.memo(Header);

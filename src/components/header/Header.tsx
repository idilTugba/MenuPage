import React from "react";
import { ReactComponent as SvgLogo } from "./../../asset/image/menu.svg";
import { header } from "./header.module.scss";

const Header = () => {
  return (
    <header className={header}>
      <div>. </div>
      <SvgLogo />
    </header>
  );
};

export default React.memo(Header);

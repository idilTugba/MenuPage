import React from "react";
import { ReactComponent as SvgLogo } from "./../../asset/image/menu.svg";
import { header, container } from "./header.module.scss";

const Header = () => {
  return (
    <header className={header}>
      <div className={`${container} container`}>
        <div>. </div>
        <SvgLogo />
      </div>
    </header>
  );
};

export default React.memo(Header);

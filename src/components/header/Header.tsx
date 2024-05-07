import React from "react";
import { ReactComponent as SvgLogo } from "./../../asset/image/menu.svg";
import { header } from "./header.module.scss";

export default function Header() {
  return (
    <header className={header}>
      <div>. </div>
      <SvgLogo />
    </header>
  );
}

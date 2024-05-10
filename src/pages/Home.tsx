import React from "react";
import Header from "../components/header/Header";
import Menu from "../components/menu/menu";
import BoxFull from "../components/boxes/boxfull";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Menu />
        <BoxFull />
      </div>
    </>
  );
}

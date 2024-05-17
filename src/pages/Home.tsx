import React from "react";
import Header from "../components/header/Header";
import Menu from "./menu/menu";

export default function Home() {
  return (
    <>
      <Header />
      <div className="container">
        <Menu />
      </div>
    </>
  );
}

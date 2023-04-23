import React from "react";
import logo from "../../img/logo.png";
import { Navigation } from "../Navigation";

export function Header() {
  return (
    <>
      <div className="container flex mt-2 mb-2 ml-40 items-center">
        <div className="logo">
          <img className="w-4 md:w-8 lg:w-8" src={logo}></img>
        </div>
        <Navigation></Navigation>
      </div>
    </>
  );
}

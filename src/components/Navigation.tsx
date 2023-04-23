import React from "react";
import { Link } from "react-router-dom";

export function Navigation() {
  return (
    <nav className="h-[50px] flex justify-between px-5 ml-10">
        <span className="p-2"><Link to="/">Главная</Link></span>
        <span className="p-2"><Link to="/catalog">Каталог</Link></span>
        <span className="p-2"><Link to='/cart'>Корзина</Link></span>
    </nav>
  );
}

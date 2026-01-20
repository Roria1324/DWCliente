import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <nav>
      <Link className="menu-element" to="/">
        Start
      </Link>
      <Link className="menu-element" to="/products">
        Products
      </Link>
    </nav>
  );
};

export default Menu;

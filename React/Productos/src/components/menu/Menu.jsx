import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { sessionContext } from "../../context/SupabaseSesion";

const Menu = () => {
  const { sessionStarted } = useContext(sessionContext);

  return (
    <nav>
      <Link className="menu-element" to="/">
        Start
      </Link>
      {/*<Link className="menu-element" to="/products">
        Products
      </Link>*/}
      {!sessionStarted && <Link className="menu-element" to="/logIn">
        Login
      </Link>}
      {!sessionStarted &&  <Link className="menu-element" to="/register">
        Register
      </Link>}
    </nav>
  );
};

export default Menu;

import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { sessionContext } from "../../context/SupabaseSesion";
import "./Menu.css"
import ShowNameUser from "../ShowNameUser.jsx";

const Menu = () => {
  const { sessionStarted } = useContext(sessionContext);

  return (
 <nav className="main-nav">
      <div className="nav-left">
        <Link className="menu-element logo" to="/">
          MyShop
        </Link>
      </div>

      <div className="nav-right">
        <Link className="menu-element" to="/">
          Start
        </Link>
      
      {sessionContext && <ShowNameUser/> }

        {/*
        <Link className="menu-element" to="/products">
          Products
        </Link>
        */}

        {!sessionStarted && (
          <Link className="menu-element auth" to="/logIn">
            Login
          </Link>
        )}

        {!sessionStarted && (
          <Link className="menu-element auth primary" to="/register">
            Register
          </Link>
        )}
      </div>
    </nav>
  );
};

export default Menu;

import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { sessionContext } from "../../context/SupabaseSesion";
import "./Menu.css";

const Menu = () => {
  const { sessionStarted, dataSession } = useContext(sessionContext);

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

        {/*
        <Link className="menu-element" to="/products">
          Products
        </Link>
        */}

        {!sessionStarted && (
          <>
            <Link className="menu-element auth" to="/logIn">
              Login
            </Link>

            <Link className="menu-element auth primary" to="/register">
              Register
            </Link>
          </>
        )}

        {sessionStarted && (
          <p>Hello {dataSession.user.user_metadata.display_name}</p>
        )}
      </div>
    </nav>
  );
};

export default Menu;

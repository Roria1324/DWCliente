import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { sessionContext } from "../../context/SupabaseSesion";
import "./Menu.css";
import CloseSession from "../../pages/CloseSession";

const Menu = () => {
  const { sessionStarted, user } = useContext(sessionContext);

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
          <>
            <Link className="menu-element" to="/products">
              Products
            </Link>

            <p className="menu-element">{user?.user_metadata.display_name}</p>

            <CloseSession />
          </>
        )}
      </div>
    </nav>
  );
};

export default Menu;

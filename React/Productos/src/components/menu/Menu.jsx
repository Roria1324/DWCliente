import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { sessionContext } from "../../context/SupabaseSesion";
import "./Menu.css";
import CloseSession from "../../pages/SignOut";

const Menu = () => {
  const { sessionStarted, user } = useContext(sessionContext);

  return (
    <nav>
      <div className="head">
        <div className="texto">
          <h2>MyShopUgly</h2>
        </div>

        <div className="menu-links">
          <Link className="menu-element" to="/">
            Start
          </Link>

          {!sessionStarted && (
            <>
              <Link className="menu-element" to="/logIn">
                Login
              </Link>

              <Link className="menu-element" to="/register">
                Register
              </Link>
            </>
          )}

          {sessionStarted && (
            <>
              <Link className="menu-element" to="/products">
                Products
              </Link>

              <span className="menu-element user">
                {user?.user_metadata?.display_name}
              </span>

              <CloseSession />
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Menu;

import React from "react";
import { Link } from "react-router-dom";
import "./Menu.css";
import CloseSession from "../pages/SignOut";
import useSession from "../hooks/useSession";

const Menu = () => {
  const { sessionStarted, user } = useSession();

  return (
    <nav>
      <div className="head">
        <div className="texto">
          <h2>MyShopUgly</h2>
        </div>

        <div className="menu-links">
          <Link className="menu-element" to="/">
            Home
          </Link>

          <Link className="menu-element" to="/products">
            Products
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
              <Link className="menu-element" to="createProduct">
                Add Product
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

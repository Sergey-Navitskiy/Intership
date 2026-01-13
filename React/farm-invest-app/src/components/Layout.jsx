import React from "react";
import { Outlet, NavLink, useLocation } from "react-router-dom";
import "../styles/Layout.css";

const Layout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const backgroundColor = isHomePage ? "#F1F8E9" : "#ffffff";

  return (
    <div style={{ backgroundColor: backgroundColor }}>
      <header className="header">
        <div className="logo"></div>
        <nav className="nav-links">
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/locations">Locations</NavLink>
          <NavLink to="/contacts">Contacts</NavLink>
          <NavLink to="/shop">Shop</NavLink>
          <NavLink to="/login">LogIn</NavLink>
        </nav>
      </header>

      <main className="main">
        <Outlet />
      </main>
    </div>
  );
};

export default Layout;

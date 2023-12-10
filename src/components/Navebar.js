import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GlobalContent } from "../context";

const Navebar = () => {
  const { login, setLogin } = GlobalContent();

  const handler = () => {
    localStorage.removeItem("id");
    setLogin(true);
  };

  return (
    <nav className="nav">
      <section className="nav-container section-center">
        <div className="left-nav-con">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/rated">Rated</Link>
            </li>
          </ul>
        </div>
        <div className="right-nav-con">
          <button className="auth-con">
            {login ? (
              <Link to="/auth">Auth</Link>
            ) : (
              <Link to="/auth" onClick={handler}>
                Logout
              </Link>
            )}
          </button>
        </div>
      </section>
    </nav>
  );
};

export default Navebar;

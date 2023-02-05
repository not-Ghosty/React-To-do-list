import React from "react";
import a from "./main.module.css";

const Navbar = () => {
  return (
    <div id={a.nav}>
      <>
        <nav className="navbar bg-light">
          <div
            className="container-fluid"
            style={{ display: "flex", justifyContent: "center" }}
          >
            <a className="navbar-brand" href="/">
              Todo App
            </a>
          </div>
        </nav>
        {/* As a heading */}
      </>
    </div>
  );
};

export default Navbar;

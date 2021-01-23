import React from "react";

const Navbar = ({ totalCounters }) => {
  return (
    <nav className="navbar navbar-light bg-light">
      <a className="navbar-brand" href="#top">
        Navbar{" "}
        <span className="badge badge-pill badge-primary">{totalCounters}</span>
      </a>
    </nav>
  );
};

export default Navbar;

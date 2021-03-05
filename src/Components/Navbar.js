import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-success sticky-top">
      <Link className="navbar-brand" to="/">
        Foodie
      </Link>
    </nav>
  );
};

export default Navbar;

import { Link } from "react-router-dom";
import React from "react";
import "bootstrap/dist/css/bootstrap.css";
import Nav from "react-bootstrap/Nav";
import Home from "../Home";
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">Home</Link>
      <Link to="/About">About</Link>
    </nav>
  );
};

export default Navbar;

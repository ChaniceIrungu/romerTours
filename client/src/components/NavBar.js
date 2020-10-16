import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import "../App.css";
import { Link } from "react-router-dom";

import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar
collapseOnSelect
expand="md"
sticky="top"
style={{
  background: "#FCDBB1",
}}
>
<Navbar.Brand as={NavLink} to="/" className="Home">
  Home
</Navbar.Brand>
<Navbar.Toggle aria-controls="responsive-navbar-nav" />

<Nav.Link as={NavLink} to="/Destination" className="Destination">
Destination
</Nav.Link>
<Nav.Link as={NavLink} to="/Packages" className="Packages">
  Packages 
</Nav.Link>
<Nav.Link as={NavLink} to="/SpecialOffer" className="SpecialOffer">
SpecialOffer
</Nav.Link>
</Navbar>

  );
}

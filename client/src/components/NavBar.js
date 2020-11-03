import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavItem from "react-bootstrap/NavItem";
import "../App.css";
import { Link } from "react-router-dom";
import logosvg from "../assets/logosvg.svg";
import homeicon from "../assets/homeicon.svg";
import { NavLink } from "react-router-dom";

export default function NavBar() {
  return (
    <Navbar
collapseOnSelect
expand="md"
sticky="top"
style={{
  background: "rgba(123, 81, 69, 0.82)",
  color:"White"
}}
>


<Navbar.Brand className="ml-10">
  <img src={logosvg} alt="logosvg" /> 
</Navbar.Brand>

<Nav.Link as={NavLink} to="/" className="Home" style={{
  color:"White"}}><span><i class="fas fa-home mr-1"></i></span> 
<strong>Home</strong>
</Nav.Link>
<Nav className="NavNav ml-auto">
<Nav.Link as={NavLink} to="/AboutUs" className="AboutUs" style={{
  color:"White"}}> <i class="fas fa-question-circle mr-1"></i> <strong>About Us</strong>

</Nav.Link>
<Nav.Link as={NavLink} to="/Packages" className="Packages" style={{
  color:"White"}}> <i class="fas fa-luggage-cart mr-1"></i>
 <strong>Packages </strong> 
</Nav.Link>
<Nav.Link as={NavLink} to="/SpecialOffer" className="SpecialOffer" style={{
  color:"White"}}><i class="fas fa-heart mr-1"></i>

  <strong>Testimonials </strong> 

</Nav.Link>
</Nav>
</Navbar>

  );
}

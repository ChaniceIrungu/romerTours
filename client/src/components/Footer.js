import React from "react";
import "./Footer.css";
import Navbar from "react-bootstrap/Navbar";
const Footer = () => {
  return (
    

<Navbar
collapseOnSelect
expand="md"
sticky="bottom"
style={{
  background: "#63312D",
  color:"White"
}}
><div className="container">
        <div className="row">
          <div className="col">
            <h5> Romer Tours</h5>
            <ul className="list-unstyled">
              <li>+27 83 261 0651</li>
            </ul>
          </div>
          <div className="col">
            <h4>Connect with Us</h4>
            <ul className="list-unstyled">
              <li>Facebook | Twitter </li>
            </ul>
          </div>
          <div className="col">
            <h5>Contact Us</h5>
            <ul className="list-unstyled">
              <li>Fax: +27 21 703 2298</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row-4">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Romer Tours | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
        ​
      </div>



</Navbar>

  );
}




export default Footer;

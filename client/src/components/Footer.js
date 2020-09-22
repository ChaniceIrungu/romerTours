import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          <div className="col">
            <h4> Romer Tours</h4>
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
            <h4>Contact Us</h4>
            <ul className="list-unstyled">
              <li>Fax: +27 21 703 2298</li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Romer Tours | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
        ​
      </div>
    </div>
  );
};
export default Footer;

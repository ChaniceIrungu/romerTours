import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import Packages from "./components/Packages";
import Destination from "./components/Destination";
import SpecialOffers from "./components/SpecialOffers";
import Home from "./components/Home";
import Container from "react-bootstrap/Container";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="App">
        <div>
          <NavBar />
          <div className="contentwrap">
            <Container className="mt-4 mb-4 ml-4">
              <Switch>
                <Route path="/Destination" component={Destination} />
                <Route path="/Packages" component={Packages} />
                <Route path="/SpecialOffers" component={SpecialOffers} />
                <Route path="/" component={Home} />
              </Switch>
            </Container>
          </div>
        </div>

        <Footer />
      </div>
    </Router>
  );
}

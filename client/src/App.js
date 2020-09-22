import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import NavBar from "./components/NavBar";
import Footer from "./components/AboutUs";
import Footer from "./components/Tours";
import Footer from "./components/Testimonials";
import Footer from "./components/Home";

import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <Router>
      <div className="page-container">
        <div>
          <NavBar />
          <div className="contentwrap">
            <Container className="mt-4 mb-4 ml-4">
              <Switch>
                <Route path="/UserInfo" component={AboutUs} />
                <Route path="/Report" component={Tours} />
                <Route path="/GetHelp" component={Testimonials} />
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

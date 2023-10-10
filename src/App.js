import React from "react";
import Navbar from "./components/Navbar";
import "./App.css";
import Home from "./components/pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Services from "./components/pages/Services";
import Products from "./components/pages/Products";
import ContactUs from "./components/pages/ContactUs";
import Button1 from "./components/Button1";
import Marketing from "./components/pages/Marketing";
import Consulting from "./components/pages/Consulting";
import Button from "./components/Button";
import Footer from "./components/Footer";

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/services" component={Services} />
        <Route path="/products" component={Products} />
        <Route path="/contact-us" component={ContactUs} />
        <Route path="/Button" component={Button} />
        <Route path="/Button1" component={Button1} />
        <Route path="/marketing" component={Marketing} />
        <Route path="/consulting" component={Consulting} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;

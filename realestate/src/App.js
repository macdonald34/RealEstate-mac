import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import PropertyDetails from "./components/PropertyDetails";
import Contact from "./components/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route path="/property/:id" component={PropertyDetails} />
        <Route path="/contact" component={Contact} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
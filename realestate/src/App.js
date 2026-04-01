import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import PropertyDetails from "./components/PropertyDetails";
import Contact from "./components/Contact";
import SignIn from "./components/SignIn";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import SignUp from "./components/SignUp";
import "./App.css";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} /> 
        <Route path="/property/:id" component={PropertyDetails} />
        <Route path="/contact" component={Contact} />
        <Route path="/signin" component={SignIn} />
        <Route path="/about" render={() => <div>About Us Page</div>} />
      </Switch>

      <Footer />
    </Router>
  );
}

export default App;
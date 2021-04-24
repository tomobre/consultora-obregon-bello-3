import React from "react";
import "./App.css";
import { Route } from "react-router-dom";
import Navbar from "./components/commons/Navbar";
import Footer from "./components/commons/Footer";
import Services from "./components/Services";
import Team from "./components/Team";
import Jobs from "./components/Jobs";
import Contact from "./components/Contact";
import Home from "./components/Home";

function App() {
  return (
    <div>
      <Route path="/" component={Navbar} />
      <Route exact path="/" component={Home} />
      <Route exact path="/services" component={Services} />
      <Route exact path="/team" component={Team} />
      <Route exact path="/jobs" component={Jobs} />
      <Route exact path="/contact" component={Contact} />
      <Route path="/" component={Footer} />
    </div>
  );
}

export default App;

import React from "react";
import "./App.css";
import { Route, useLocation, Switch } from "react-router-dom";
import Navbar from "./components/commons/Navbar";
import Footer from "./components/commons/Footer";
import Services from "./components/Services";
import Team from "./components/Team";
import Jobs from "./components/Jobs";
import Contact from "./components/Contact";
import Home from "./components/Home";
import { TransitionGroup, CSSTransition } from "react-transition-group";

function App(): JSX.Element {
  const location = useLocation();
  let routes = (
    <TransitionGroup>
      <CSSTransition timeout={500} classNames="route" key={location.key}>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/services" component={Services} />
          <Route exact path="/team" component={Team} />
          <Route exact path="/jobs" component={Jobs} />
          <Route exact path="/contact" component={Contact} />
        </Switch>
      </CSSTransition>
    </TransitionGroup>
  );
  return (
    <>
      <Navbar></Navbar>
      <Switch>
        <div>{routes}</div>;
      </Switch>
      <Footer></Footer>
    </>
  );
}

export default App;

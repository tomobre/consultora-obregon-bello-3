import React from "react";
import "./App.css";
import Navbar from "./components/commons/Navbar";
import Services from "./components/Services";
import Team from "./components/Team";
import Jobs from "./components/Jobs";
import Contact from "./components/Contact";
import Home from "./components/Home";
import Eight from "./components/Eight";
import Aos from "aos";
import "aos/dist/aos.css";

// https://isaachernandez.es/sobre-mi/
//https://jveragil.com/
// https://thefwa.com/awards/page/1/
// https://contra.com/freelance-industry-report-2021/
// https://blog.hubspot.es/marketing/efecto-parallax
// empezar a averiguar react animation on scroll

function App(): JSX.Element {
  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  return (
    <div className="font-mono text-sm">
      <Navbar></Navbar>
      <Home></Home>
      <Eight></Eight>
      <Team></Team>
      <Services></Services>
      <Jobs></Jobs>
      <Contact></Contact>
    </div>
  );
}

export default App;

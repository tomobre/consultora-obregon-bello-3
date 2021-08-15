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

function App(): JSX.Element {
  const [offsetY, setOffsetY] = React.useState(0);
  const [eightPos, setEightPos] = React.useState(0);

  //const teamRef = React.useRef(null);
  //console.log(teamRef);
  // const eight = document.getElementById("home").getBoundingClientRect().top;

  /*   if (jobs === 0) {
    setEightPos(0);
  } */
  //console.log(offsetY);
  const handleScroll = () => {
    setOffsetY(window.pageYOffset);
  };
  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
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

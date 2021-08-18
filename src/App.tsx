// @ts-nocheck
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
import {
  motion,
  Scroll,
  useMotionValue,
  Frame,
  useTransform,
  useViewportScroll,
} from "framer-motion";

// https://isaachernandez.es/sobre-mi/
//https://jveragil.com/
// https://thefwa.com/awards/page/1/
// https://contra.com/freelance-industry-report-2021/
// https://blog.hubspot.es/marketing/efecto-parallax

function App(): JSX.Element {
  const [offsetY, setOffsetY] = React.useState(0);
  const [eightPos, setEightPos] = React.useState(0);
  const [eachPos, setEachPos] = React.useState({
    eight: 0,
    team: 0,
    jobs: 0,
    services: 0,
    contact: 0,
  });

  const { scrollYProgress, scrollY } = useViewportScroll();

  console.log(scrollY);
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
  const scaleAnim = useTransform(scrollYProgress, [0, 0.01, 0.03], [1, 1, 0.5]);
  const yPosAnim = useTransform(
    scrollYProgress,
    [0, 0.01, 0.03, 0.05, 0.07, 0.15, 0.2, 0.31, 0.5, 0.58, 0.7, 0.91],
    [370, 370, 950, 950, 950, 1900, 1900, 3000, 3000, 4780, 4780, 7400]
  );
  const xPosAnim = useTransform(
    scrollYProgress,
    [0, 0.01, 0.03, 0.05, 0.07, 0.15],
    [620, 620, 660, 660, 660, 310]
  );
  const opacity = useTransform(
    scrollYProgress,
    [
      0, 0.01, 0.015, 0.025, 0.03, 0.05, 0.07, 0.075, 0.145, 0.15, 0.2, 0.205,
      0.305, 0.31, 0.5, 0.505, 0.575, 0.58, 0.7, 0.705, 0.905, 0.91,
    ],
    [
      1, 1, 0.2, 0.2, 1, 1, 1, 0.2, 0.2, 1, 1, 0.2, 0.2, 1, 1, 0.2, 0.2, 1, 1,
      0.2, 0.2, 1,
    ]
  );

  return (
    <div className="font-mono text-sm">
      <Navbar></Navbar>
      <motion.div
        style={{
          scale: scaleAnim,
          y: yPosAnim,
          x: xPosAnim,
          opacity: opacity,
          transformOrigin: "center center initial",
        }}
      >
        <img
          id="eight"
          className="absolute"
          src="assets/images/logo-ocho.png"
          alt="ocho"
        />
      </motion.div>
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

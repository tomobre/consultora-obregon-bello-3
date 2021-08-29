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
  useElementScroll,
} from "framer-motion";

// https://isaachernandez.es/sobre-mi/
//https://jveragil.com/
// https://thefwa.com/awards/page/1/
// https://contra.com/freelance-industry-report-2021/
// https://blog.hubspot.es/marketing/efecto-parallax

function App(): JSX.Element {
  const homeRef = React.useRef();
  const eightRef = React.useRef();
  const teamRef = React.useRef();
  const contactRef = React.useRef();
  const servicesRef = React.useRef();
  const jobsRef = React.useRef();
  const { scrollYProgress } = useViewportScroll();
  const [pos, setPos] = React.useState({
    home: null,
    eight: null,
    team: null,
    jobs: null,
    services: null,
    contact: null,
  });

  console.log(scrollYProgress);

  React.useEffect(() => {
    const homePos = homeRef.current.getBoundingClientRect().top;
    const eightPos = eightRef.current.getBoundingClientRect().top - 200;
    const teamPos = teamRef.current.getBoundingClientRect().top - 270;
    const contactPos = contactRef.current.getBoundingClientRect().top;
    const jobsPos = jobsRef.current.getBoundingClientRect().top - 270;
    const servicesPos = servicesRef.current.getBoundingClientRect().top - 270;
    console.log(teamPos);

    setPos({
      home: homePos,
      eight: eightPos,
      team: teamPos,
      jobs: jobsPos,
      services: servicesPos,
      contact: contactPos,
    });
  }, []);

  React.useEffect(() => {
    Aos.init({ duration: 2000 });
  }, []);
  const scaleAnim = useTransform(scrollYProgress, [0, 0.01, 0.03], [1, 1, 0.5]);
  const yPosAnim = useTransform(
    scrollYProgress,
    [
      0, 0.01 /* signif ocho */, 0.03, 0.07, /* quienes somos */ 0.15, 0.25,
      /* que hacemos */ 0.31, 0.5, /* proyectos */ 0.58, 0.7,
      /* contacto */ 0.91,
    ],

    [
      300,
      300,
      pos.eight,
      pos.eight,
      pos.team,
      pos.team,
      pos.services,
      pos.services,
      pos.jobs,
      pos.jobs,
      pos.contact,
    ]
  );
  const xPosAnim = useTransform(
    scrollYProgress,
    [0, 0.01, 0.03, 0.05, 0.07, 0.15],

    [420, 420, 450, 450, 450, 200]
  );
  const opacity = useTransform(
    scrollYProgress,
    [
      0, 0.01, 0.015, 0.025, 0.03, 0.05, 0.07, 0.075, 0.145, 0.15, 0.2, 0.255,
      0.305, 0.31, 0.5, 0.505, 0.575, 0.58, 0.7, 0.705, 0.905, 0.91,
    ],
    [
      1, 1, 0.2, 0.2, 1, 1, 1, 0.2, 0.2, 1, 1, 0.2, 0.2, 1, 1, 0.2, 0.2, 1, 1,
      0.2, 0.2, 1,
    ]
  );
  const { innerWidth: width } = window;
  const mobileWidth = width / 2;
  console.log(width);
  const posEightMob = pos.eight + 100;
  const posTeamMob = pos.team + 130;
  const posJobsMob = pos.jobs + 270;
  const posServicesMob = pos.services + 140;
  const yPosAnimMob = useTransform(
    scrollYProgress,
    [0, 0.003, 0.008],

    [180, 180, posEightMob]
  );
  const xPosAnimMob = useTransform(
    scrollYProgress,
    [0, 0.003, 0.008],

    [mobileWidth, mobileWidth, mobileWidth + 10]
  );
  const opacityMob = useTransform(
    scrollYProgress,
    [0, 0.001, 0.0015, 0.065 /* signif ocho */, 0.07],
    [1, 1, 0.2, 0.2, 1]
  );

  return (
    <div className="font-mono text-sm">
      <Navbar></Navbar>
      <div className="maxWidth">
        {" "}
        <div>
          {" "}
          <div>
            {" "}
            <motion.div
              style={{
                scale: scaleAnim,
                y: yPosAnim,
                x: xPosAnim,
                opacity: opacity,
                transformOrigin: "center center initial",
              }}
            >
              <div>
                {" "}
                <img
                  id="eight"
                  className="absolute hidden md:block "
                  src="assets/images/logo-ocho.png"
                  alt="ocho"
                />
              </div>
            </motion.div>
          </div>
          <div>
            {" "}
            <motion.div
              style={{
                y: yPosAnimMob,
                x: xPosAnimMob,
                transformOrigin: "center center initial",
              }}
            >
              <div>
                {" "}
                <img
                  id="eight"
                  className="absolute md:hidden w-16"
                  src="assets/images/logo-ocho.png"
                  alt="ocho"
                />
              </div>
            </motion.div>
          </div>
        </div>
        <div ref={homeRef}>
          <Home></Home>
        </div>
        <div ref={eightRef}>
          <Eight></Eight>
        </div>
        <div ref={teamRef}>
          <Team></Team>
        </div>
        <div ref={servicesRef}>
          <Services></Services>
        </div>
        <div ref={jobsRef}>
          {" "}
          <Jobs></Jobs>
        </div>
        <div ref={contactRef}>
          {" "}
          <Contact></Contact>
        </div>
      </div>
    </div>
  );
}

export default App;

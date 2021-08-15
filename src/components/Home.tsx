import React from "react";

export interface NavbarProps {}

const Home: React.SFC<NavbarProps> = () => {
  return (
    <div
      id="home"
      data-aos="fade-up"
      className="h-screen text-gray-200 flex justify-center  flex-col items-center"
    >
      <img
        id="eight"
        className=""
        src="../../images/logo-ocho.png"
        alt="ocho"
      />
      <img src="../../images/logo-obregon-bello.png" alt="ocho" />
    </div>
  );
};

export default Home;

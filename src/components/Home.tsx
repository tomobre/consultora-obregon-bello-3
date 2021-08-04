import React from "react";

export interface NavbarProps {}

const Home: React.SFC<NavbarProps> = () => {
  return (
    <div
      id="home"
      data-aos="fade-up"
      className="h-screen text-gray-200 flex justify-center  items-center"
    >
      home
    </div>
  );
};

export default Home;

import React from "react";

export interface NavbarProps {}

const Home: React.SFC<NavbarProps> = () => {
  return (
    <div
      id="home"
      className="h-screen text-gray-200 flex justify-center   flex-col items-center"
    >
      <img src="assets/images/logo-obregon-bello.png" alt="ocho" />
    </div>
  );
};

export default Home;

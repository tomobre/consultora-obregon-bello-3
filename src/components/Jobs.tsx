import React from "react";

export interface NavbarProps {}

const Jobs: React.SFC<NavbarProps> = () => {
  return (
    <div
      id="jobs"
      data-aos="fade-up"
      className="h-screen text-gray-200 flex justify-center grid grid-cols-2 "
    >
      <div className=" border-r-8"></div>
      <div></div>
    </div>
  );
};

export default Jobs;

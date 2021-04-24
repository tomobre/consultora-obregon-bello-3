import React from "react";
import { Link } from "react-router-dom";

export interface NavbarProps {}

const Footer: React.SFC<NavbarProps> = () => {
  return <div className="absolute inset-x-0 bottom-0">footer</div>;
};

export default Footer;

import React from "react";
import { Link } from "react-router-dom";

export interface NavbarProps {}

const Navbar: React.SFC<NavbarProps> = () => {
  return (
    <div className="flex justify-center">
      <Link className="mx-5" to="/">
        <h3>Inicio</h3>
      </Link>
      <Link className="mx-5" to="/services">
        <h3>Servicio</h3>
      </Link>
      <Link className="mx-5" to="/jobs">
        <h3>Trabajos</h3>
      </Link>
      <Link className="mx-5" to="/contact">
        <h3>Contacto</h3>
      </Link>
    </div>
  );
};

export default Navbar;

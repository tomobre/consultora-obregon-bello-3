// @ts-nocheck
import React from "react";
import { HashLink as Link } from "react-router-hash-link";
import { Dropdown } from "./Dropdown.jsx";
export interface NavbarProps {}

const Navbar: React.SFC<NavbarProps> = () => {
  const [dropdowns, setDropdowns] = React.useState({});

  React.useEffect(() => {
    let newDropdowns = {};
    newDropdowns["mobile-menu"] = false;

    newDropdowns.item1 = false;
    newDropdowns.item2 = false;

    setDropdowns({ ...newDropdowns });
  }, []);

  const onMouseLeave = () => {
    Object.keys(dropdowns).forEach((key) => {
      dropdowns[key] = false;
    });
    setDropdowns({ ...dropdowns });
  };

  const hanldeMobileMenu = () => {
    if (dropdowns["mobile-menu"]) {
      onMouseLeave();
    } else {
      dropdowns["mobile-menu"] = true;
      setDropdowns({ ...dropdowns });
    }
  };
  const Settings = [
    {
      id: "inicio",
      title: "Inicio",
      type: "Link",
      path: "#home",
    },
    {
      id: "services",
      title: "¿Que hacemos?",
      type: "Link",
      path: "#services",
    },
    {
      id: "team",
      title: "¿Quienes Somos?",
      type: "Link",
      path: "#team",
    },
    {
      id: "jobs",
      title: "Proyectos",
      type: "Link",
      path: "#jobs",
    },
    {
      id: "contact",
      title: "Contacto",
      type: "Link",
      path: "#contact",
    },
  ];
  return (
    <div className=" md:mb-10  bg-gray-50 p-5 flex md:justify-center sticky top-0 z-10 ">
      <div className="md:flex hidden ">
        {Settings.map((option) => {
          return (
            <Link className="mx-5 " to={option.path}>
              {option.title}
            </Link>
          );
        })}
      </div>
      <div className="md:hidden">
        <div
          className={`inline uppercase font-menu  ${
            dropdowns["mobile-menu"] ? "mob-menu active" : "mob-menu"
          }`}
        >
          <Dropdown
            close={hanldeMobileMenu}
            menuItems={Settings}
            handler={() => true}
          />
        </div>
        <div
          // className="nav-links"
          className=" cursor-pointer  uppercase font-menu text-gray-700 whitespace-nowrap"
          onClick={hanldeMobileMenu}
          key="mobile-menu"
          id="mobile-menu"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

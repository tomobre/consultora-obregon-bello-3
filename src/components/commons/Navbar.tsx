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
      id: "training",
      title: "Training Programs",
      type: "Link",
      path: "/training",
    },
    {
      id: "pricing",
      title: "Pricing",
      type: "Link",
      path: "/pricing",
    },
    {
      id: "about-ctedu",
      title: "About CTEDU & The Team",
      type: "Link",
      path: "/about",
    },
    {
      id: "contact-admissions",
      title: "Contact",
      type: "Link",
      path: "/contact",
    },
    {
      id: "blog",
      title: "Blog",
      type: "Link",
      path: "/blog/",
    },
    {
      id: "faqs",
      title: "Faqs",
      type: "Link",
      path: "/about/faq",
    },
    {
      id: "kb",
      title: "Knowledge Base",
      type: "Link",
      path: "/about/learning-philosophy",
    },
    {
      id: "apply",
      title: "Apply",
      type: "Button",
      path: "https://campus.coachtrainingedu.com/apply",
    },
  ];
  return (
    <div className=" md:mb-10 w-screen bg-gray-50 p-5 flex justify-center sticky top-0 z-10 ">
      <img src="" alt="" />
      <Link className="mx-5 " to="#home">
        <h3>Inicio</h3>
      </Link>
      <Link className="mx-5" to="#services">
        <h3>¿Que hacemos?</h3>
      </Link>
      <Link className="mx-5" to="#team">
        <h3>¿Quienes somos?</h3>
      </Link>
      <Link className="mx-5" to="#jobs">
        <h3>Proyectos</h3>
      </Link>
      <Link className="mx-5" to="#contact">
        <h3>Contacto</h3>
      </Link>
      <div className="hidden">
        <div className="items-center uppercase font-menu whitespace-nowrap">
          {dropdowns["mobile-menu"] && (
            <Dropdown menuItems={Settings} handler={() => true} />
          )}
        </div>
        <div className="pl-28 flex items-center ">
          <div>
            <ul className="flex items-center">
              <div
                // className="nav-links"
                className="pr-8 cursor-pointer p-5 flex flex-col items-center uppercase font-menu text-gray-700 whitespace-nowrap"
                onClick={hanldeMobileMenu}
                key="mobile-menu"
                id="mobile-menu"
              >
                <li>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-10"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                      clipRule="evenodd"
                    />
                  </svg>
                </li>
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;

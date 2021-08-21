import React, { useState } from "react";
import { HashLink as Link } from "react-router-hash-link";

export const Dropdown = (props) => {
  const [click, setClick] = useState(false);

  const handleClick = () => {
    setClick(!click);
    props.handler();
  };

  return (
    <>
      <ul
        onClick={handleClick}
        onMouseLeave={handleClick}
        className="absolute flex flex-col mt-10 bg-blue items-center"
      >
        {props.menuItems.map((item, index) => {
          return (
            <Link
              key={index}
              className="flex text-white hover:bg-blue-light-less w-full"
              to={item.path}
              onClick={() => setClick(false)}
            >
              <li className="m-4">{item.title}</li>
            </Link>
          );
        })}
      </ul>
    </>
  );
};

import React from "react";

export interface NavbarProps {}

const Eight: React.FunctionComponent<NavbarProps> = () => {
  return (
    <div
      data-aos="fade-up"
      className="h-screen text-gray-200 container mx-auto  text-right w-1/2 pt-10 "
    >
      <p>
        El signo de la habilidad ejecutiva, la gestión, el sacrificio y el
        poder.
      </p>
      <p>El número de las habilidades políticas. </p>
      <p>
        {" "}
        La cifra de aquellos que trabajan incansablemente para alcanzar el
        reconocimiento.
      </p>
    </div>
  );
};

export default Eight;

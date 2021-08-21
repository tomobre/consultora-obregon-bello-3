// @ts-nocheck
import React from "react";

export interface NavbarProps {}

const Contact: React.FunctionComponent<NavbarProps> = () => {
  const onSubmit = () => {
    console.log("submitted");
  };
  return (
    <div
      id="contact"
      data-aos="fade-up"
      className="h-screen flex justify-center  flex-col"
    >
      <h3 className="text-center my-5 text-gray-50 text-xl ">Contacto</h3>
      <form className="container mx-auto  text-center w-2/3 md:w-1/3" action="">
        <input
          className="w-full  shadow my-5 p-2 rounded-xl"
          placeholder="Nombre"
          type="text"
        />
        <br />
        <input
          className=" w-full  shadow my-5 p-2  rounded-xl"
          placeholder="Email"
          type="text"
        />
        <br />
        <input
          className=" w-full  shadow my-5 p-2  rounded-xl"
          placeholder="Asunto"
          type="text"
        />
        <br />
        <textarea
          rows="10"
          className=" w-full   shadow my-5 p-2  rounded-xl "
          placeholder="Mensaje..."
        />
        <br />
        <button className="text-xl text-gray-50" onClick={onSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;

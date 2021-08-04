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
      className="h-screen text-gray-200 flex justify-center  flex-col"
    >
      <h3 className="text-center my-5 text-xl ">Contacto</h3>
      <form
        className="flex flex-col justify-center items-center text-center"
        action=""
      >
        <input className=" shadow my-5 p-2" placeholder="Nombre" type="text" />
        <input className="shadow my-5 p-2" placeholder="Email" type="text" />
        <input className="shadow my-5 p-2" placeholder="Asunto" type="text" />
        <input
          className="shadow my-5 p-2"
          placeholder="Mensaje..."
          type="text"
        />
        <button className="bg-blue-500 rounded-l px-5 py-2" onClick={onSubmit}>
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;

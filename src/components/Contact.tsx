// @ts-nocheck
import React from "react";

export interface NavbarProps {}

const Contact: React.FunctionComponent<NavbarProps> = () => {
  const [response, setResponse] = React.useState("");
  const loaderRef = React.useRef();

  const onSubmit = (e) => {
    e.preventDefault();
    loaderRef.current.classList.remove("hidden");
    console.log(e.target);
    fetch("https://formsubmit.co/ajax/tomobre@gmail.com", {
      method: "POST",
      body: new FormData(e.target),
    })
      .then((res) => (res.ok ? res.json() : Promise.reject(res)))
      .then((json) => {
        loaderRef.current.classList.add("hidden");
        setResponse("Los datos han sido enviados");
      })
      .catch((err) => {
        loaderRef.current.classList.add("hidden");
        setResponse("Ocurrio un error al enviar los datos");
      })
      .finally(() => {
        setTimeout(() => {
          setResponse("");
        }, 5000);
      });
  };

  return (
    <div
      id="contact"
      data-aos="fade-up"
      className="h-screen flex justify-center  flex-col"
    >
      <h3 className="text-center my-5 text-gray-50 text-xl ">Contacto</h3>
      <form
        onSubmit={(e) => onSubmit(e)}
        className="container mx-auto  text-center w-2/3 md:w-1/3"
        method="post"
        action="#"
      >
        <input
          className="w-full  shadow my-5 p-2 rounded-xl"
          placeholder="Nombre"
          type="text"
          name="nombre"
        />
        <br />
        <input
          className=" w-full  shadow my-5 p-2  rounded-xl"
          placeholder="Email"
          type="text"
          name="email"
        />
        <br />
        <input
          className=" w-full  shadow my-5 p-2  rounded-xl"
          placeholder="Asunto"
          type="text"
          name="asunto"
        />
        <br />
        <textarea
          rows="10"
          className=" w-full   shadow my-5 p-2  rounded-xl "
          placeholder="Mensaje..."
          name="mensaje"
        />
        <br />
        <div className="flex justify-center my-5">
          <svg
            ref={loaderRef}
            className="hidden "
            width="45"
            height="45"
            viewBox="0 0 45 45"
            xmlns="http://www.w3.org/2000/svg"
            stroke="#fff"
          >
            <g
              fill="none"
              fill-rule="evenodd"
              transform="translate(1 1)"
              stroke-width="2"
            >
              <circle cx="22" cy="22" r="6" stroke-opacity="0">
                <animate
                  attributeName="r"
                  begin="1.5s"
                  dur="3s"
                  values="6;22"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  begin="1.5s"
                  dur="3s"
                  values="1;0"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-width"
                  begin="1.5s"
                  dur="3s"
                  values="2;0"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="22" cy="22" r="6" stroke-opacity="0">
                <animate
                  attributeName="r"
                  begin="3s"
                  dur="3s"
                  values="6;22"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-opacity"
                  begin="3s"
                  dur="3s"
                  values="1;0"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
                <animate
                  attributeName="stroke-width"
                  begin="3s"
                  dur="3s"
                  values="2;0"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
              <circle cx="22" cy="22" r="8">
                <animate
                  attributeName="r"
                  begin="0s"
                  dur="1.5s"
                  values="6;1;2;3;4;5;6"
                  calcMode="linear"
                  repeatCount="indefinite"
                />
              </circle>
            </g>
          </svg>
        </div>
        <div className="text-gray-50 text-center my-5">
          {response && response}
        </div>
        <button className="text-xl text-gray-50">Enviar</button>
      </form>
    </div>
  );
};

export default Contact;

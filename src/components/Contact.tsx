import React from "react";

export interface NavbarProps {}

const Contact: React.SFC<NavbarProps> = () => {
  return <div>
<h3 className='text-center my-5 text-xl '>Contacto</h3>
    <form className='flex flex-col justify-center items-center text-center' action="">
<input className=' shadow my-5 p-2'placeholder='Nombre' type="text"/><input className='shadow my-5 p-2'  placeholder='Email' type="text"/><input  className='shadow my-5 p-2' placeholder='Asunto' type="text"/>

<button className='bg-blue-500 rounded-l px-5 py-2'>Enviar</button>

    </form>
  </div>;
};

export default Contact;

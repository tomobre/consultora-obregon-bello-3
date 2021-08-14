import React from "react";

export interface NavbarProps {}

const Services: React.FunctionComponent<NavbarProps> = () => {
  return (
    <div id="services" className="text-gray-200 container mx-auto w-1/2 my-20">
      <h2 className="text-4xl  text-center mb-5">¿Que hacemos?</h2>
      <div data-aos="fade-up">
        <div className="flex justify-center">
          <p className="bg-gray-50 inline  text-center text-gray-50">ff</p>
        </div>

        <p className="my-10 text-center">
          Desarrollamos un sistema de asesoría en comunicación para construir el
          mejor posicionamiento para nuestros clientes. Mejoramos su imagen y
          consolidamos su reputación dentro de los diferentes escenarios a los
          que se enfrentarán durante su gestión.
        </p>
      </div>
      <div data-aos="fade-up">
        <div className="flex justify-center">
          <p className="bg-gray-50 inline  text-center text-gray-50">ff</p>
        </div>

        <p className="my-10 text-center">
          Trabajamos con el objetivo de generar una opinión pública favorable, a
          partir de acciones diseñadas para penetrar en todos los públicos y
          mensajes claros que se instalen en la ciudadanía y generen una
          percepción de credibilidad y confianza. Potenciamos los mensajes
          positivos y minimizamos los negativos, siempre con preparación y
          evitando la improvisación.
        </p>
      </div>
      <div data-aos="fade-up">
        <div className="flex justify-center">
          <p className="bg-gray-50 inline  text-center text-gray-50">ff</p>
        </div>

        <p className="my-10 text-center">
          Le acercamos y describimos brevemente nuestro servicio de asesoría de
          prensa y comunicación, a la expectativa de que pueda confiar en
          nosotros para trabajar en pos de la consolidación de su figura pública
          y/o la de su institución a cargo.{" "}
        </p>
      </div>
      <div data-aos="fade-up">
        <h4 className="text-gray-900 bg-gray-50 inline uppercase"> Difusión</h4>
        <p className="my-10 ">
          Convertimos una acción en información positiva para todos los medios
          de comunicación. Creamos un sistema de trabajo acorde a la dinámica y
          requerimientos de cada institución. Su gestión comenzará a ser noticia
          y se instalará en la opinión pública.
        </p>
      </div>
      <div data-aos="fade-up">
        <h4 className="text-gray-900 bg-gray-50 inline uppercase">
          Comunicación de crisis
        </h4>
        <p className="my-10">
          Frente a una crisis, el manejo estratégico de la comunicación se
          convierte en la pieza clave para retener la confianza de la opinión
          pública y de los actores interesados; incluso, esta situación crítica
          puede convertirse en una gran oportunidad para consolidar los valores
          de una organización. Trabajamos para prevenir posibles situaciones de
          crisis en los medios de comunicación. Asesoramos en la elaboración e
          implementación de estrategias y tácticas para enfrentar
          acontecimientos que puedan afectar su imagen, la de la institución y/o
          la de sus integrantes.
        </p>
      </div>
      <div data-aos="fade-up">
        <h4 className="text-gray-900 bg-gray-50 inline uppercase">
          Relaciones con la prensa
        </h4>
        <p className="my-10">
          Generamos la relación con periodistas, líderes de opinión y personas
          influyentes. Seremos el nexo entre usted y los periodistas gráficos
          (diarios y revistas), radiales, audiovisuales, productores,
          conductores de televisión, y demás trabajadores de medios.
        </p>
      </div>
      <div data-aos="fade-up">
        <h4 className="text-gray-900 bg-gray-50 inline uppercase">
          Comunicación digital
        </h4>
        <p className="my-10">
          Elaboramos un plan a la medida de sus objetivos y partiendo de un
          diagnóstico. Producimos piezas gráficas y audiovisuales en línea con
          su identidad, las últimas tendencias y las características de cada
          canal. Social Listening y Big Data Analysis. Viralización y marketing
          de influencers.
        </p>
      </div>
      <div data-aos="fade-up">
        <h4 className="text-gray-900 bg-gray-50 inline uppercase">
          Full media coaching
        </h4>
        <p className="my-10">
          Preparamos ejercicios con periodistas y conductores de televisión en
          base a guiones especialmente diseñados. Este sistema completo de media
          coaching contará con producciones de cámaras en HD, falsos vivos,
          ruedas de prensa y situaciones extremas.on
        </p>
      </div>
    </div>
  );
};

export default Services;

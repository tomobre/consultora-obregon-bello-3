import React from "react";

export interface NavbarProps {}

const Team: React.SFC<NavbarProps> = () => {
  return (
    <div
      id="team"
      data-aos="fade-up"
      className=" h-screen text-gray-200 container mx-auto w-1/2"
    >
      <h2 className="text-4xl  text-center mb-5">¿Quienes somos?</h2>
      <h4 className="text-gray-900 bg-gray-50 inline">Oscar Obregon</h4>
      <p className="my-10">
        Está cumpliendo este año 3 décadas dedicadas al periodismo en
        televisión. Fue Gerente de los noticieros de TELEFE cuando en los '90 el
        histórico Canal 11 fue privatizado y creó el canal de Red de Noticias
        para TELEFE. En 1997 fue Gerente de los noticieros de América 2 y
        también de la señal de noticias, por aquel entonces CVN. En 2003 produjo
        integralmente “Recursos Humanos”, por Canal 13 con la conducción de
        Néstor Ibarra, ganador de un premio Martín Fierro y su formato fue
        vendido en varios países de América y Europa. En 2005 fue productor
        general de “Decisión Limite”, por América conducido por Horacio Cabak.
        En 2007 fue productor general y asesor en el área de Noticias de la TVP.
        En 2008 produjo integralmente un magazine de noticias que conducían Maby
        Wells y Macu Mazzuca por Canal 9. En 2010 fue subgerente de noticias de
        Canal 9 y en 2016, Director de Comunicación del Ministerio de Seguridad
        de la Provincia de Buenos Aires.
      </p>

      <h4 className="text-gray-900 bg-gray-50 inline"> Martin Bello</h4>
      <p className="my-10">
        Estudió Relaciones del Trabajo en la Universidad de Buenos Aires durante
        cuatro años, hasta que el periodismo se impuso al mundo laboral y sus
        conflictos. Es egresado de la Escuela de Periodismo TEA. Su experiencia
        profesional le ha permitido obtener sólidos conocimientos en
        comunicación. En 2005 comenzó su recorrido como asesor de prensa y
        comunicación en el sector público. Cumplió funciones en el Gobierno de
        la Ciudad Autónoma de Buenos Aires, en la Legislatura porteña,
        municipios y organismos descentralizados. En 2016 fue designado Director
        General de Análisis Informativo del Ministerio de Seguridad de la
        Provincia de Buenos Aires, cargo que ocupó durante los cuatro años de
        gestión.
      </p>
    </div>
  );
};

export default Team;

var e=Object.defineProperty,a=Object.prototype.hasOwnProperty,t=Object.getOwnPropertySymbols,i=Object.prototype.propertyIsEnumerable,s=(a,t,i)=>t in a?e(a,t,{enumerable:!0,configurable:!0,writable:!0,value:i}):a[t]=i,r=(e,r)=>{for(var n in r||(r={}))a.call(r,n)&&s(e,n,r[n]);if(t)for(var n of t(r))i.call(r,n)&&s(e,n,r[n]);return e};import{r as n,H as l,u as o,A as c,a as m,m as u,b as d,B as p}from"./vendor.aa1a0c36.js";!function(e=".",a="__import__"){try{self[a]=new Function("u","return import(u)")}catch(t){const i=new URL(e,location),s=e=>{URL.revokeObjectURL(e.src),e.remove()};self[a]=e=>new Promise(((t,r)=>{const n=new URL(e,i);if(self[a].moduleMap[n])return t(self[a].moduleMap[n]);const l=new Blob([`import * as m from '${n}';`,`${a}.moduleMap['${n}']=m;`],{type:"text/javascript"}),o=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(l),onerror(){r(new Error(`Failed to import: ${e}`)),s(o)},onload(){t(self[a].moduleMap[n]),s(o)}});document.head.appendChild(o)})),self[a].moduleMap={}}}("/consultora-obregon-bello-3/assets/");const g=e=>{const[a,t]=n.useState(!1);return n.createElement(n.Fragment,null,n.createElement("ul",{onClick:e.close,onMouseLeave:()=>{t(!a),e.handler()},className:"absolute flex flex-col mt-10 left-0 right-0 bg-gray-50 items-center"},e.menuItems.map(((e,a)=>n.createElement(l,{key:a,className:"flex text-gray-900  hover:bg-blue-light-less w-full",to:e.path,onClick:()=>t(!1)},n.createElement("li",{className:"m-4"},e.title))))))},v=()=>{const[e,a]=n.useState({});n.useEffect((()=>{let e={"mobile-menu":!1,item1:!1,item2:!1};a(r({},e))}),[]);const t=()=>{e["mobile-menu"]?(Object.keys(e).forEach((a=>{e[a]=!1})),a(r({},e))):(e["mobile-menu"]=!0,a(r({},e)))},i=[{id:"inicio",title:"Inicio",type:"Link",path:"#home"},{id:"services",title:"¿Que hacemos?",type:"Link",path:"#services"},{id:"team",title:"¿Quienes Somos?",type:"Link",path:"#team"},{id:"jobs",title:"Proyectos",type:"Link",path:"#jobs"},{id:"contact",title:"Contacto",type:"Link",path:"#contact"}];return n.createElement("div",{className:" md:mb-10  bg-gray-50 p-5 flex md:justify-center sticky top-0 z-10 "},n.createElement("div",{className:"md:flex hidden "},i.map((e=>n.createElement(l,{className:"mx-5 ",to:e.path},e.title)))),n.createElement("div",{className:"md:hidden"},n.createElement("div",{className:"inline uppercase font-menu  "+(e["mobile-menu"]?"mob-menu active":"mob-menu")},n.createElement(g,{close:t,menuItems:i,handler:()=>!0})),n.createElement("div",{className:" cursor-pointer  uppercase font-menu text-gray-700 whitespace-nowrap",onClick:t,key:"mobile-menu",id:"mobile-menu"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-5 w-5",viewBox:"0 0 20 20",fill:"currentColor"},n.createElement("path",{fillRule:"evenodd",d:"M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z",clipRule:"evenodd"})))))},E=()=>n.createElement("div",{id:"services",className:"text-gray-200 container mx-auto w-1/2 my-20"},n.createElement("h2",{className:"text-4xl  text-center mb-5"},"¿Que hacemos?"),n.createElement("div",{"data-aos":"fade-up"},n.createElement("div",{className:"flex justify-center"},n.createElement("div",{className:" text-center w-8 "}," ",n.createElement("img",{id:"eight",className:"  ",src:"assets/images/logo-ocho.png",alt:"ocho"}))),n.createElement("p",{className:"my-10 text-center"},"Desarrollamos un sistema de asesoría en comunicación para construir el mejor posicionamiento para nuestros clientes. Mejoramos su imagen y consolidamos su reputación dentro de los diferentes escenarios a los que se enfrentarán durante su gestión.")),n.createElement("div",{"data-aos":"fade-up"},n.createElement("div",{className:"flex justify-center"},n.createElement("div",{className:" text-center w-8 "}," ",n.createElement("img",{id:"eight",className:"  ",src:"assets/images/logo-ocho.png",alt:"ocho"}))),n.createElement("p",{className:"my-10 text-center"},"Trabajamos con el objetivo de generar una opinión pública favorable, a partir de acciones diseñadas para penetrar en todos los públicos y mensajes claros que se instalen en la ciudadanía y generen una percepción de credibilidad y confianza. Potenciamos los mensajes positivos y minimizamos los negativos, siempre con preparación y evitando la improvisación.")),n.createElement("div",{"data-aos":"fade-up"},n.createElement("div",{className:"flex justify-center"},n.createElement("div",{className:" text-center w-8 "}," ",n.createElement("img",{id:"eight",className:"  ",src:"assets/images/logo-ocho.png",alt:"ocho"}))),n.createElement("p",{className:"my-10 text-center"},"Le acercamos y describimos brevemente nuestro servicio de asesoría de prensa y comunicación, a la expectativa de que pueda confiar en nosotros para trabajar en pos de la consolidación de su figura pública y/o la de su institución a cargo."," ")),n.createElement("div",{"data-aos":"fade-up"},n.createElement("h4",{className:"text-gray-900 bg-gray-50 inline uppercase"}," Difusión"),n.createElement("p",{className:"my-10 "},"Convertimos una acción en información positiva para todos los medios de comunicación. Creamos un sistema de trabajo acorde a la dinámica y requerimientos de cada institución. Su gestión comenzará a ser noticia y se instalará en la opinión pública.")),n.createElement("div",{"data-aos":"fade-up"},n.createElement("h4",{className:"text-gray-900 bg-gray-50 inline uppercase"},"Comunicación de crisis"),n.createElement("p",{className:"my-10"},"Frente a una crisis, el manejo estratégico de la comunicación se convierte en la pieza clave para retener la confianza de la opinión pública y de los actores interesados; incluso, esta situación crítica puede convertirse en una gran oportunidad para consolidar los valores de una organización. Trabajamos para prevenir posibles situaciones de crisis en los medios de comunicación. Asesoramos en la elaboración e implementación de estrategias y tácticas para enfrentar acontecimientos que puedan afectar su imagen, la de la institución y/o la de sus integrantes.")),n.createElement("div",{"data-aos":"fade-up"},n.createElement("h4",{className:"text-gray-900 bg-gray-50 inline uppercase"},"Relaciones con la prensa"),n.createElement("p",{className:"my-10"},"Generamos la relación con periodistas, líderes de opinión y personas influyentes. Seremos el nexo entre usted y los periodistas gráficos (diarios y revistas), radiales, audiovisuales, productores, conductores de televisión, y demás trabajadores de medios.")),n.createElement("div",{"data-aos":"fade-up"},n.createElement("h4",{className:"text-gray-900 bg-gray-50 inline uppercase"},"Comunicación digital"),n.createElement("p",{className:"my-10"},"Elaboramos un plan a la medida de sus objetivos y partiendo de un diagnóstico. Producimos piezas gráficas y audiovisuales en línea con su identidad, las últimas tendencias y las características de cada canal. Social Listening y Big Data Analysis. Viralización y marketing de influencers.")),n.createElement("div",{"data-aos":"fade-up"},n.createElement("h4",{className:"text-gray-900 bg-gray-50 inline uppercase"},"Full media coaching"),n.createElement("p",{className:"my-10"},"Preparamos ejercicios con periodistas y conductores de televisión en base a guiones especialmente diseñados. Este sistema completo de media coaching contará con producciones de cámaras en HD, falsos vivos, ruedas de prensa y situaciones extremas.on"))),f=()=>n.createElement("div",{id:"team",className:" md:h-screen text-gray-200 container mx-auto w-2/3"},n.createElement("h2",{"data-aos":"fade-up",className:"text-4xl  text-center mb-20"},"¿Quienes somos?"),n.createElement("div",{"data-aos":"fade-up",className:"grid md:grid-cols-4 my-10"},n.createElement("div",{className:""}," ",n.createElement("img",{className:"rounded-full  px-5 pb-5",src:"https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg",alt:""})),n.createElement("div",{className:"col-span-3"},n.createElement("h4",{className:"text-gray-900 bg-gray-50 inline text-xl"},"Oscar Obregon"),n.createElement("p",{className:"mt-10"},"Está cumpliendo este año 3 décadas dedicadas al periodismo en televisión. Fue Gerente de los noticieros de TELEFE cuando en los '90 el histórico Canal 11 fue privatizado y creó el canal de Red de Noticias para TELEFE. En 1997 fue Gerente de los noticieros de América 2 y también de la señal de noticias, por aquel entonces CVN. En 2003 produjo integralmente “Recursos Humanos”, por Canal 13 con la conducción de Néstor Ibarra, ganador de un premio Martín Fierro y su formato fue vendido en varios países de América y Europa. En 2005 fue productor general de “Decisión Limite”, por América conducido por Horacio Cabak. En 2007 fue productor general y asesor en el área de Noticias de la TVP. En 2008 produjo integralmente un magazine de noticias que conducían Maby Wells y Macu Mazzuca por Canal 9. En 2010 fue subgerente de noticias de Canal 9 y en 2016, Director de Comunicación del Ministerio de Seguridad de la Provincia de Buenos Aires."),n.createElement("a",{target:"_blank",href:"https://ar.linkedin.com/in/oscarobregon"}," ",n.createElement("img",{className:"w-8 my-5",src:"assets/images/logo-linkedin.png",alt:""})))),n.createElement("div",{"data-aos":"fade-up",className:"grid md:grid-cols-4"},n.createElement("img",{className:"rounded-full  px-5 pb-5",src:"https://upload.wikimedia.org/wikipedia/commons/6/6c/Jeff_Bezos_at_Amazon_Spheres_Grand_Opening_in_Seattle_-_2018_%2839074799225%29_%28cropped%29.jpg",alt:""}),n.createElement("div",{className:"col-span-3"},n.createElement("h4",{className:"text-gray-900 bg-gray-50 inline text-xl"},"Martin Bello"),n.createElement("p",{className:"mt-10"},"Estudió Relaciones del Trabajo en la Universidad de Buenos Aires durante cuatro años, hasta que el periodismo se impuso al mundo laboral y sus conflictos. Es egresado de la Escuela de Periodismo TEA. Su experiencia profesional le ha permitido obtener sólidos conocimientos en comunicación. En 2005 comenzó su recorrido como asesor de prensa y comunicación en el sector público. Cumplió funciones en el Gobierno de la Ciudad Autónoma de Buenos Aires, en la Legislatura porteña, municipios y organismos descentralizados. En 2016 fue designado Director General de Análisis Informativo del Ministerio de Seguridad de la Provincia de Buenos Aires, cargo que ocupó durante los cuatro años de gestión."),n.createElement("a",{target:"_blank",href:"https://ar.linkedin.com/in/oscarobregon"}," ",n.createElement("img",{className:"w-8 my-5",src:"assets/images/logo-linkedin.png",alt:""}))))),h=()=>{const e=[{video:"https://www.youtube.com/embed/INZBjxEETZ8",title:"1",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamu  interdum mauris sed mauris molestie, vel tempor dui ornare. Fusce gravida convallis ligula, nec tempor nunc. Donec auctor,velit eu sodales porttitor, ipsum nulla luctus turpis, a temporurna augue nec diam. Maecenas id sodales erat, in dictum metus.Quisque dictum porttitor risus, at vehicula mauris molestievitae. Duis fringilla laoreet massa. Ut elementum nibh dui, ac rhoncus lacus tincidunt a. Vivamus gravida sapien orci,    pulvinar ex dignissim eget."},{video:"https://www.youtube.com/embed/fK6Thie-BRI",title:"2",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamu  interdum mauris sed mauris molestie, vel tempor dui ornare. Fusce gravida convallis ligula, nec tempor nunc. Donec auctor,velit eu sodales porttitor, ipsum nulla luctus turpis, a temporurna augue nec diam. Maecenas id sodales erat, in dictum metus.Quisque dictum porttitor risus, at vehicula mauris molestievitae. Duis fringilla laoreet massa. Ut elementum nibh dui, ac rhoncus lacus tincidunt a. Vivamus gravida sapien orci,    pulvinar ex dignissim eget."},{video:"https://www.youtube.com/embed/X5jelHuzlH0",title:"3",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamu  interdum mauris sed mauris molestie, vel tempor dui ornare. Fusce gravida convallis ligula, nec tempor nunc. Donec auctor,velit eu sodales porttitor, ipsum nulla luctus turpis, a temporurna augue nec diam. Maecenas id sodales erat, in dictum metus.Quisque dictum porttitor risus, at vehicula mauris molestievitae. Duis fringilla laoreet massa. Ut elementum nibh dui, ac rhoncus lacus tincidunt a. Vivamus gravida sapien orci,    pulvinar ex dignissim eget."},{video:"https://www.youtube.com/embed/4rczwreN_9E",title:"4",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamu  interdum mauris sed mauris molestie, vel tempor dui ornare. Fusce gravida convallis ligula, nec tempor nunc. Donec auctor,velit eu sodales porttitor, ipsum nulla luctus turpis, a temporurna augue nec diam. Maecenas id sodales erat, in dictum metus.Quisque dictum porttitor risus, at vehicula mauris molestievitae. Duis fringilla laoreet massa. Ut elementum nibh dui, ac rhoncus lacus tincidunt a. Vivamus gravida sapien orci,    pulvinar ex dignissim eget."},{video:"https://www.youtube.com/embed/aho_Dtmckm0",title:"5",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamu  interdum mauris sed mauris molestie, vel tempor dui ornare. Fusce gravida convallis ligula, nec tempor nunc. Donec auctor,velit eu sodales porttitor, ipsum nulla luctus turpis, a temporurna augue nec diam. Maecenas id sodales erat, in dictum metus.Quisque dictum porttitor risus, at vehicula mauris molestievitae. Duis fringilla laoreet massa. Ut elementum nibh dui, ac rhoncus lacus tincidunt a. Vivamus gravida sapien orci,    pulvinar ex dignissim eget."},{video:"https://www.youtube.com/embed/tpgYm7IiSDM",title:"6",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamu  interdum mauris sed mauris molestie, vel tempor dui ornare. Fusce gravida convallis ligula, nec tempor nunc. Donec auctor,velit eu sodales porttitor, ipsum nulla luctus turpis, a temporurna augue nec diam. Maecenas id sodales erat, in dictum metus.Quisque dictum porttitor risus, at vehicula mauris molestievitae. Duis fringilla laoreet massa. Ut elementum nibh dui, ac rhoncus lacus tincidunt a. Vivamus gravida sapien orci,    pulvinar ex dignissim eget."}],[a,t]=n.useState(0),i=e.length;return n.createElement("section",{className:"relative flex justify-center items-center"},n.createElement("div",{onClick:()=>{t(0===a?e.length-1:a-1)},className:"absolute left-12 text-4xl  top-12 text-white z-10 cursor-pointer select-none"},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-7 w-7",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"}))),n.createElement("div",{className:"absolute right-12 top-12 text-4xl text-white z-10 cursor-pointer select-none",onClick:()=>{t(a===i-1?0:a+1)}},n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-7 w-7",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},n.createElement("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"}))),e.map(((e,t)=>n.createElement("div",{className:"  "+(t===a?"slide active":"slide"),key:t}," ",t===a&&n.createElement("div",null,n.createElement("div",{className:"flex justify-end mx-10"},n.createElement("iframe",{className:"mx-10",width:"250",height:"150",src:e.video,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),n.createElement("div",{className:"text-left mx-20"},n.createElement("h4",{className:"text-xl  text-gray-900 bg-gray-50 inline uppercase"},e.title),n.createElement("p",{className:"text-xs"},e.description)))))))},y=()=>n.createElement("div",{id:"jobs",className:"my-60 container mx-auto w-2/3"},n.createElement("h3",{"data-aos":"fade-up",className:"text-center my-20 text-gray-50 text-xl "},"Proyectos"),n.createElement("div",{className:" text-gray-200 flex justify-center grid md:grid-cols-2 "},n.createElement("div",{"data-aos":"fade-up",className:"md:hidden block"},n.createElement(h,null)),n.createElement("div",{"data-aos":"fade-up",className:"md:grid hidden border-r-8 flex justify-end rounded-lg grid grid-rows-4"},n.createElement("div",{"data-aos":"fade-up"}," ",n.createElement("div",{className:"flex justify-end mx-10"}," ",n.createElement("iframe",{className:"mx-10",width:"500",height:"300",src:"https://www.youtube.com/embed/INZBjxEETZ8",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),n.createElement("div",{className:"text-right mx-20"},n.createElement("h4",{className:"text-3xl text-gray-900 bg-gray-50 inline uppercase"}," ","Lorem ipsum dolor sit amet"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum mauris sed mauris molestie, vel tempor dui ornare. Fusce gravida convallis ligula, nec tempor nunc. Donec auctor, velit eu sodales porttitor, ipsum nulla luctus turpis, a tempor urna augue nec diam. Maecenas id sodales erat, in dictum metus. Quisque dictum porttitor risus, at vehicula mauris molestie vitae. Duis fringilla laoreet massa. Ut elementum nibh dui, ac rhoncus lacus tincidunt a. Vivamus gravida sapien orci, a pulvinar ex dignissim eget."))),n.createElement("div",{"data-aos":"fade-up",className:"row-start-3"}," ",n.createElement("div",{className:"flex  justify-end mx-10"}," ",n.createElement("iframe",{"data-aos":"fade-up",className:"mx-10",width:"500",height:"300",src:"https://www.youtube.com/embed/fK6Thie-BRI",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),n.createElement("div",{className:"text-right mx-20"},n.createElement("h4",{className:"text-3xl text-gray-900 bg-gray-50 inline uppercase"}," ","Lorem ipsum dolor sit amet"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum mauris sed mauris molestie, vel tempor dui ornare. Fusce gravida convallis ligula, nec tempor nunc. Donec auctor, velit eu sodales porttitor, ipsum nulla luctus turpis, a tempor urna augue nec diam. Maecenas id sodales erat, in dictum metus. Quisque dictum porttitor risus, at vehicula mauris molestie vitae. Duis fringilla laoreet massa. Ut elementum nibh dui, ac rhoncus lacus tincidunt a. Vivamus gravida sapien orci, a pulvinar ex dignissim eget.")))),n.createElement("div",{className:"md:grid hidden border-l-8 flex justify-start rounded-lg  grid grid-rows-4","data-aos":"fade-up"},n.createElement("div",{"data-aos":"fade-up",className:"row-start-2"}," ",n.createElement("div",{className:"flex justify-start mx-10"}," ",n.createElement("iframe",{className:"mx-10",width:"500",height:"300",src:"https://www.youtube.com/embed/X5jelHuzlH0",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),n.createElement("div",{className:"text-left mx-20"},n.createElement("h4",{className:"text-3xl text-gray-900 bg-gray-50 inline uppercase"}," ","Lorem ipsum dolor sit amet"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum mauris sed mauris molestie, vel tempor dui ornare. Fusce gravida convallis ligula, nec tempor nunc. Donec auctor, velit eu sodales porttitor, ipsum nulla luctus turpis, a tempor urna augue nec diam. Maecenas id sodales erat, in dictum metus. Quisque dictum porttitor risus, at vehicula mauris molestie vitae. Duis fringilla laoreet massa. Ut elementum nibh dui, ac rhoncus lacus tincidunt a. Vivamus gravida sapien orci, a pulvinar ex dignissim eget."))),n.createElement("div",{"data-aos":"fade-up",className:"row-start-4"}," ",n.createElement("div",{className:"flex justify-start mx-10"}," ",n.createElement("iframe",{className:"mx-10",width:"500",height:"300",src:"https://www.youtube.com/embed/4rczwreN_9E",title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:!0})),n.createElement("div",{className:"text-left mx-20"},n.createElement("h4",{className:"text-3xl text-gray-900 bg-gray-50 inline uppercase"}," ","Lorem ipsum dolor sit amet"),n.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus interdum mauris sed mauris molestie, vel tempor dui ornare. Fusce gravida convallis ligula, nec tempor nunc. Donec auctor, velit eu sodales porttitor, ipsum nulla luctus turpis, a tempor urna augue nec diam. Maecenas id sodales erat, in dictum metus. Quisque dictum porttitor risus, at vehicula mauris molestie vitae. Duis fringilla laoreet massa. Ut elementum nibh dui, ac rhoncus lacus tincidunt a. Vivamus gravida sapien orci, a pulvinar ex dignissim eget.")))))),b=()=>{const[e,a]=n.useState(""),t=n.useRef();return n.createElement("div",{id:"contact","data-aos":"fade-up",className:"h-screen flex justify-center  flex-col"},n.createElement("h3",{className:"text-center my-5 text-gray-50 text-xl "},"Contacto"),n.createElement("form",{onSubmit:e=>(e=>{e.preventDefault(),t.current.classList.remove("hidden"),console.log(e.target),fetch("https://formsubmit.co/ajax/tomobre@gmail.com",{method:"POST",body:new FormData(e.target)}).then((e=>e.ok?e.json():Promise.reject(e))).then((e=>{t.current.classList.add("hidden"),a("Los datos han sido enviados")})).catch((e=>{t.current.classList.add("hidden"),a("Ocurrio un error al enviar los datos")})).finally((()=>{setTimeout((()=>{a("")}),5e3)}))})(e),className:"container mx-auto  text-center w-2/3 md:w-1/3",method:"post",action:"#"},n.createElement("input",{className:"w-full  shadow my-5 p-2 rounded-xl",placeholder:"Nombre",type:"text",name:"nombre"}),n.createElement("br",null),n.createElement("input",{className:" w-full  shadow my-5 p-2  rounded-xl",placeholder:"Email",type:"text",name:"email"}),n.createElement("br",null),n.createElement("input",{className:" w-full  shadow my-5 p-2  rounded-xl",placeholder:"Asunto",type:"text",name:"asunto"}),n.createElement("br",null),n.createElement("textarea",{rows:"10",className:" w-full   shadow my-5 p-2  rounded-xl ",placeholder:"Mensaje...",name:"mensaje"}),n.createElement("br",null),n.createElement("div",{className:"flex justify-center my-5"},n.createElement("svg",{ref:t,className:"hidden ",width:"45",height:"45",viewBox:"0 0 45 45",xmlns:"http://www.w3.org/2000/svg",stroke:"#fff"},n.createElement("g",{fill:"none","fill-rule":"evenodd",transform:"translate(1 1)","stroke-width":"2"},n.createElement("circle",{cx:"22",cy:"22",r:"6","stroke-opacity":"0"},n.createElement("animate",{attributeName:"r",begin:"1.5s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"stroke-opacity",begin:"1.5s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"stroke-width",begin:"1.5s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),n.createElement("circle",{cx:"22",cy:"22",r:"6","stroke-opacity":"0"},n.createElement("animate",{attributeName:"r",begin:"3s",dur:"3s",values:"6;22",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"stroke-opacity",begin:"3s",dur:"3s",values:"1;0",calcMode:"linear",repeatCount:"indefinite"}),n.createElement("animate",{attributeName:"stroke-width",begin:"3s",dur:"3s",values:"2;0",calcMode:"linear",repeatCount:"indefinite"})),n.createElement("circle",{cx:"22",cy:"22",r:"8"},n.createElement("animate",{attributeName:"r",begin:"0s",dur:"1.5s",values:"6;1;2;3;4;5;6",calcMode:"linear",repeatCount:"indefinite"}))))),n.createElement("div",{className:"text-gray-50 text-center my-5"},e&&e),n.createElement("button",{className:"text-xl text-gray-50"},"Enviar")))},x=()=>n.createElement("div",{id:"home",className:"h-screen text-gray-200 flex justify-center   flex-col items-center"},n.createElement("img",{src:"assets/images/logo-obregon-bello.png",alt:"ocho"})),w=()=>n.createElement("div",{"data-aos":"fade-up",className:"h-screen text-gray-200 container mx-auto  text-right w-1/2 pt-10 "},n.createElement("p",null,"El signo de la habilidad ejecutiva, la gestión, el sacrificio y el poder."),n.createElement("p",null,"El número de las habilidades políticas. "),n.createElement("p",null," ","La cifra de aquellos que trabajan incansablemente para alcanzar el reconocimiento."));function N(){const e=n.useRef(),a=n.useRef(),t=n.useRef(),i=n.useRef(),s=n.useRef(),r=n.useRef(),{scrollYProgress:l}=o(),[d,p]=n.useState({home:null,eight:null,team:null,jobs:null,services:null,contact:null});console.log(l),n.useEffect((()=>{const n=e.current.getBoundingClientRect().top,l=a.current.getBoundingClientRect().top-200,o=t.current.getBoundingClientRect().top-270,c=i.current.getBoundingClientRect().top,m=r.current.getBoundingClientRect().top-270,u=s.current.getBoundingClientRect().top-270;console.log(o),p({home:n,eight:l,team:o,jobs:m,services:u,contact:c})}),[]),n.useEffect((()=>{c.init({duration:2e3})}),[]);const g=m(l,[0,.01,.03],[1,1,.5]),h=m(l,[0,.01,.03,.07,.15,.25,.31,.5,.58,.7,.91],[300,300,d.eight,d.eight,d.team,d.team,d.services,d.services,d.jobs,d.jobs,d.contact]),N=m(l,[0,.01,.03,.05,.07,.15],[420,420,450,450,450,200]),j=m(l,[0,.01,.015,.025,.03,.05,.07,.075,.145,.15,.2,.255,.305,.31,.5,.505,.575,.58,.7,.705,.905,.91],[1,1,.2,.2,1,1,1,.2,.2,1,1,.2,.2,1,1,.2,.2,1,1,.2,.2,1]),{innerWidth:k}=window,M=k/2;console.log(k);const C=d.eight+100;d.team,d.jobs,d.services;const L=m(l,[0,.003,.008],[180,180,C]),_=m(l,[0,.003,.008],[M,M,M+10]);return m(l,[0,.001,.0015,.065,.07],[1,1,.2,.2,1]),n.createElement("div",{className:"font-mono text-sm"},n.createElement(v,null),n.createElement("div",{className:"maxWidth"}," ",n.createElement("div",null," ",n.createElement("div",null," ",n.createElement(u.div,{style:{scale:g,y:h,x:N,opacity:j,transformOrigin:"center center initial"}},n.createElement("div",null," ",n.createElement("img",{id:"eight",className:"absolute hidden md:block ",src:"assets/images/logo-ocho.png",alt:"ocho"})))),n.createElement("div",null," ",n.createElement(u.div,{style:{y:L,x:_,transformOrigin:"center center initial"}},n.createElement("div",null," ",n.createElement("img",{id:"eight",className:"absolute md:hidden w-16",src:"assets/images/logo-ocho.png",alt:"ocho"}))))),n.createElement("div",{ref:e},n.createElement(x,null)),n.createElement("div",{ref:a},n.createElement(w,null)),n.createElement("div",{ref:t},n.createElement(f,null)),n.createElement("div",{ref:s},n.createElement(E,null)),n.createElement("div",{ref:r}," ",n.createElement(y,null)),n.createElement("div",{ref:i}," ",n.createElement(b,null))))}d.render(n.createElement(n.StrictMode,null,n.createElement(p,null,n.createElement(N,null))),document.getElementById("root"));

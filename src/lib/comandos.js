export const comandos = [
  {
    name: "Enviarme un mail",
    description: "Enviar un email a facundojarma@gmail.com",
    category: "Acciones",
    action: () => {
      window.open("mailto:facundojarma@gmail.com");
    },
  },
  {
    name: "Abrir este proyecto",
    description: "Abrir el repositorio de este portafolio.",
    category: "Acciones",
    action: () => {
      window.open("https://github.com/facujarma/Portafolio-con-Astro");
    },
  },
  {
    name: "Ir a proyectos",
    description: "Ir a la sección de proyectos.",
    category: "Secciones",
    action: () => {
      location.href = "/projectos";
    },
  },
  {
    name: "Ver los certificados",
    description: "Ir a la sección de certificados.",
    category: "Secciones",
    action: () => {
      location.href = "/certificados";
    },
  },
  {
    name: "Github",
    description: "Abrir el github de facujarma.",
    category: "Links",
    action: () => {
      window.open("https://github.com/facujarma");
    },
  },
  {
    name: "Instagram",
    description: "Abrir el instagram de facujarma.",
    category: "Links",
    action: () => {
      window.open("https://instagram.com/facujarma_");
    },
  },
  {
    name: "Twitter",
    description: "Abrir el twitter de facujarma.",
    category: "Links",
    action: () => {
      window.open("https://twitter.com/facujarma");
    },
  },
  {
    name: "Copiar URL",
    description: "Copiar la URL de mi portafolio para poder pegarla.",
    category: "Extras",
    action: () => {
      navigator.clipboard.writeText(location.origin + location.pathname);
    },
  },
];

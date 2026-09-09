export const perfil = {
    nombre: "Quevedo Candela",
    rol: "Desarrolladora de Software",
    tagline: "Transformo necesidades complejas en software eficiente, limpio y escalable, conectando una arquitectura robusta en el backend con una experiencia fluida e intuitiva en el frontend.",
    ubicacion: "Argentina",
    email: "quevedocandela05@gmail.com",
    cvUrl: "/cv.pdf",
    github: "github.com/quevedocandela",
    linkedin: "http://linkedin.com/in/candela-quevedo05",
    fotoUrl: "",
};

export const sobreMi = {
    parrafos: [
    "Soy estudiante avanzada de la Tecnicatura Superior en Desarrollo de Software (Instituto N°125, Rojas) y de la Diplomatura en Programación y Recolección de Datos de la UBA.",
    "Combino conocimientos sólidos en desarrollo de software con habilidades de análisis de datos. Me caracterizo por la curiosidad constante y la perseverancia frente a problemas técnicos complejos.",
    "Estoy buscando mi primera experiencia profesional en tecnología para aplicar y seguir expandiendo lo que aprendí.",
    ],

    datos: [
        { label: "Enfoque", valor:"Desarrollo web & datos" },
        { label:"Estudiando", valor: "Tecnicatura superior en desarrollo de software." },
        { label: "Disponibilidad", valor: "Full-time"},
    ],
};

export const skills = [
    { categoria: "Lenguajes", items:["Python", "JavaScript", "Java", "HTML5", "CSS3","C++ (básico)"] },
    { categoria: "Bases de datos", items: ["SQL"] },
    { categoria: "Herramientas", items: ["Git", "GitHub", "VS code"] },
    { categoria: "Paradigmas & metodologías", items: ["POO", "Desarrollo web forntend", "Agile / Scrum"] },
];

export const proyectos = [
    {
        nombre: "Crimen pasional y femicidio",
        descripcion: "El presente trabajo tiene como objetivo profundizar en los hechos ocurridos en la ciudad de Rojas, centrándose en casos que impulsaron nuevos debates y un crecimiento en la lucha colectiva contra los femicidios.",
        stack: ["HTML", "CSS", "JavaScript"],
        repoUrl: "", //cuando termine de pasarlo a git va el link aca 
        demoUrl: "https://crimenpasionalyfemicidio.netlify.app/",
        destacado: true,
    },
    //si tengo otro proyecto va aca
];

export const experiencia = [
    {
        tipo: "Educación",
        titulo: "Tecnicatura Superior en Desarrollo de Software",
        institucion: "Instituto N°125 - Rojas, Buenos Aires",
        periodo: "2024 - 2026 (actualemnte cursando el último año",
        descripcion: "Programación orientada a objetos, bases de datos, desarrollo web y metodologías ágiles.",
    },

    {
        tipo: "Educación",
        titulo: "Diplomatura en Programación y Recolección de Datos",
        institucion: "UBA - Plan Puentes",
        periodo: "2025 - 2026 (fianlizada)",
        descripcion: "Recolección, procesamiento y análisis de datos con python.",
    },

    {
        tipo: "Educación",
        titulo: "Bachiller en Comunicación",
        institucion: "ENSNA N°30 - Rojas, Buenos Aires",
        periodo: "Egresada en 2022",
    },
];

export const navItems = [
  { href: "#sobre-mi", label: "Sobre mí", accent: "coral" },
  { href: "#proyectos", label: "Proyectos", accent: "cyan" },
  { href: "#skills", label: "Skills", accent: "lime" },
  { href: "#experiencia", label: "Experiencia", accent: "violet" },
  { href: "#contacto", label: "Contacto", accent: "coral" },
];
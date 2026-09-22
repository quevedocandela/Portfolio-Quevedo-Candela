export const perfil = {
    nombre: "Quevedo Candela",
    rol: "Desarrolladora de Software",
    tagline: "", 
    ubicacion: "Argentina",
    email: "quevedocandela05@gmail.com",
    cvUrl: "public/CVquevedo.pdf",
    github: "https://github.com/quevedocandela",
    linkedin: "http://www.linkedin.com/in/candela-quevedo05",
    fotoUrl: "",
};

export const sobreMi = {
    parrafos: [
    "Antes de los datos y el código, siempre fui de tener la necesidad de entender el patrón detrás de las cosas — por eso este portfolio tiene forma de tirada de tarot.",
    "Me interesa particularmente esa zona donde el desarrollo web y el análisis de datos se cruzan: construir algo que además de funcionar, cuente una historia.",
    "Estoy buscando mi primera experiencia profesional en tecnología. Sé que recién estoy empezando, pero también sé que la curiosidad y la cabeza dura para no rendirme ante un bug son mías desde mucho antes de elegir esta carrera.",
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
    },
    //si tengo otro proyecto va aca
    {
        nombre: "Diseño Web",
        descripcion: "Este trabajo se hizo a modo de presentacion para una de las materias que curse durante el segundo año de mi carrera.",
        stack: ["HTML", "CSS", "JavaScript"],
        repoUrl: "", //cuando termine de pasarlo a git va el link aca 
        demoUrl: "http://diseniowebquevedo.netlify.app",
    },
];

export const experiencia = [
    {
        tipo: "Educación",
        titulo: "Tecnicatura Superior en Desarrollo de Software",
        institucion: "Instituto N°125 - Rojas, Buenos Aires",
        periodo: "2024 - 2026 (en curso, 3er año)",
        descripcion: "De aca me llevo sobre todo, la costumbre de romper un problema grande en partes chicas antes de empezar a codear.",
    },

    {
        tipo: "Educación",
        titulo: "Diplomatura en Programación y Recolección de Datos",
        institucion: "UBA - Plan Puentes",
        periodo: "2025 - 2026 (fianlizada)",
        descripcion: "Fue la primera vez que vi con claridad cómo el código puede convertir números en una historia con sentido",
    },

    {
        tipo: "Educación",
        titulo: "Bachiller en Comunicación",
        institucion: "ENSNA N°30 - Rojas, Buenos Aires",
        periodo: "Egresada en 2022",
        //descripcion: "No tiene que ver directamente con programación, pero fue ahí donde aprendí a comunicar ideas complejas de manera simple."
    },
];

export const navItems = [
  { href: "#sobre-mi", label: "Sobre mí", accent: "coral" },
  { href: "#proyectos", label: "Proyectos", accent: "cyan" },
  { href: "#skills", label: "Skills", accent: "lime" },
  { href: "#experiencia", label: "Experiencia", accent: "violet" },
  { href: "#contacto", label: "Contacto", accent: "coral" },
];
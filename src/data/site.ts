export const perfil = {
    nombre: "Quevedo Candela",
    rol: "Desarrolladora de Software",
    tagline: "'exploicar la base de la carrera'",
    ubiccion: "Argentina",
    email: "quevedocandela05@gmail.com",
    cvUrl: "/cv.pdf",
    github: "github.com/quevedocandela",
    linkedin: "http://linkedin.com/in/candela-quevedo05",
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
        {label: "Disponibilidad", valor: "Full-time"},
    ],
};

export const skills = [
    { categoria: "Lenguajes", items:["Python", "JavaScript", "Java", "HTML5", "CSS3","C++ (básico)"] },
    { categoria: "Bases de datos", items: ["SQL"] },
    { categoria: "Herramientas", items: ["Git", "GitHub", "VS code"] },
    { categoria: "Paradigmas & metodologías", items: ["POO", "Desarrollo web forntend", "Agile / Scrum"] },
];

export const proyector = [
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
    { href: "#sobre-mi", label: "sobre-mi.tsx", accent: "coral" },
    { href: "#proyectos", label: "proyectos.tsx", accent: "cyan" },
    { href: "#skills", label: "skills.json", accent: "lime" },
    { href: "#experiencia", label: "experiencia.md", accent: "violet" },
    { href: "#contacto", label: "contacto.sh", accent: "coral"},
];
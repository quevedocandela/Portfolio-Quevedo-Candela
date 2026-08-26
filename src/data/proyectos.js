// src/data/proyectos.js
//
// Para agregar un proyecto nuevo: copiá un objeto, completá los campos
// y listo, aparece automáticamente en la sección "proyectos.js" de la web.
//
// estado: "terminado" | "en-construccion" | "proximamente"

export const proyectos = [
  {
    nombre: "analisis-asistencia-escolar",
    estado: "en-construccion",
    descripcion:
      "Procesamiento y visualización de datos de asistencia escolar con Python y pandas.",
    stack: ["Python", "Pandas", "SQL"],
    repo: "https://github.com/quevedocandela",
    demo: null,
  },
  {
    nombre: "gestor-tareas-cli",
    estado: "en-construccion",
    descripcion:
      "Aplicación de consola para organizar tareas, aplicando POO en Java.",
    stack: ["Java", "POO"],
    repo: "https://github.com/quevedocandela",
    demo: null,
  },
  {
    nombre: "landing-personal",
    estado: "proximamente",
    descripcion: "Sitio estático con HTML, CSS y JavaScript puro.",
    stack: ["HTML5", "CSS3", "JavaScript"],
    repo: null,
    demo: null,
  },
];

import { motion } from "framer-motion";

import matematicas from "../assets/matematicas.jpeg";
import lengua from "../assets/lengua_castellana.avif";
import ciencias from "../assets/ciencias.jpeg";
import sociales from "../assets/sociales.jpg";
import artes from "../assets/artes.jpeg";
import fisica from "../assets/fisica.avif";

import "./css/Areas.css";

function Areas() {
  const areas = [
    {
      nombre: "Matemáticas y Geometría",
      imagen: matematicas,
    },
    {
      nombre: "Lengua Castellana y Plan Lector",
      imagen: lengua,
    },
    {
      nombre: "Ciencias Naturales y Educación Ambiental",
      imagen: ciencias,
    },
    {
      nombre: "Ciencias Sociales y Cátedra para la Paz",
      imagen: sociales,
    },
    {
      nombre: "Inglés",
      imagen: lengua,
    },
    {
      nombre: "Artes",
      imagen: artes,
    },
    {
      nombre: "Educación Física",
      imagen: fisica,
    },
    {
      nombre: "Danzas",
      imagen: artes,
    },
    {
      nombre: "Ética",
      imagen: sociales,
    },
    {
      nombre: "Religión",
      imagen: sociales,
    },
    {
      nombre: "Emprendimiento",
      imagen: matematicas,
    },
  ];

  const servicios = [
    {
      nombre: "Clases Extracurriculares en Ballet y Taekwondo",
      imagen: fisica,
    },
    {
      nombre: "Servicio de Almuerzo",
      imagen: ciencias,
    },
    {
      nombre: "Cooperativa",
      imagen: sociales,
    },
    {
      nombre: "Refuerzos",
      imagen: lengua,
    },
    {
      nombre: "Jornada Extendida",
      imagen: artes,
    },
  ];

  return (
    <section className="formacion" id="areas">

      {/* =========================
          ÁREAS DE FORMACIÓN
      ========================= */}

      <motion.div
        className="formacion-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Áreas de Formación</h2>

        <p>
          Desarrollamos habilidades académicas, sociales y humanas
          a través de una formación integral que fortalece el
          aprendizaje y el crecimiento personal.
        </p>
      </motion.div>

      <div className="areas-grid">
        {areas.map((area, index) => (
          <motion.div
            key={index}
            className="area-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={area.imagen}
              alt={area.nombre}
            />

            <div className="area-overlay">
              <h3>{area.nombre}</h3>
            </div>
          </motion.div>
        ))}
      </div>


      {/* =========================
          SERVICIOS COMPLEMENTARIOS
      ========================= */}

      <motion.div
        className="formacion-header servicios-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Servicios Complementarios</h2>

        <p>
          Contamos con servicios y actividades complementarias
          que contribuyen al bienestar, desarrollo integral y
          aprovechamiento del tiempo de nuestros estudiantes.
        </p>
      </motion.div>

      <div className="areas-grid servicios-grid">
        {servicios.map((servicio, index) => (
          <motion.div
            key={index}
            className="area-card"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <img
              src={servicio.imagen}
              alt={servicio.nombre}
            />

            <div className="area-overlay">
              <h3>{servicio.nombre}</h3>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Areas;
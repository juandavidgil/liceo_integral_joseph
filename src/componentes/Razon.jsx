import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import {
  FaUserGraduate,
  FaHandsHelping,
  FaLightbulb,
  FaBasketballBall,
} from "react-icons/fa";

import estudiantes from "../assets/why_us.jpeg";
import "./css/Razon.css";

function Contador({ valor, duracion = 2000 }) {
  const [contador, setContador] = useState(0);

  useEffect(() => {
    let inicio = null;

    const animar = (timestamp) => {
      if (!inicio) inicio = timestamp;

      const progreso = timestamp - inicio;
      const porcentaje = Math.min(progreso / duracion, 1);

      // Easing para que el contador desacelere al final
      const easeOut = 1 - Math.pow(1 - porcentaje, 3);

      setContador(Math.floor(easeOut * valor));

      if (porcentaje < 1) {
        requestAnimationFrame(animar);
      }
    };

    requestAnimationFrame(animar);
  }, [valor, duracion]);

  return <>{contador}+</>;
}

function Razon() {
  const razones = [
    {
      icon: <FaUserGraduate />,
      title: "Formación en valores",
    },
    {
      icon: <FaHandsHelping />,
      title: "Acompañamiento personalizado",
    },
    {
      icon: <FaLightbulb />,
      title: "Innovación educativa",
    },
    {
      icon: <FaBasketballBall />,
      title: "Actividades integrales",
    },
  ];

  return (
    <section className="razon" id="razon">

      <motion.div
        className="razon-imagen"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <img src={estudiantes} alt="Estudiantes" />
      </motion.div>

      <div className="razon-contenido">

        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          ¿Por qué elegirnos?
        </motion.h2>

        <div className="razones-grid">
          {razones.map((item, index) => (
            <motion.div
              key={index}
              className="razon-card"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.15 }}
              whileHover={{
                y: -8,
              }}
            >
              <div className="icono">
                {item.icon}
              </div>

              <h4>{item.title}</h4>
            </motion.div>
          ))}
        </div>

        <div className="estadisticas">

          <motion.div
            className="stat-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>
              <Contador valor={500} />
            </h3>
            <p>Estudiantes activos</p>
          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>
              <Contador valor={30} />
            </h3>
            <p>Docentes comprometidos</p>
          </motion.div>

          <motion.div
            className="stat-card"
            whileHover={{ scale: 1.05 }}
          >
            <h3>
              <Contador valor={15} />
            </h3>
            <p>Años formando estudiantes</p>
          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default Razon;
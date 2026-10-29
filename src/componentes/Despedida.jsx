
import Despedida1 from "../assets/Despedida1.jpeg";
import Despedida2 from "../assets/Despedida2.jpeg";
import Despedida3 from "../assets/Despedida3.jpeg";
import Despedida4 from "../assets/Despedida4.jpeg";
import Despedida5 from "../assets/Despedida5.jpeg";

import "./css/Despedida.css";
import { motion } from "framer-motion";

function Despedida() {
  const imagenes = [
    {
      src: Despedida1,
      numero: "01",
      titulo: "Un capítulo inolvidable",
      categoria: "NUESTROS RECUERDOS",
    },
    {
      src: Despedida2,
      numero: "02",
      titulo: "Amistades para siempre",
      categoria: "LAZOS QUE PERDURAN",
    },
    {
      src: Despedida3,
      numero: "03",
      titulo: "Sueños por cumplir",
      categoria: "NUEVOS COMIENZOS",
    },
    {
      src: Despedida4,
      numero: "04",
      titulo: "Momentos que nos unen",
      categoria: "UNA HISTORIA COMPARTIDA",
    },
    {
      src: Despedida5,
      numero: "05",
      titulo: "Hasta siempre, quinto",
      categoria: "GENERACIÓN 2026",
    },
  ];

  return (
    <section className="despedida" id="despedida">
      <div className="despedida-container">

        <motion.header
          className="despedida-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
        >
          <div className="despedida-label">
            <span className="despedida-label-line" />
            GENERACIÓN QUE DEJA HUELLA
            <span className="despedida-label-line" />
          </div>

          <h2>
            Despedida
            <span> grado 5</span>
          </h2>

          <div className="despedida-year">
            <span />
            <strong>2026</strong>
            <span />
          </div>

          <p>
            Hoy cerramos una etapa llena de aprendizajes, risas y
            amistades. Nos llevamos recuerdos que vivirán para siempre
            y la ilusión de comenzar nuevas aventuras.
          </p>

          <div className="despedida-separator">
            <span />
            <i />
            <span />
          </div>
        </motion.header>

        <motion.div
          className="despedida-message"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <div className="despedida-message-symbol">✦</div>

          <div className="despedida-message-content">
            <span>UN ADIÓS LLENO DE GRATITUD</span>
            <h3>Los mejores recuerdos apenas comienzan.</h3>
          </div>

          <div className="despedida-message-year">2026</div>
        </motion.div>

        <div className="despedida-gallery">
          {imagenes.map((imagen, index) => (
            <motion.article
              key={imagen.numero}
              className={`despedida-card despedida-card-${index + 1}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: index * 0.1,
              }}
            >
              <img
                src={imagen.src}
                alt={imagen.titulo}
                loading={index === 0 ? "eager" : "lazy"}
              />

              <div className="despedida-card-overlay">
                <span className="despedida-card-number">
                  {imagen.numero}
                </span>

                <div className="despedida-card-text">
                  <span>{imagen.categoria}</span>
                  <h3>{imagen.titulo}</h3>
                </div>

                <span className="despedida-card-star">✦</span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.footer
          className="despedida-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="despedida-footer-decoration">✦</span>

          <p>
            UNA ETAPA TERMINA,
            <span> MIL SUEÑOS COMIENZAN.</span>
          </p>

          <span className="despedida-footer-caption">
            PROMOCIÓN GRADO 5 · 2026
          </span>
        </motion.footer>

      </div>
    </section>
  );
}

export default Despedida;

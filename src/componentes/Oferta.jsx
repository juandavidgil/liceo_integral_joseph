import { motion } from "framer-motion";

import oferta from "../assets/formation.jpeg";
import oferta_2 from "../assets/gallery-2.jpeg"

import "./css/Oferta.css";

function Oferta() {
  return (
    <section className="oferta" id="oferta">

      {/* =========================
          TÍTULO
      ========================= */}

      <motion.div
        className="oferta-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Oferta Académica</h2>

        <p>
          Acompañamos el proceso educativo de nuestros estudiantes
          desde sus primeros años hasta la educación primaria,
          brindando una formación integral en cada etapa.
        </p>
      </motion.div>


      {/* =========================
          PREESCOLAR
      ========================= */}

      <div className="oferta-container">

        <motion.div
          className="oferta-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={oferta_2}
            alt="Educación preescolar"
          />
        </motion.div>

        <motion.div
          className="oferta-content"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge">Preescolar</span>

          <h3>Primeros pasos para grandes aprendizajes</h3>

          <p>
            Brindamos una educación inicial que favorece el desarrollo
            integral de los niños y niñas, fortaleciendo sus habilidades
            cognitivas, sociales, emocionales y comunicativas mediante
            experiencias de aprendizaje significativas.
          </p>

          <div className="beneficios">
            <div>✓ Desarrollo de habilidades</div>
            <div>✓ Formación en valores</div>
            <div>✓ Aprendizaje a través del juego</div>
            <div>✓ Desarrollo socioemocional</div>
          </div>

          <button>
            Conocer más
          </button>
        </motion.div>

      </div>


      {/* =========================
          PRIMARIA
      ========================= */}

      <div className="oferta-container oferta-container-reverse">

        <motion.div
          className="oferta-image"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img
            src={oferta}
            alt="Educación primaria"
          />
        </motion.div>

        <motion.div
          className="oferta-content"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="badge">Primaria</span>

          <h3>Formación Integral</h3>

          <p>
            Brindamos una formación integral para niños y niñas
            desde primero hasta quinto grado, fortaleciendo sus
            conocimientos académicos, habilidades sociales y
            valores humanos en un ambiente seguro, inclusivo y
            estimulante.
          </p>

          <div className="beneficios">
            <div>✓ Formación en valores</div>
            <div>✓ Desarrollo académico</div>
            <div>✓ Actividades culturales</div>
            <div>✓ Educación personalizada</div>
          </div>

          <button>
            Conocer más
          </button>
        </motion.div>

      </div>

    </section>
  );
}

export default Oferta;
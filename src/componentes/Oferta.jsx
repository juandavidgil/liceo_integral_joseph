import { motion } from "framer-motion";
import oferta from "../assets/formation.jpeg";
import "./css/Oferta.css";

function Oferta() {
  return (
    <section className="oferta">

      <motion.div
        className="oferta-title"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Oferta Académica</h2>
      </motion.div>

      <div className="oferta-container">

        <motion.div
          className="oferta-image"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <img src={oferta} alt="Oferta académica" />
        </motion.div>

        <motion.div
          className="oferta-content"
          initial={{ opacity: 0, x: 80 }}
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
import { motion } from "framer-motion";
import "./css/Nosotros.css";

function Nosotros() {
  return (
    <section className="nosotros">

      <motion.div
        className="nosotros-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Nosotros</h2>
        <p>
          Formamos estudiantes íntegros mediante una educación
          basada en valores, excelencia académica y compromiso
          con la comunidad.
        </p>
      </motion.div>

      {/* VISION */}

      <motion.div
        className="info-card"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="info-image">
          <img
            src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200"
            alt="Visión"
          />
        </div>

        <div className="info-content">
          <span>VISIÓN</span>

          <h3>Mirando hacia el futuro</h3>

          <p>
            Ser una institución educativa reconocida por su
            excelencia académica y formación en valores,
            preparando estudiantes capaces de enfrentar los
            retos del futuro con responsabilidad, liderazgo
            y confianza.
          </p>
        </div>
      </motion.div>

      {/* MISION */}

      <motion.div
        className="info-card reverse"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="info-content">
          <span>MISIÓN</span>

          <h3>Educación con propósito</h3>

          <p>
            Brindar una educación integral de calidad que
            fomente el desarrollo académico, humano y social
            de nuestros estudiantes, formando personas
            responsables, respetuosas y comprometidas con
            su comunidad.
          </p>
        </div>

        <div className="info-image">
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200"
            alt="Misión"
          />
        </div>
      </motion.div>

    </section>
  );
}

export default Nosotros;
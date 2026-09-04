import { motion } from "framer-motion";
import colegio from "../assets/Hero.jpeg";
import "./css/Hero.css";

function Hero() {
  return (
    <section className="hero" id="inicio">

      <div className="hero-overlay"></div>

      <img
        src={colegio}
        alt="Liceo Integral Joseph"
        className="hero-image"
      />

      <div className="hero-content">

        <motion.h1
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Educación Integral para
          <span> Construir un Mejor Futuro</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.4
          }}
        >
          Somos una institución educativa comprometida con la
          formación de niños y jóvenes capaces, responsables
          y preparados para enfrentar los retos de la vida
          con valores, disciplina y excelencia.
        </motion.p>

        <motion.div
          className="hero-tags"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            duration: 1,
            delay: 0.7
          }}
        >
          <span>Excelencia</span>
          <span>Disciplina</span>
          <span>Valores</span>
        </motion.div>

        <motion.button
          className="hero-btn"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 1,
          }}
          whileHover={{
            scale: 1.05,
          }}
          whileTap={{
            scale: 0.95,
          }}
          onClick={() => {
            document.getElementById("nosotros")?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          Conoce nuestra institución
        </motion.button>

      </div>

      <div className="scroll-indicator">
        <span></span>
      </div>

    </section>
  );
}

export default Hero;
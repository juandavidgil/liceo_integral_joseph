
import Tematica1 from "../assets/tematica1.jpeg";
import Tematica2 from "../assets/tematica2.jpeg";
import Tematica3 from "../assets/tematica3.jpeg";
import Tematica4 from "../assets/tematica4.jpeg";
import Tematica5 from "../assets/tematica5.jpeg";
import Tematica6 from "../assets/tematica6.jpeg";
import Tematica7 from "../assets/tematica7.jpeg";
import Tematica8 from "../assets/tematica8.jpeg";

import "./css/Tematica.css";
import { motion } from "framer-motion";

function Tematica() {
  const imagenes = [
    { src: Tematica1, titulo: "Un mundo de imaginación", numero: "01", color: "blue" },
    { src: Tematica2, titulo: "Pequeños exploradores", numero: "02", color: "yellow" },
    { src: Tematica3, titulo: "Aprender jugando", numero: "03", color: "pink" },
    { src: Tematica4, titulo: "Creatividad en acción", numero: "04", color: "green" },
    { src: Tematica5, titulo: "Aventuras por descubrir", numero: "05", color: "orange" },
    { src: Tematica6, titulo: "Grandes sueños", numero: "06", color: "purple" },
    { src: Tematica7, titulo: "Diversión y aprendizaje", numero: "07", color: "blue" },
    { src: Tematica8, titulo: "Momentos especiales", numero: "08", color: "yellow" },
  ];

  return (
    <section className="tematica" id="tematica">
      <div className="tematica-container">

        <motion.header
          className="tematica-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="tematica-eyebrow">
            ✦ APRENDER · EXPLORAR · SOÑAR ✦
          </span>

          <h2>
            Un mundo lleno de
            <span> color y diversión.</span>
          </h2>

          <p>
            Cada experiencia es una oportunidad para descubrir,
            imaginar y aprender. Exploramos juntos un universo
            de creatividad, alegría y nuevas aventuras.
          </p>

          <div className="tematica-divider">
            <span />
            <i>★</i>
            <span />
          </div>
        </motion.header>

        <motion.div
          className="tematica-info"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="tematica-info-icon">✿</div>

          <div className="tematica-info-text">
            <span>UN UNIVERSO POR DESCUBRIR</span>
            <h3>¡Nuestro dia tematico!</h3>
          </div>

          <div className="tematica-info-stars">
            <span>★</span>
            <span>✦</span>
            <span>★</span>
          </div>
        </motion.div>

        <div className="tematica-gallery">
          {imagenes.map((imagen, index) => (
            <motion.article
              key={imagen.numero}
              className={`tematica-card tematica-${imagen.color}`}
              initial={{ opacity: 0, y: 35 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{
                duration: 0.65,
                delay: (index % 4) * 0.08,
              }}
            >
              <img
                src={imagen.src}
                alt={imagen.titulo}
                loading={index < 2 ? "eager" : "lazy"}
              />

              <div className="tematica-card-overlay">
                <span className="tematica-card-number">
                  {imagen.numero}
                </span>

                <div className="tematica-card-text">
                  <span>✦ DESCUBRIENDO JUNTOS</span>
                  <h3>{imagen.titulo}</h3>
                </div>

                <span className="tematica-card-star">★</span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.footer
          className="tematica-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="tematica-footer-line" />
          <p>
            LICEO INTEGRAL JOSEPH
            <span> · </span>
            APRENDER ES UNA AVENTURA
          </p>
          <span className="tematica-footer-line" />
        </motion.footer>

      </div>
    </section>
  );
}

export default Tematica;

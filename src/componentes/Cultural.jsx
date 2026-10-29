import Cultura1 from "../assets/cultural-1.jpeg";
import Cultura2 from "../assets/cultural-2.jpeg";
import Cultura3 from "../assets/cultural-3.jpeg";
import Cultura4 from "../assets/cultural-4.jpeg";
import Cultura5 from "../assets/cultural-5.jpeg";
import Cultura6 from "../assets/cultural-6.jpeg";
import Cultura7 from "../assets/cultural-7.jpeg";
import Cultura9 from "../assets/cultural-9.jpeg";
import Cultural0 from "../assets/cultural-10.jpeg";
import Cultural1 from "../assets/cultural-11.jpeg";

import "./css/Cultural.css";
import { motion } from "framer-motion";

function Cultural() {
  const imagenes = [
    { src: Cultura1, titulo: "Arte y expresión", numero: "01" },
    { src: Cultura2, titulo: "Talento que inspira", numero: "02" },
    { src: Cultura3, titulo: "Nuestras tradiciones", numero: "03" },
    { src: Cultura4, titulo: "Creatividad sin límites", numero: "04" },
    { src: Cultura5, titulo: "Expresiones culturales", numero: "05" },
    { src: Cultura6, titulo: "Momentos inolvidables", numero: "06" },
    { src: Cultura7, titulo: "Unidos por la cultura", numero: "07" },
    { src: Cultura9, titulo: "Pasión y aprendizaje", numero: "08" },
    { src: Cultural0, titulo: "El arte de compartir", numero: "09" },
    { src: Cultural1, titulo: "Nuestra esencia", numero: "10" },
  ];

  return (
    <section className="cultural" id="cultural">
      <div className="cultural-container">

        <motion.header
          className="cultural-header"
          initial={{ opacity: 0, y: 35 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
        >
          <span className="cultural-eyebrow">
            NUESTRA ESENCIA · NUESTRA IDENTIDAD
          </span>

          <h2>
            Una semana para
            <span> vivir la cultura.</span>
          </h2>

          <p>
            Celebramos el talento, el arte y las tradiciones
            que hacen de nuestra comunidad educativa un lugar
            lleno de creatividad, aprendizaje y grandes experiencias.
          </p>

          <div className="cultural-divider">
            <span />
            <i />
            <span />
          </div>
        </motion.header>

        <div className="cultural-info">
          <div>
            <span className="cultural-info-label">NUESTRO ENCUENTRO</span>
            <h3>Semana Cultural</h3>
          </div>

          <div className="cultural-date">
            <span>21 — 25</span>
            <small>SEPTIEMBRE</small>
          </div>
        </div>

        <div className="cultural-gallery">
          {imagenes.map((imagen, index) => (
            <motion.article
              key={imagen.numero}
              className={`cultural-card cultural-card-${index + 1}`}
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
                loading={index < 3 ? "eager" : "lazy"}
              />

              <div className="cultural-card-overlay">
                <span className="cultural-card-number">
                  {imagen.numero}
                </span>

                <div className="cultural-card-text">
                  <span>SEMANA CULTURAL</span>
                  <h3>{imagen.titulo}</h3>
                </div>

                <span className="cultural-card-arrow">↗</span>
              </div>
            </motion.article>
          ))}
        </div>

        <motion.footer
          className="cultural-footer"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="cultural-footer-line" />
          <p>
            LICEO INTEGRAL JOSEPH
            <span> · </span>
            CULTURA QUE NOS UNE
          </p>
          <span className="cultural-footer-line" />
        </motion.footer>

      </div>
    </section>
  );
}

export default Cultural;
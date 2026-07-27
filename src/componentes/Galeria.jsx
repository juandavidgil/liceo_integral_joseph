import { motion } from "framer-motion";
import photo_1 from "../assets/gallery-1.jpeg"
import photo_2 from "../assets/gallery-2.jpeg"
import photo_3 from "../assets/gallery-3.jpeg"
import photo_4 from "../assets/gallery-4.jpeg"
import photo_5 from "../assets/gallery-5.jpeg"
import photo_6 from "../assets/gallery-6.jpeg"
import "./css/Galeria.css";

function Galeria() {
  const imagenes = [
    photo_5,
    photo_1,
    photo_3,
    photo_6,
    photo_2,
    photo_4,
  ];

  return (
    <section className="galeria">

      <motion.div
        className="galeria-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Galería Institucional</h2>

        <p>
          Conoce algunos momentos especiales de nuestra
          comunidad educativa, actividades académicas,
          culturales y deportivas.
        </p>
      </motion.div>

      <div className="galeria-grid">
        {imagenes.map((img, index) => (
          <motion.div
            key={index}
            className="galeria-item"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.5,
              delay: index * 0.1,
            }}
          >
            <img src={img} alt={`Galería ${index + 1}`} />

            <div className="overlay">
              <span>Liceo Integral Joseph</span>
            </div>
          </motion.div>
        ))}
      </div>

    </section>
  );
}

export default Galeria;
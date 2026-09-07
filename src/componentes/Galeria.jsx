import { motion } from "framer-motion";
import photo_1 from "../assets/gallery-1.jpeg";
import photo_2 from "../assets/gallery-2.jpeg";
import photo_3 from "../assets/gallery-3.jpeg";
import photo_4 from "../assets/gallery-4.jpeg";
import photo_5 from "../assets/gallery-5.jpeg";
import photo_6 from "../assets/gallery-6.jpeg";
import photo_7 from "../assets/gallery-7.jpeg";
import photo_8 from "../assets/gallery-8.jpeg";
import photo_9 from "../assets/gallery-9.jpeg";
import photo_10 from "../assets/gallery-10.jpeg";
import photo_11 from "../assets/gallery-11.jpeg";
import photo_12 from "../assets/gallery-12.jpeg";
import photo_13 from "../assets/gallery-13.jpeg";
import photo_14 from "../assets/gallery-14.jpeg";
import photo_15 from "../assets/gallery-15.jpeg";
import photo_16 from "../assets/gallery-16.jpeg";
import photo_17 from "../assets/gallery-17.jpeg"
import photo_18 from "../assets/gallery-18.jpeg"
import photo_19 from "../assets/gallery-19.jpeg"
import "./css/Galeria.css";

function Galeria() {
  const imagenes = [
    photo_5,
    photo_1,
    photo_3,
    photo_6,
    photo_2,
    photo_4,
    photo_7,
    photo_8,
    photo_9,
    photo_10,
    photo_11,
    photo_12,
    photo_13,
    photo_14,
    photo_15,
    photo_16,
    photo_17,
    photo_18,
    photo_19
  ];

  return (
    <section className="galeria" id="galeria">

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
import { motion } from "framer-motion";
import "./css/Galeria.css";

function Galeria() {
  const imagenes = [
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
    "https://images.unsplash.com/photo-1588072432836-e10032774350?w=800",
    "https://images.unsplash.com/photo-1529390079861-591de354faf5?w=800",
    "https://images.unsplash.com/photo-1503676382389-4809596d5290?w=800",
    "https://images.unsplash.com/photo-1513258496099-48168024aec0?w=800",
    "https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800",
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
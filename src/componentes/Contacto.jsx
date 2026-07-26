import "./css/Contacto.css";
import { motion } from "framer-motion";

function Contacto() {
  return (
    <section className="contacto" id="contacto">

      <div className="glow glow-blue contacto-glow-1"></div>
      <div className="glow glow-yellow contacto-glow-2"></div>

      <motion.div
        className="section-title"
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <span>CONTACTO INSTITUCIONAL</span>

        <h2>Estamos para Ayudarte</h2>

        <p>
          Comunícate con nuestra institución educativa para
          resolver dudas, solicitar información o recibir
          acompañamiento académico.
        </p>
      </motion.div>

      <div className="contacto-container">

        <motion.div
          className="contacto-info glass-card"
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="contacto-header">
            <h3>Información Institucional</h3>

            <p>
              Nuestro equipo administrativo está disponible
              para atenderte.
            </p>
          </div>

          <div className="contacto-data">

            <div className="contacto-item">
              <h4>Horario</h4>
              <p>
                Lunes a Viernes
                <br />
                7:00 a.m. - 3:00 p.m.
              </p>
            </div>

            <div className="contacto-item">
              <h4>Teléfono</h4>
              <p>+57 300 123 4567</p>
            </div>

            <div className="contacto-item">
              <h4>Correo</h4>
              <p>contacto@liceojoseph.edu.co</p>
            </div>

            <div className="contacto-item">
              <h4>Ubicación</h4>
              <p>Liceo Integral Joseph</p>
            </div>

          </div>

          <div className="contacto-buttons">

            <motion.a
              href="mailto:contacto@liceojoseph.edu.co"
              className="btn-primary"
              whileHover={{
                scale: 1.05,
                y: -4
              }}
              whileTap={{
                scale: 0.95
              }}
            >
              Enviar correo electrónico
            </motion.a>

            <motion.a
              href="https://wa.me/573001234567"
              target="_blank"
              rel="noreferrer"
              className="btn-secondary"
              whileHover={{
                scale: 1.05,
                y: -4
              }}
              whileTap={{
                scale: 0.95
              }}
            >
              Escríbenos por WhatsApp
            </motion.a>

          </div>

          <div className="map-container">

            <iframe
              title="Mapa"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.825073813314!2d-74.1175202!3d4.5312686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3fa219afe985c1%3A0x7a7fdf807ebfc91a!2sColegio%20Juan%20Luis%20Londo%C3%B1o%20IED%20-%20La%20Salle!5e0!3m2!1ses!2sco!4v1715980000000"
              allowFullScreen
              loading="lazy"
            />

          </div>

        </motion.div>

        <motion.form
          className="contacto-form glass-card"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="form-top">
            <h3>Envíanos un mensaje</h3>

            <p>
              Completa el formulario y nos pondremos
              en contacto contigo lo antes posible.
            </p>
          </div>

          <div className="input-group">
            <label>Nombre completo</label>

            <input
              type="text"
              placeholder="Ingrese su nombre completo"
            />
          </div>

          <div className="input-group">
            <label>Correo electrónico</label>

            <input
              type="email"
              placeholder="Ingrese su correo electrónico"
            />
          </div>

          <div className="input-group">
            <label>Mensaje</label>

            <textarea
              rows="6"
              placeholder="Ingrese su mensaje"
            />
          </div>

          <motion.button
            type="submit"
            className="submit-btn"
            whileHover={{
              scale: 1.03
            }}
            whileTap={{
              scale: 0.95
            }}
          >
            Enviar mensaje
          </motion.button>

        </motion.form>

      </div>
    </section>
  );
}

export default Contacto; 
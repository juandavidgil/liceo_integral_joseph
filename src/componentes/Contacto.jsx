import "./css/Contacto.css";
import { motion } from "framer-motion";

function Contacto() {

  const WhatsApp = () => {

    const numero = "573197032824";
    const mensaje = `¡Hola Liceo Integral Joseph! Me gustaría realizar una consulta por favor`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    onClose();

  }
  
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
              <p>+57 319 7032824</p>
            </div>

            <div className="contacto-item">
              <h4>Correo</h4>
              <p>ginapaolabc@gmail.com</p>
            </div>

            <div className="contacto-item">
              <h4>Ubicación</h4>
              <p>Cra. 6 # 14-51, Soacha, Cundinamarca</p>
            </div>

          </div>

          <div className="contacto-buttons">

            <motion.a


              href="https://mail.google.com/mail/?view=cm&fs=1&to=ginapaolabc@gmail.com&su=Información%20sobre%20sus%20servicios&body=Hola%20Liceo%20Integral%20Joseph%2C%20quisiera%20recibir%20más%20información%20sobre%20sus%20servicios.%20Muchas%20gracias."
              target="_blank"
              rel="noopener noreferrer"


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
              onClick={WhatsApp}
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
  src="https://www.google.com/maps?q=Cra.%206%20%2314-51,%20Soacha,%20Cundinamarca&output=embed"
  width="100%"
  height="550"
  style={{ border: 0 }}
  allowFullScreen
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
></iframe>

          </div>

        </motion.div>



      </div>
    </section>
  );
}

export default Contacto; 
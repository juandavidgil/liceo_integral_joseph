import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import "./css/Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-container">

        <div className="footer-brand">
          <h3>Liceo Integral Joseph</h3>

          <p>
            Formando estudiantes con excelencia académica,
            valores y compromiso con el futuro.
          </p>
        </div>

        <div className="footer-links">
          <h4>Enlaces</h4>

          <a href="#inicio">Inicio</a>
          <a href="#nosotros">Nosotros</a>
          <a href="#oferta">Oferta Académica</a>
          <a href="#contacto">Contacto</a>
        </div>

        <div className="footer-contact">
          <h4>Contacto</h4>

          <p>📍 Vallecito, Tolima</p>
          <p>📞 +57 300 123 4567</p>
          <p>✉ info@liceojoseph.edu.co</p>
        </div>

        <div className="footer-social">
          <h4>Síguenos</h4>

          <div className="social-icons">
            <a href="#">
              <FaFacebookF />
            </a>

            <a href="#">
              <FaInstagram />
            </a>

            <a href="#">
              <FaWhatsapp />
            </a>
          </div>
        </div>

      </div>

      <div className="footer-bottom">
  <p>
    © 2026 Liceo Integral Joseph |
    Desarrollado por ApexScale
  </p>
      </div>

    </footer>
  );
}

export default Footer;
import {
  FaFacebookF,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa";

import "./css/Footer.css";

function Footer() {
    const WhatsApp = () => {

    const numero = "573197032824";
    const mensaje = `¡Hola Liceo Integral Joseph! Me gustaría realizar una consulta por favor`;
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
    onClose();

  }
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

          <p>📍 Cra. 6 # 14-51, Soacha, Cundinamarca</p>
          <p>📞 +57 319 7032824</p>
          <p>✉ ginapaolabc@gmail.com</p>
        </div>

        <div className="footer-social">
       

          <div className="social-icons">

            <a onClick={WhatsApp}>
              <FaWhatsapp size={35}/>
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
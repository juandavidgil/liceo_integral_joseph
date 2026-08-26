import React from "react";
import { motion } from "framer-motion";
import "./css/Navbar.css";

function Navbar() {
  const navItems = [
    { name: "Inicio", path: "#inicio" },
    { name: "Razón", path: "#razon" },
    { name: "Oferta", path: "#oferta" },
    { name: "Áreas", path: "#areas" },
    { name: "Nosotros", path: "#nosotros" },
    { name: "Galeria", path: "#galeria" },
    { name: "Contacto", path: "#contacto" },
  ];

  const WhatsApp = () => {
    const numero = "573197032824";

    const mensaje =
      "¡Hola Liceo Integral Joseph! Me gustaría realizar una consulta, por favor.";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank");
  };

  return (
    <motion.header
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8 }}
    >
      <motion.div
        className="logo"
        initial={{ opacity: 0, x: -40 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
      >
        <span>Liceo Integral Joseph</span>
      </motion.div>

      <nav>
        <ul className="nav-links">
          {navItems.map((item) => (
            <li key={item.name}>
              <a href={item.path}>{item.name}</a>
            </li>
          ))}
        </ul>
      </nav>

      <motion.button
        type="button"
        onClick={WhatsApp}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="contact-btn"
      >
        Contáctanos
      </motion.button>
    </motion.header>
  );
}

export default Navbar;

import React, { useState } from "react";
import { motion } from "framer-motion";
import "./css/Navbar.css";

function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  const navItems = [
    { name: "Inicio", path: "#inicio" },
    { name: "Razón", path: "#razon" },
    { name: "Oferta", path: "#oferta" },
    { name: "Áreas", path: "#areas" },
    { name: "Nosotros", path: "#nosotros" },
    { name: "Galería", path: "#galeria" },
    { name: "Contacto", path: "#contacto" },
  ];

  const cerrarMenu = () => {
    setMenuAbierto(false);
  };

  const WhatsApp = () => {
    const numero = "573197032824";

    const mensaje =
      "¡Hola Liceo Integral Joseph! Me gustaría realizar una consulta, por favor.";

    const url = `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;

    window.open(url, "_blank", "noopener,noreferrer");
    cerrarMenu();
  };

  return (
    <motion.header
      className="navbar"
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
    >
      <motion.a
        href="#inicio"
        className="logo"
        onClick={cerrarMenu}
        initial={{ opacity: 0, x: -30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7 }}
      >
        <span>Liceo Integral Joseph</span>
      </motion.a>

      <nav
        id="navbar-menu"
        className={`navbar-nav ${menuAbierto ? "menu-abierto" : ""}`}
      >
        <ul className="nav-links">
          {navItems.map((item, index) => (
            <motion.li
              key={item.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.05 }}
            >
              <a href={item.path} onClick={cerrarMenu}>
                {item.name}
              </a>
            </motion.li>
          ))}
        </ul>

        <button
          type="button"
          className="contact-btn mobile-contact"
          onClick={WhatsApp}
        >
          Contáctanos
          <span>↗</span>
        </button>
      </nav>

      <motion.button
        type="button"
        onClick={WhatsApp}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="contact-btn desktop-contact"
      >
        Contáctanos
        <span>↗</span>
      </motion.button>

      <button
        type="button"
        className={`menu-toggle ${menuAbierto ? "active" : ""}`}
        onClick={() => setMenuAbierto(!menuAbierto)}
        aria-label={menuAbierto ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={menuAbierto}
        aria-controls="navbar-menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>
    </motion.header>
  );
}

export default Navbar;

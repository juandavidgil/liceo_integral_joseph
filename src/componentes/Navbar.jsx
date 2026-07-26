import React from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import "./css/Navbar.css";

function Navbar() {
  const navItems = [
    { name: "Inicio", path: "/" },
    { name: "Razón", path: "/razon" },
    { name: "Oferta", path: "/oferta" },
    { name: "Áreas", path: "/areas" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Contacto", path: "/contacto" },
  ];

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
              <ul
                to={item.path}
                className={({ isActive }) =>
                  isActive ? "active-link" : ""
                }
              >
                {item.name}
              </ul>
            </li>
          ))}
        </ul>
      </nav>

      <motion.button
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
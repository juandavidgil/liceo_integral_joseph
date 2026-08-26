import { motion } from "framer-motion";
import nosotros from "../assets/nosotros.jpeg";
import proposito from "../assets/proposito.jpeg";
import "./css/Nosotros.css";

function Nosotros() {
  const principios = [
    {
      nombre: "Solidaridad",
      descripcion:
        "Apoyo incondicional al desarrollo de los sueños, expectativas y esperanzas de su familia.",
    },
    {
      nombre: "Diálogo",
      descripcion:
        "Favorecer la comunicación constructiva entre los estudiantes.",
    },
    {
      nombre: "Responsabilidad",
      descripcion:
        "Ofrecer un servicio de alta calidad que impacte a sus estudiantes y a sus familias.",
    },
    {
      nombre: "Autonomía",
      descripcion:
        "Cultivar la independencia, la toma de decisiones asertivas y el manejo de la voluntad para formar un pensamiento crítico.",
    },
    {
      nombre: "Equidad",
      descripcion:
        "Fomentar la mentalidad hacia el merecimiento de un nivel de vida aún mejor, construyéndolo, trabajándolo y ofreciendo las mismas oportunidades.",
    },
    {
      nombre: "Compañerismo",
      descripcion:
        "Trabajo en equipo y cooperación para un beneficio colectivo que contribuya a la construcción de la institución, la comunidad y la sociedad.",
    },
    {
      nombre: "Libertad",
      descripcion:
        "Cultivar la facultad de los estudiantes y sus familias para elegir de manera responsable su propia forma de actuar en la sociedad.",
    },
    {
      nombre: "Honestidad",
      descripcion:
        "Contribuir a la formación del estudiante y su familia frente a la verdad.",
    },
    {
      nombre: "Tolerancia",
      descripcion:
        "Orientar personas que respeten las opiniones, ideas o actitudes de los demás.",
    },
    {
      nombre: "Respeto",
      descripcion:
        "Reconocer al otro como persona con derechos y deberes.",
    },
    {
      nombre: "Alegría",
      descripcion:
        "Cultivar en los estudiantes y demás actores de la comunidad sentimientos de satisfacción, manteniendo el mejoramiento continuo.",
    },
    {
      nombre: "Prudencia",
      descripcion:
        "Promover la capacidad de pensar, ante ciertos acontecimientos o actividades, sobre los riesgos que estos conllevan.",
    },
    {
      nombre: "Liderazgo",
      descripcion:
        "Promover en los estudiantes y demás actores de la comunidad educativa habilidades gerenciales o directivas para influir positivamente en la forma de ser y actuar de las demás personas de la institución.",
    },
    {
      nombre: "Amor",
      descripcion:
        "El servicio educativo se presta teniendo en cuenta la afinidad con las problemáticas, necesidades y expectativas de sus familias.",
    },
    {
      nombre: "Fe",
      descripcion:
        "Cultivar en los estudiantes y demás actores de la comunidad la creencia y esperanza personal sobre la existencia de un ser superior, en el marco del Cristianismo.",
    },
  ];

  return (
    <section className="nosotros" id="nosotros">
      {/* HEADER */}

      <motion.div
        className="nosotros-header"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <h2>Nosotros</h2>

        <p>
          Formamos estudiantes íntegros mediante una educación basada en
          valores, excelencia académica y compromiso con la comunidad.
        </p>
      </motion.div>

      {/* VISIÓN */}

      <motion.div
        className="info-card"
        initial={{ opacity: 0, x: -80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="info-image">
          <img src={nosotros} alt="Visión del Liceo Integral Joseph" />
        </div>

        <div className="info-content">
          <span>VISIÓN</span>

          <h3>Mirando hacia el futuro</h3>

          <p>
            La institución LICEO INTEGRAL JOSEPH en el año 2029 prestará un
            servicio de alta calidad en los niveles de educación preescolar,
            básica primaria y bachillerato, impactando a la comunidad del
            municipio de Soacha.
          </p>
        </div>
      </motion.div>

      {/* MISIÓN */}

      <motion.div
        className="info-card reverse"
        initial={{ opacity: 0, x: 80 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
      >
        <div className="info-content">
          <span>MISIÓN</span>

          <h3>Educación con propósito</h3>

          <p>
            La institución LICEO INTEGRAL JOSEPH presta un servicio educativo
            de alta calidad a través de la formación integral, es decir, el
            desarrollo armónico de todas las dimensiones humanas, en el marco
            de una educación por competencias para la vida, referenciada en el
            modelo pedagógico dialogante bajo principios éticos, morales y
            cristianos.
          </p>
        </div>

        <div className="info-image">
          <img src={proposito} alt="Misión del Liceo Integral Joseph" />
        </div>
      </motion.div>

      {/* FILOSOFÍA */}

      <motion.div
        className="filosofia"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="filosofia-content">
          <span>FILOSOFÍA INSTITUCIONAL</span>

          <h3>Una formación para la vida</h3>

          <p>
            Concebimos al ser humano como una persona proactiva, integral,
            asertiva, emprendedora, con grandes valores éticos, morales y
            cristianos, gran control de su voluntad, constructor de familia,
            comunidad y sociedad.
          </p>

          <p>
            La filosofía institucional pretende impactar y trascender en la
            comunidad del contexto inmediato, contribuyendo a solucionar sus
            problemáticas y a satisfacer sus necesidades frente al proyecto de
            vida de nuestro estudiantado y sus familias.
          </p>
        </div>
      </motion.div>

      {/* PRINCIPIOS */}

      <motion.div
        className="principios"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="principios-header">
          <span>PRINCIPIOS INSTITUCIONALES</span>

          <h3>Valores que nos representan</h3>

          <p>
            Nuestros principios orientan la formación integral de los
            estudiantes y fortalecen la construcción de una comunidad basada
            en el respeto, la responsabilidad y el compromiso.
          </p>
        </div>

        <div className="principios-grid">
          {principios.map((principio, index) => (
            <motion.div
              className="principio-card"
              key={principio.nombre}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
            >
              <span className="principio-number">
                {String(index + 1).padStart(2, "0")}
              </span>

              <h4>{principio.nombre}</h4>

              <p>{principio.descripcion}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* FUNDAMENTACIÓN ESPIRITUAL */}

      <motion.div
        className="espiritualidad"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="espiritualidad-content">
          <span>FUNDAMENTACIÓN ESPIRITUAL</span>

          <h3>Formación integral en el marco del Cristianismo</h3>

          <p>
            La espiritualidad la consideramos como el modo de ser, pensar y
            actuar característico de una persona o grupo que está viviendo
            alguna experiencia de comunión consigo, con los demás, con la
            naturaleza y con Dios.
          </p>

          <p>
            La formación integral de nuestros estudiantes se dará en el marco
            del Cristianismo.
          </p>
        </div>
      </motion.div>

      {/* PERFIL DEL ESTUDIANTE */}

      <motion.div
        className="perfil-estudiante"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <div className="perfil-header">
          <span>PERFIL DEL ESTUDIANTE</span>

          <h3>Estudiante de Preescolar</h3>
        </div>

        <div className="perfil-content">
          <h4>Dimensión espiritual</h4>

          <ul>
            <li>
              Compartirá su cultura familiar, gustos y cultos, respetando las
              individualidades del otro.
            </li>

            <li>
              Será un ser individual en su mente, cuerpo y espíritu.
            </li>

            <li>
              Reconocerá su dimensión espiritual para fundamentar criterios
              de conocimiento.
            </li>
          </ul>
        </div>
      </motion.div>
    </section>
  );
}

export default Nosotros;
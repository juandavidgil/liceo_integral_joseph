import "./App.css";
import Navbar from "./componentes/Navbar";
import Hero from "./componentes/Hero";
import Razon from "./componentes/Razon";
import Oferta from "./componentes/Oferta";
import Footer from "./componentes/Footer";
import Contacto from "./componentes/Contacto";
import Areas from "./componentes/Areas";
import Nosotros from "./componentes/Nosotros";
import Galeria from "./componentes/Galeria";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Razon />
      <Oferta />
      <Areas />
      <Nosotros />
      <Galeria />
      <Contacto />
      <Footer />
    </div>
  );
}

export default App;

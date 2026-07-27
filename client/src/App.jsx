import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Equipe from "./pages/Equipe";
import Projets from "./pages/Projets";
import Contact from "./pages/Contact";


function App() {

  return (
    <BrowserRouter>

      <Navbar />

      <main>

        <Routes>

          <Route path="/" element={<Home />} />

          <Route path="/equipe" element={<Equipe />} />

          <Route path="/projets" element={<Projets />} />

          <Route path="/contact" element={<Contact />} />

        </Routes>

      </main>


      <Footer />

    </BrowserRouter>
  );
}

export default App;
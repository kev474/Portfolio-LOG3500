import { Link } from "react-router-dom";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

function Navbar() {

  const { darkMode, toggleTheme } = useContext(ThemeContext);

  return (
    <nav className={darkMode ? "navbar dark" : "navbar"}>

      <h2>Portfolio LOG3500</h2>

      <div>
        <Link to="/">Accueil</Link>
        <Link to="/equipe">Équipe</Link>
        <Link to="/projets">Projets</Link>
        <Link to="/contact">Contact</Link>

        <button onClick={toggleTheme}>
          {darkMode ? "☀️ Mode clair" : "🌙 Mode sombre"}
        </button>

      </div>

    </nav>
  );
}

export default Navbar;
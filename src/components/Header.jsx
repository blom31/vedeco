import { useEffect, useState } from "react";
import logo from "../assets/logo_circ.webp";

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const headerEl = document.querySelector("header");
      if (headerEl) {
        if (window.scrollY > 50) {
          headerEl.classList.add("header--sticky");
        } else {
          headerEl.classList.remove("header--sticky");
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogoClick = (event) => {
    event.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <a
          aria-label="Volver al inicio"
          className="header__logo-container header__logo-link"
          href="#top"
          onClick={handleLogoClick}
        >
          <img alt="VEdeco Logo" className="header__logo-img" src={logo} />
          <span className="header__logo-text">VEdeco</span>
        </a>
        <div className="header__menu">
          <a className="header__link" href="#proceso">
            Proceso
          </a>
          <a className="header__link" href="#products">
            Catálogo
          </a>
          {/* <a className="header__link" href="#">
            Projects
          </a> */}
          <a className="header__link" href="#pedidos">
            Pedidos
          </a>
        </div>
        {/* <button className="header__btn">Inquire</button> */}
      </nav>
    </header>
  );
}

export default Header;

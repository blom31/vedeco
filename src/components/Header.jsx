import { useEffect } from "react";
import logo from "../assets/logo_circ.webp";

function Header() {
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

  return (
    <header className="header">
      <nav className="header__nav">
        <div className="header__logo-container">
          <img alt="VEDeco Logo" className="header__logo-img" src={logo} />
          <span className="header__logo-text">VEdeco</span>
        </div>
        <div className="header__menu">
          <a className="header__link" href="#products">
            Catálogo
          </a>
          {/* <a className="header__link" href="#">
            Projects
          </a> */}
          <a className="header__link" href="#">
            Proceso
          </a>
          <a className="header__link" href="#">
            Custom Orders
          </a>
        </div>
        <button className="header__btn">Inquire</button>
      </nav>
    </header>
  );
}

export default Header;

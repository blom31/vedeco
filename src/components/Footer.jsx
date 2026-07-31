import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__info">
          <div className="footer__logo-container">
            <img
              alt="VEDeco Footer Logo"
              className="footer__logo-img"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAbuDysDA-ivw2EhFUOCF32k2IqPOABVYTdWEQxG1KsRW8OrXQYfOyDwWDx9G_tyXukosA-dgP2DOqXKYc8csG-WuzIFs_prxsfeTw4LlVcYgC0_baw9ysNMkAFNy7zDEJXo6hiY9eD_ncDGVOR4QmcgSP2RW-uUJ4Smd3ynMP4OD_GEQKACdXDNUuy2hc7FK6VLlhKcXMs0X20Gz9XqGRwVWqE3xBQ1f5R8nff6QmYijcWS-4yyW5fMPQcsaX4Vezu"
            />
            <span className="footer__logo-text">VEDeco</span>
          </div>
          <p className="footer__desc">
            Artesanos del terrazo contemporáneo. Creamos piezas de diseño que
            celebran la belleza de los materiales naturales y la maestría
            artesanal.
          </p>
          <div className="footer__socials">
            <a className="footer__social-link" href="#">
              Instagram
            </a>
            <a className="footer__social-link" href="#">
              Pinterest
            </a>
            <a className="footer__social-link" href="#">
              LinkedIn
            </a>
          </div>
        </div>
        <div className="footer__nav-groups">
          <div className="footer__nav-group">
            <h4 className="footer__group-title">COMPAÑÍA</h4>
            <nav className="footer__group-links">
              <a className="footer__group-link" href="#">
                Nosotros
              </a>
              <a className="footer__group-link" href="#">
                Proceso
              </a>
              <a className="footer__group-link" href="#">
                Proyectos
              </a>
            </nav>
          </div>
          <div className="footer__nav-group">
            <h4 className="footer__group-title">SOPORTE</h4>
            <nav className="footer__group-links">
              <a className="footer__group-link" href="#">
                Contacto
              </a>
              <a className="footer__group-link" href="#">
                Preguntas Frecuentes
              </a>
              <a className="footer__group-link" href="#">
                Cuidado del Producto
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        <p className="footer__copyright">
          © 2024 VEDeco Artisanal Terrazzo. All rights reserved.
        </p>
        <div className="footer__bar-links">
          <a className="footer__bar-link" href="#">
            Privacy Policy
          </a>
          <a className="footer__bar-link" href="#">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__grid">
        <div className="footer__info">
          <div className="footer__logo-container">
            <span className="footer__logo-text">VEdeco</span>
          </div>
          <p className="footer__desc">
            Artesanos del terrazo contemporáneo. Creamos piezas de diseño que
            celebran la belleza de los materiales naturales y la maestría
            artesanal.
          </p>
        </div>
        <div className="footer__nav-groups">
          <div className="footer__nav-group">
            <h4 className="footer__group-title">CONTACTOS</h4>
            <nav className="footer__group-links">
              <div className="footer__socials">
                <a
                  className="footer__group-links"
                  target="_blank"
                  href="https://www.instagram.com/ve.deco2026/"
                >
                  Instagram: @ve.deco2026
                </a>
              </div>
              <a
                className="footer__group-links"
                target="_blank"
                href=""
              >
                Correo: vedecoterrazo@gmail.com
              </a>
              {/* <a className="footer__group-link" href="#">
                Preguntas Frecuentes
              </a>
              <a className="footer__group-link" href="#">
                Cuidado del Producto
              </a> */}
            </nav>
          </div>
        </div>
      </div>
      <div className="footer__bar">
        <p className="footer__copyright">
          © 2026 VEdeco Artisanal Terrazzo. All rights reserved.
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

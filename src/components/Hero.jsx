import imgHero from "../assets/Header2.webp";

function Hero() {
  return (
    <section className="hero">
      <div className="hero__bg">
        <img
          className="hero__image"
          alt="Artisanal terrazzo side table"
          src={imgHero}
        />
        <div className="hero__overlay"></div>
      </div>
      <div className="hero__container">
        <div className="hero__content">
          <h1 className="hero__title">
            Artesanía en Piedra,
            <br />
            Diseño para la Eternidad
          </h1>
          <p className="hero__desc">
            Mobiliario de terrazo artesanal que fusiona la solidez de la piedra
            natural con la elegancia del diseño contemporáneo. Piezas únicas
            creadas para perdurar.
          </p>
          <div className="hero__actions">
            <a className="hero__btn hero__btn--primary" href="#products">
              Explorar Catálogo
            </a>
            <a className="hero__btn hero__btn--secondary" href="#proceso">
              Procesos
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

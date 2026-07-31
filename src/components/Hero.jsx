import React from "react";
import imgHero from "../assets/Header2.WEBP";

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
            <button className="hero__btn hero__btn--primary">
              Explorar Catálogo
            </button>
            <button className="hero__btn hero__btn--secondary">Procesos</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;

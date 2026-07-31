import React from "react";

function About() {
  return (
    <section className="about">
      <div className="about__pattern"></div>
      <div className="about__grid">
        <div className="about__content">
          <span className="about__tag">NUESTRO ORIGEN</span>
          <h2 className="about__title">El Arte del Terrazo</h2>
          <p className="about__text-lg">
            En VEDeco, cada pieza comienza como una selección cuidadosa de
            minerales naturales. El terrazo no es solo un material; es un lienzo
            donde la piedra caliza, el mármol y el granito se encuentran para
            formar patrones orgánicos imposibles de replicar.
          </p>
          <p className="about__text-md">
            Nuestro proceso es deliberadamente lento. Pulimos cada superficie a
            mano hasta revelar el brillo interior de la piedra, asegurando que
            cada mesa o accesorio sea una obra de arte funcional y eterna.
          </p>
          <div className="about__stats">
            <div>
              <span className="about__stat-num">100%</span>
              <span className="about__stat-label">Artesanal</span>
            </div>
            <div>
              <span className="about__stat-num">Natural</span>
              <span className="about__stat-label">Materiales Sostenibles</span>
            </div>
          </div>
        </div>
        <div className="about__img-container">
          <img
            className="about__img"
            alt="Artisan hands working on terrazzo"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuA5Xa1oYR1ICPpNAd36vyZMg8MG65gFmMM4-CK9pEzEexGvMlRur27vOpgDKraucDNRBJS3BYg8CbYKs2UFwTkKqk9H80IMCd3Txh6tX9hVRYuXHKH4P3zIwgNi1JEGWPBA7SlxwdW6N7sCYzQ6jzM8xvK6D5fbpirPXh3h4ayRzKHbxHZrKJjxbg8PgvFAfFieWvT1uM-hu3oahBdjtpWXM_ReGg7FmouOjOU845mBoLJbLADz1Xw"
          />
          <div className="about__quote-box">
            <p className="about__quote">
              "La perfección reside en la imperfección de la piedra natural."
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

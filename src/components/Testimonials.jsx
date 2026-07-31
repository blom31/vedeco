import React from "react";

const testimonials = [
  {
    id: 1,
    quote:
      '"La calidad del terrazo es excepcional. La pieza se convirtió instantáneamente en el centro de atención de mi sala."',
    author: "ELENA RIVAS",
    location: "San Telmo, Buenos Aires",
  },
  {
    id: 2,
    quote:
      '"Buscábamos algo que fuera duradero pero con un toque artístico. VEDeco superó nuestras expectativas."',
    author: "MARCOS GALPERIN",
    location: "Punta del Este, Uruguay",
  },
  {
    id: 3,
    quote:
      '"Atención personalizada y un proceso de entrega impecable. El diseño es atemporal y muy elegante."',
    author: "SOFÍA MARTÍNEZ",
    location: "Santiago, Chile",
  },
  {
    id: 4,
    quote:
      '"Una joya artesanal. Se nota el amor y la dedicación en cada detalle pulido del terrazo."',
    author: "JULIETA VENERO",
    location: "Barcelona, España",
  },
];

function Testimonials() {
  return (
    <section className="testimonials">
      <div className="testimonials__header">
        <div className="testimonials__intro">
          <span className="testimonials__tagline">PROYECTOS RECIENTES</span>
          <h2 className="testimonials__title">Espacios con Identidad</h2>
        </div>
        <div className="testimonials__nav-buttons">
          <button className="testimonials__nav-btn">
            <span className="material-symbols-outlined">chevron_left</span>
          </button>
          <button className="testimonials__nav-btn">
            <span className="material-symbols-outlined">chevron_right</span>
          </button>
        </div>
      </div>
      <div className="testimonials__grid">
        {testimonials.map((t) => (
          <div key={t.id} className="testimonials__card">
            <span className="testimonials__card-quote-icon material-symbols-outlined">
              format_quote
            </span>
            <p className="testimonials__card-quote">{t.quote}</p>
            <div className="testimonials__card-divider">
              <p className="testimonials__card-author">{t.author}</p>
              <p className="testimonials__card-location">{t.location}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Testimonials;

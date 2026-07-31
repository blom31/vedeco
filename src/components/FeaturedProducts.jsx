import React from "react";

import mesa1 from "../assets/mesa 1.png";
import mesa2 from "../assets/mesa 2.png";
import mesa3 from "../assets/mesa 3.png";
import mesa4 from "../assets/mesa 4.png";
import mesa5 from "../assets/mesa5.jpg";

function FeaturedProducts() {
  const products = [
    {
      title: "Mesa Terrazzo Clara",
      description: "Mesa redonda de terrazo con vetas naturales.",
      image: mesa1,
    },
    {
      title: "Mesa Baja de Terrazo",
      description: "Diseño contemporáneo para sala de estar.",
      image: mesa2,
    },
    {
      title: "Mesa de Comedor Terrazzo",
      description: "Superficie texturada y acabados artesanales.",
      image: mesa3,
    },
    {
      title: "Mesa Auxiliar Terrazzo",
      description: "Pieza pequeña ideal para espacios reducidos.",
      image: mesa4,
    },
  ];

  return (
    <section className="featured" id="products">
      <h2 className="featured__title">Nuestros Productos</h2>
      <div className="featured__grid">
        {products.map((p, i) => (
          <div key={i} className="featured__card">
            <div className="featured__card-img-wrapper">
              <img src={p.image} alt={p.title} className="featured__card-img" />
            </div>
            <div className="featured__card-info">
              <h3 className="featured__card-title">{p.title}</h3>
              <p className="featured__card-collection">{p.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default FeaturedProducts;

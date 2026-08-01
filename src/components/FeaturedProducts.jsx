import mesa1 from "../assets/mesa1.webp";
import mesa2 from "../assets/mesa2.webp";
import mesa3 from "../assets/mesa3.webp";
import mesa4 from "../assets/mesa4.webp";

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
              <img src={p.image} alt={p.title} loading="lazy" className="featured__card-img" />
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

import { useState } from "react";

function CTA() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <section className="cta" id="pedidos">
      <div className="cta__box">
        <div className="cta__terrazzo"></div>
        <div className="cta__content">
          <h2 className="cta__title">¿Buscas algo personalizado?</h2>
          <p className="cta__desc">
            Diseñamos piezas a medida adaptadas a tus espacios y paleta de
            colores. Escríbenos para comenzar tu proyecto.
          </p>
        </div>
        <div className="cta__btn-container">
          <button className="cta__btn" onClick={() => setIsModalOpen(true)}>
            SOLICITAR PRESUPUESTO
          </button>
        </div>
      </div>

      {isModalOpen && (
        <div className="cta__overlay" onClick={() => setIsModalOpen(false)}>
          <div
            className="cta__modal"
            onClick={(e) => e.stopPropagation()}
            role="dialog"
            aria-modal="true"
            aria-labelledby="cta-modal-title"
          >
            <button
              className="cta__modal-close"
              aria-label="Cerrar formulario"
              onClick={() => setIsModalOpen(false)}
            >
              ×
            </button>
            <h3 className="cta__modal-title" id="cta-modal-title">
              Solicita tu presupuesto
            </h3>
            <form className="cta__form" onSubmit={handleSubmit}>
              <div className="cta__form-group">
                <label htmlFor="cta-name">Nombre y Apellido</label>
                <input
                  id="cta-name"
                  name="name"
                  type="text"
                  placeholder="María González"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="cta__form-group">
                <label htmlFor="cta-email">Correo</label>
                <input
                  id="cta-email"
                  name="email"
                  type="email"
                  placeholder="tu@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="cta__form-group">
                <label htmlFor="cta-description">Descripción</label>
                <textarea
                  id="cta-description"
                  name="description"
                  placeholder="Cuéntanos sobre tu proyecto..."
                  rows={4}
                  value={formData.description}
                  onChange={handleChange}
                  required
                />
              </div>
              <button className="cta__form-btn" type="submit">
                ENVIAR
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

export default CTA;

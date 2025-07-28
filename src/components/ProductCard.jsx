// Import Link
import { Link } from "react-router-dom";

// Componente che mostra una singola "card" prodotto
export default function ProductCard({ product }) {
  const { id, title, price, image, category } = product;

  return (
    <>
      <div className="card h-100 border border-dark bg-white text-dark shadow">
        <Link to={`/products/${id}`}>
          <img
            src={image}
            className="card-img-top p-3"
            alt={title}
            style={{ objectFit: "contain", height: "200px" }}
          />
        </Link>
        <div className="card-body d-flex flex-column">
          <Link
            to={`/products/${id}`}
            className="text-decoration-none text-dark"
          >
            <h6 className="card-title fw-semibold">{title}</h6>
          </Link>
          <p className="card-text text-muted text-capitalize small mb-2">
            {category}
          </p>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <span className="fw-bold text-dark">${price?.toFixed(2)}</span>
            <button className="btn btn-outline-dark btn-sm">
              Aggiungi al carrello <i className="bi bi-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

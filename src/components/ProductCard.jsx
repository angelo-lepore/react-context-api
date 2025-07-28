// Import Link
import { Link } from "react-router-dom";

// Componente che mostra una singola "card" prodotto
export default function ProductCard({ product }) {
  return (
    <>
      <div className="card h-100 border border-dark bg-white text-dark shadow">
        <Link to={`/products/${product?.id}`}>
          <img
            src={product?.image}
            className="card-img-top p-3"
            alt={product?.title}
            style={{ objectFit: "contain", height: "200px" }}
          />
        </Link>
        <div className="card-body d-flex flex-column">
          <Link
            to={`/products/${product?.id}`}
            className="text-decoration-none text-dark"
          >
            <h6 className="card-title fw-semibold">{product?.title}</h6>
          </Link>
          <p className="card-text text-muted text-capitalize small mb-2">
            {product?.category}
          </p>
          <div className="mt-auto d-flex justify-content-between align-items-center">
            <span className="fw-bold text-dark">
              ${product?.price?.toFixed(2)}
            </span>
            <button className="btn btn-outline-dark btn-sm">
              Aggiungi al carrello <i className="bi bi-cart-plus"></i>
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

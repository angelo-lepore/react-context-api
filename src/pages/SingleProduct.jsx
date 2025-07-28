// Import degli hook di React
import { useState, useEffect } from "react";

// Import gli hook del router
import { useParams, useNavigate } from "react-router-dom";

export default function SingleProduct() {
  const { id } = useParams();
  const urlProducts = `https://fakestoreapi.com/products/${id}`;
  const [product, setProducts] = useState();

  const navigate = useNavigate();
  const currentId = parseInt(id, 10);
  const prevId = currentId - 1;
  const nextId = currentId + 1;

  useEffect(() => {
    fetch(urlProducts)
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        console.log("Prodotto:", data);
      });
  }, [id]);

  return (
    <>
      {/* Pulsanti per navigare tra prodotti */}
      <div className="container py-3 d-flex justify-content-between">
        <button
          onClick={() => navigate(`/products/${prevId}`)}
          className="btn btn-outline-dark"
          disabled={currentId <= 1}
        >
          ← Prodotto precedente
        </button>
        <button
          onClick={() => navigate(`/products/${nextId}`)}
          className="btn btn-outline-dark"
          disabled={currentId >= 20}
        >
          Prodotto successivo →
        </button>
      </div>

      <main className="container py-5">
        <div className="card border border-dark shadow bg-white text-dark shadow">
          <div className="row g-0">
            {/* Immagine */}
            <div className="col-md-6 d-flex align-items-center justify-content-center p-4">
              <img
                src={product?.image}
                alt={product?.title}
                className="img-fluid"
                style={{ maxHeight: "400px", objectFit: "contain" }}
              />
            </div>

            {/* Contenuto */}
            <div className="col-md-6 p-5 d-flex flex-column justify-content-between">
              <div>
                <h2 className="fw-bold mb-3">{product?.title}</h2>
                <p className="text-muted text-capitalize">
                  {product?.category}
                </p>
                <p className="my-4">{product?.description}</p>
              </div>

              <div className="d-flex justify-content-between align-items-center mt-auto">
                <span className="fs-4 fw-bold">
                  ${product?.price?.toFixed(2)}
                </span>
                <button className="btn btn-outline-dark btn-lg">
                  Aggiungi al carrello <i className="bi bi-cart-plus"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

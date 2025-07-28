// Import Link
import { Link } from "react-router-dom";

export default function HomePage() {
  return (
    <>
      <main>
        <div className="container py-5">
          {/* Titolo di benvenuto */}
          <h1 className="display-4 text-center mb-3">Benvenuto su MyStore</h1>
          <p className="lead text-center mb-5">
            Il tuo negozio online di fiducia per prodotti di qualità, prezzi
            convenienti e consegna veloce.
          </p>

          {/* Immagine banner promozionale */}
          <div className="w-50 mx-auto mb-5">
            <img
              src="/img/online-shopping.png"
              alt="Offerta promozionale"
              className="img-fluid rounded shadow"
            />
          </div>

          {/* Sezione vantaggi */}
          <div className="row text-center mb-5">
            <div className="col-md-4 mb-4">
              <i className="bi bi-truck display-4 text-primary mb-3"></i>
              <h5>Spedizione Rapida</h5>
              <p className="text-muted">Consegna in 24/48h in tutta Italia.</p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-star-fill display-4 text-warning mb-3"></i>
              <h5>Prodotti di Qualità</h5>
              <p className="text-muted">
                Solo articoli selezionati e garantiti.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-shield-check display-4 text-success mb-3"></i>
              <h5>Pagamenti Sicuri</h5>
              <p className="text-muted">Transazioni protette e semplici.</p>
            </div>
          </div>

          {/* Tasto prodotti */}
          <div className="text-center">
            <Link
              to="/products"
              className="btn btn-dark text-light btn-lg px-5"
            >
              Esplora i Prodotti
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}

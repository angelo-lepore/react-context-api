// Import Footer
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <>
      <main>
        <div className="container py-5">
          <h1 className="display-4 text-center mb-4">Chi Siamo</h1>
          <p className="lead text-center mb-5">
            MyStore è il tuo negozio online di fiducia. La nostra missione è
            offrirti prodotti di qualità, prezzi competitivi e un servizio
            impeccabile.
          </p>

          <div className="row text-center mb-5">
            <div className="col-md-4 mb-4">
              <i className="bi bi-bullseye display-4 text-primary mb-3"></i>
              <h5>La Nostra Missione</h5>
              <p className="text-muted">
                Fornire un'esperienza di acquisto semplice e soddisfacente per
                tutti i nostri clienti.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-people-fill display-4 text-success mb-3"></i>
              <h5>Il Nostro Team</h5>
              <p className="text-muted">
                Un gruppo dedicato di professionisti appassionati e sempre
                pronti ad aiutarti.
              </p>
            </div>
            <div className="col-md-4 mb-4">
              <i className="bi bi-globe display-4 text-warning mb-3"></i>
              <h5>I Nostri Valori</h5>
              <p className="text-muted">
                Qualità, trasparenza, affidabilità e rispetto per l’ambiente.
              </p>
            </div>
          </div>

          {/* Informazioni di contatto e orari */}
          <div className="text-center">
            <h4 className="mb-3">Informazioni di contatto</h4>
            <p className="mb-1">
              <i className="bi bi-geo-alt-fill me-2"></i>
              Via Roma 123, 20100 Milano, Italia
            </p>
            <p className="mb-1">
              <i className="bi bi-telephone-fill me-2"></i>
              +39 02 1234 5678
            </p>
            <p>
              <i className="bi bi-clock-fill me-2"></i>
              Orari di apertura: Lun - Ven 9:00 - 19:00 | Sab 10:00 - 14:00
            </p>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}

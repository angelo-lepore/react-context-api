// Import Link
import { Link } from "react-router-dom";

export default function NotFoundPage() {
  return (
    <>
      <div className="d-flex flex-column justify-content-center align-items-center vh-100 bg-dark text-light text-center p-4">
        <div className="mb-4">
          <i className="bi bi-emoji-frown display-1 text-warning"></i>
        </div>
        <h1 className="display-3 fw-bold">404</h1>
        <p className="fs-4">Oops! The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-outline-light btn-lg mt-3">
          <i className="bi bi-house-door-fill me-2"></i> Go back home
        </Link>
      </div>
    </>
  );
}

// Import NavLink e Link
import { NavLink, Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark px-4">
        {/* Brand/logo */}
        <Link className="navbar-brand" to="/">
          <i className="bi bi-shop me-2"></i> MyStore
        </Link>

        {/* Bottone per mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Link centrati */}
        <div
          className="collapse navbar-collapse justify-content-center"
          id="navbarNav"
        >
          <ul className="navbar-nav gap-3">
            <li className="nav-item">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  "nav-link d-flex align-items-center gap-1" +
                  (isActive ? " active fw-bold" : "")
                }
              >
                <i className="bi bi-house-door-fill"></i> Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/products"
                className={({ isActive }) =>
                  "nav-link d-flex align-items-center gap-1" +
                  (isActive ? " active fw-bold" : "")
                }
              >
                <i className="bi bi-box-seam"></i> Products
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  "nav-link d-flex align-items-center gap-1" +
                  (isActive ? " active fw-bold" : "")
                }
              >
                <i className="bi bi-info-circle-fill"></i> About
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

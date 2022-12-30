import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const renderLoginLogout = () => {
    const userName = localStorage.getItem("email");

    if (localStorage.getItem("token") || localStorage.getItem("email")) {
      const handleLogout = () => {
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        window.location.href = "/";
      };
      return (
        <>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Register Food
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/food" className="nav-link">
              Food List
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/user" className="nav-link">
              Show User
            </Link>
          </li>
          <li className="nav-item dropdown">
            <p
              className="nav-link dropdown-toggle"
              data-bs-toggle="dropdown"
              style={{ color: "black" }}
              href="#"
              role="button"
            >
              <span className="orange">hi</span> {userName}
            </p>
            <ul className="dropdown-menu">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <Link to="/myprofile" className="nav-link">
                Profile
              </Link>
              <li>
                <hr className="dropdown-divider" />
              </li>
              <Link className="nav-link" onClick={handleLogout}>
                Logout
              </Link>
            </ul>
          </li>
        </>
      );
    }
    return (
      <li className="nav-item">
        <Link to="/login" className="nav-link">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          Login
        </Link>
      </li>
    );
  };
  return (
    <div className="container mb-3">
      <div
        className="navbar sticky-top navbar-expand-lg ms-2 me-2"
        style={{ borderBottom: "2px solid" }}
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to="/" className="navbar-brand">
          Goody <span className="orange">Foody</span>
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
          </ul>
          <ul class="nav justify-content-end mt-2">{renderLoginLogout()}</ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;

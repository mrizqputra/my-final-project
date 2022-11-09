import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
  const renderLoginLogout = () => {
    const userName = localStorage.getItem("email");

    if (localStorage.getItem("token") || localStorage.getItem("email")) {
      const handleLogout = () => {
        // TODO: jangan lupa delete session movieDBnya juga
        localStorage.removeItem("token");
        localStorage.removeItem("email");
        window.location.href = "/";
      };
      return (
        <>
          <li className="nav-item">
            <p className="nav-link" style={{ color: "black" }}>
              hi {userName}
            </p>
          </li>
          <li className="nav-item">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="nav-link" onClick={handleLogout}>
              Logout
            </a>
          </li>
          <li className="nav-item">
            <Link to="/register" className="nav-link">
              Register Member
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/foodlist" className="nav-link">
              Food List
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/changefooddata" className="nav-link">
              Change Data
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/showuser" className="nav-link">
              Show User
            </Link>
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
        style={{ borderBottom: "1px solid" }}
      >
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <Link to="/" className="navbar-brand">
          Goody Foody
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
          <ul class="nav justify-content-end ">
            {renderLoginLogout()}
            {/* <ul class="nav nav-pills">
              <li className="nav-item dropdown">
                <a
                  className="nav-link dropdown-toggle"
                  data-bs-toggle="dropdown"
                  href="#"
                  role="button"
                  aria-expanded="false"
                >
                  Profile
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/profile" className="nav-link">
                      Profile
                    </Link>
                  </li>
                </ul>
              </li>
            </ul> */}
          </ul>
        </div>
      </div>
    </div>
  );
}
export default Navbar;

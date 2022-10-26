import { Link } from "react-router-dom";

function Navbar() {
  const renderLoginLogout = () => {
    const userName = localStorage.getItem('userName');

    if (localStorage.getItem("sessionID") || localStorage.getItem("userName")) {
      const handleLogout = () => {
        // TODO: jangan lupa delete session movieDBnya juga
        localStorage.removeItem("sessionID");
        localStorage.removeItem("userName");
        window.location.href = "/";
      };
      return (
        <>
        <li className="nav-item">
          {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="nav-link" onClick={handleLogout}>
            Logout : {userName}
          </a>
        </li>
        </>
      );
    }
    return (
      <li className="nav-item">
        <Link to="/login">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
          <a className="nav-link">Login</a>
        </Link>
      </li>
    );
  };
  return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
        <a className="navbar-brand" href="#">
          Navbar
        </a>
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
              <Link to="/">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link">Home</a>
              </Link>
            </li>
            {renderLoginLogout()}
            <li className="nav-item">
              <Link to="/Register">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <a className="nav-link">Sign Up</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
export default Navbar;
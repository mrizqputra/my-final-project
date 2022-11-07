import { Link } from "react-router-dom";

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
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a className="nav-link" onClick={handleLogout}>
              Logout : {userName}
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
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            {renderLoginLogout()}
          </ul>
          {/* <ul class="nav justify-content-end">
            <ul class="nav nav-pills">
              <li className="nav-item dropdown"> */}
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                {/* <a
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
            </ul>
          </ul> */}
        </div>
      </div>
    </nav>
  );
}
export default Navbar;

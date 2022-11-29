import { useLocation, Link } from "react-router-dom";
import "./Breadcrumb.css";

function Breadcrumb() {
  const location = useLocation();
  console.log(location);

  return (
    <div className="container mb-3">
      <div className="nav" aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link to="/" className="breadcrumb-item">Home</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            {(location.pathname).split('/')}
          </li>
        </ol>
      </div>
    </div>
  );
}

export default Breadcrumb;

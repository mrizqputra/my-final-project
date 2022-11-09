import "./App.css";
import imgApple from "./img/apple.png";
import imgBanana from "./img/banana.png";
import Rectangle1 from "./img/Rectangle 1.png";
import Rectangle2 from "./img/Rectangle 2.png";
import Rectangle3 from "./img/Rectangle 3.png";
import { Link } from "react-router-dom";


function App() {
  return (
    <div className="container mb-3">
      <div className="row">
        <div className="col-12 col-sm-6 mb-3">
          <div className="homeText">
            Premium <span className="orange">Quality</span>
          </div>
          <div className="homeText">
            Food for Your
            <span className="orange"> Healthy</span>
            <span className="imgWrap">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <img src={imgBanana} alt="banana" />
            </span>
          </div>
          <div className="homeText">
            <span className="orange">& Daily Life</span>
            <span className="imgWrap2">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <img src={imgApple} alt="apple" />
            </span>
          </div>
          <div className="loRem">
            Goody Foody is food journal, can be used for manage your daily food and collect them to favourite menus.
          </div>
          <div className="row">
            <Link to="/register" className="homeButton ms-3">Sign Up</Link>
            <Link to="/login" className="homeButton ms-3">Login</Link>
          </div>
        </div>
        <div className="col-12 col-sm-6 mb-3">
          <div className="row">
            <div className="col-8 col-sm-8">
              {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
              <img
                className="rectangle1 img-fluid"
                src={Rectangle1}
                alt="rectangel_1"
              ></img>
            </div>
            <div className="col-4 col-sm-4">
              <div className="row">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <img
                  className="rectangle2 img-fluid"
                  src={Rectangle2}
                  alt="rectangel_2"
                ></img>
              </div>
              <div className="row">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <img
                  className="rectangle3 img-fluid"
                  src={Rectangle3}
                  alt="rectangel_3"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import "./App.css";
import imgApple from "./img/apple.png";
import imgBanana from "./img/banana.png";
import Rectangle1 from "./img/Rectangle 1.png";
import Rectangle2 from "./img/Rectangle 2.png";
import Rectangle3 from "./img/Rectangle 3.png";
import regisFood from "./img/regisFood.jpg";
import seeFood from "./img/seeFood.jpg";
import seeUser from "./img/seeUser.jpg";

import { Link } from "react-router-dom";

function App() {
  const renderHome = () => {
    if (localStorage.getItem("token")) {
      return (
        <>
          <div className="row mb-3">
            <div className="col-sm-12 col-md-6 mb-3 px-1">
              <div className="container-fluid text-center">
                <img
                  className="image-fluid mx-auto imgHomeLogin"
                  src={regisFood}
                  alt="homeImgLogin"
                />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 mb-3 px-1">
              <div className="container-fluid">
              <div className="h1 px-2">
                what your <span className="orange">favorite food?</span>
              </div>
              <div className="h5 px-2 justify-text">
                <span className="orange">
                  In Goody Foody you can add your favorite food on library. 
                </span>
                &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque suscipit eros et euismod porttitor. Aliquam erat
                volutpat. Vestibulum libero nisi, commodo volutpat aliquet at,
                aliquet quis diam. Curabitur sit amet ullamcorper nunc. In nec
                luctus dui. Aliquam euismod sapien et mi molestie, in gravida
                velit malesuada. Pellentesque eu finibus urna. Curabitur sit
                amet eleifend felis, non laoreet purus. Maecenas volutpat
                commodo tincidunt.
              </div>
              <Link to="/register" className="homeButton ms-3">
                Register Food
              </Link>
            </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-12 col-md-6 mb-3 order-md-2 px-1">
              <div className="container text-center">
                <img className="image-fluid mx-auto imgHomeLogin" src={seeFood} alt="homeImgLogin" />
              </div>
            </div>
            <div className="col-sm-12 col-md-6 mb-3 order-md-1 px-1">
              <div className="container-fluid">
              <div className="h1 px-2">
                what Goody Foody <span className="orange">inside?</span>
              </div>
              <div className="h5 px-2 justify-text">
                <span className="orange">
                  Goody Foody have a delicious and interest food on Goody Foody library. 
                </span>
                &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque suscipit eros et euismod porttitor. Aliquam erat
                volutpat. Vestibulum libero nisi, commodo volutpat aliquet at,
                aliquet quis diam. Curabitur sit amet ullamcorper nunc. In nec
                luctus dui. Aliquam euismod sapien et mi molestie, in gravida
                velit malesuada. Pellentesque eu finibus urna. Curabitur sit
                amet eleifend felis, non laoreet purus. Maecenas volutpat
                commodo tincidunt.
              </div>
              <Link to="/food" className="homeButton ms-3">
                Food List
              </Link>
            </div>
            </div>
          </div>
          <div className="row mb-3">
            <div className="col-sm-12 col-md-6 mb-3 px-1">
              <div className="container text-center">
                <img className="image-fluid mx-auto imgHomeLogin" src={seeUser} alt="homeImgLogin" />
              </div></div>
            <div className="col-sm-12 col-md-6 mb-3 px-1">
              <div className="h1 px-2">
                who use <span className="orange">Goody Foody?</span>
              </div>
              <div className="h5 px-2 justify-text">
                <span className="orange">
                  Some people use Goody Foody for cooking inspiration or relaxing the eye for seeing food. 
                </span>
                &nbsp;Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque suscipit eros et euismod porttitor. Aliquam erat
                volutpat. Vestibulum libero nisi, commodo volutpat aliquet at,
                aliquet quis diam. Curabitur sit amet ullamcorper nunc. In nec
                luctus dui. Aliquam euismod sapien et mi molestie, in gravida
                velit malesuada. Pellentesque eu finibus urna. Curabitur sit
                amet eleifend felis, non laoreet purus. Maecenas volutpat
                commodo tincidunt.
              </div>
              <Link to="/user" className="homeButton ms-3">
                Show User
              </Link>
            </div>
          </div>
        </>
      )
    }
    return (
      <>
        <div className="row">
          <div className="col-12 col-sm-6 mb-5 text-width">
            <div className="h1 mb-4">
              Premium <span className="orange">Quality</span>
            </div>
            <div className="h1 mb-4">
              Food for Your
              <span className="orange"> Healthy</span>
              <span className="imgWrap">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <img src={imgBanana} alt="banana" className="imgLogo1" />
              </span>
            </div>
            <div className="h1 mb-4">
              <span className="orange">& Daily Life</span>
              <span className="imgWrap2">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <img src={imgApple} alt="apple" className="imgLogo" />
              </span>
            </div>
            <div className="h4 mt-5 mb-3 justify-text">
              Goody Foody is food journal, can be used for manage your daily
              food and collect them to favourite menus.
            </div>
            <div className="row">
              <Link to="/signup" className="homeButton ms-3">
                Sign Up
              </Link>
              <Link to="/login" className="homeButton ms-3">
                Login
              </Link>
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
                    className="rectangle2 img-fluid mt-3 mb-2"
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
      </>
    );
  };

  return <div className="container mb-3">{renderHome()}</div>;
}

export default App;

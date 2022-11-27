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
          <div className="row">
            <div className="col-12 col-sm-6 mb-3 px-1">
              <img
                className="homeImgLogin image-fluid"
                src={regisFood}
                alt="homeImgLogin"
              />
            </div>
            <div className="col-12 col-sm-6 mb-3 px-1">
              <div className="homeText px-2">
                what your <span className="orange">favorite food?</span>
              </div>
              <p className="px-2">
                <span className="orange">
                  In Goody Foody you can add your favorite food on library.
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque suscipit eros et euismod porttitor. Aliquam erat
                volutpat. Vestibulum libero nisi, commodo volutpat aliquet at,
                aliquet quis diam. Curabitur sit amet ullamcorper nunc. In nec
                luctus dui. Aliquam euismod sapien et mi molestie, in gravida
                velit malesuada. Pellentesque eu finibus urna. Curabitur sit
                amet eleifend felis, non laoreet purus. Maecenas volutpat
                commodo tincidunt. Donec dignissim mauris sit amet diam
                consectetur hendrerit. Maecenas metus quam, hendrerit et ipsum
                non, consectetur sodales enim. Curabitur sit amet nibh non ipsum
                malesuada iaculis. Nulla facilisi. Pellentesque tincidunt
                tincidunt luctus. Sed in eleifend ipsum. Nam ex nunc, dignissim
                at imperdiet eu, varius vel tortor.
              </p>
              <Link to="/registerfood" className="homeButton ms-3">
                Register Food
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 mb-3 order-1 order-sm-2 px-1">
              <img className="homeImgLogin image-fluid" src={seeFood} alt="homeImgLogin" />
            </div>
            <div className="col-12 col-sm-6 mb-3 order-2 order-sm-1 px-1">
            <div className="homeText">
                what Goody Foody <span className="orange">inside?</span>
              </div>
              <p>
                <span className="orange">
                  Goody Foody have a delicious and interest food on Goody Foody library.
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque suscipit eros et euismod porttitor. Aliquam erat
                volutpat. Vestibulum libero nisi, commodo volutpat aliquet at,
                aliquet quis diam. Curabitur sit amet ullamcorper nunc. In nec
                luctus dui. Aliquam euismod sapien et mi molestie, in gravida
                velit malesuada. Pellentesque eu finibus urna. Curabitur sit
                amet eleifend felis, non laoreet purus. Maecenas volutpat
                commodo tincidunt. Donec dignissim mauris sit amet diam
                consectetur hendrerit. Maecenas metus quam, hendrerit et ipsum
                non, consectetur sodales enim. Curabitur sit amet nibh non ipsum
                malesuada iaculis. Nulla facilisi. Pellentesque tincidunt
                tincidunt luctus. Sed in eleifend ipsum. Nam ex nunc, dignissim
                at imperdiet eu, varius vel tortor.
              </p>
              <Link to="/foodlist" className="homeButton ms-3">
                Food List
              </Link>
            </div>
          </div>
          <div className="row">
            <div className="col-12 col-sm-6 mb-3 px-1">
              <img className="homeImgLogin image-fluid" src={seeUser} alt="homeImgLogin" />
            </div>
            <div className="col-12 col-sm-6 mb-3 px-1">
            <div className="homeText">
                who use <span className="orange">Goody Foody?</span>
              </div>
              <p>
                <span className="orange">
                  Some people use Goody Foody for cooking inspiration or relaxing the eye for seeing food.
                </span>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Pellentesque suscipit eros et euismod porttitor. Aliquam erat
                volutpat. Vestibulum libero nisi, commodo volutpat aliquet at,
                aliquet quis diam. Curabitur sit amet ullamcorper nunc. In nec
                luctus dui. Aliquam euismod sapien et mi molestie, in gravida
                velit malesuada. Pellentesque eu finibus urna. Curabitur sit
                amet eleifend felis, non laoreet purus. Maecenas volutpat
                commodo tincidunt. Donec dignissim mauris sit amet diam
                consectetur hendrerit. Maecenas metus quam, hendrerit et ipsum
                non, consectetur sodales enim. Curabitur sit amet nibh non ipsum
                malesuada iaculis. Nulla facilisi. Pellentesque tincidunt
                tincidunt luctus. Sed in eleifend ipsum. Nam ex nunc, dignissim
                at imperdiet eu, varius vel tortor.
              </p>
              <Link to="/showuser" className="homeButton ms-3">
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
          <div className="col-12 col-sm-6 mb-3">
            <div className="homeText">
              Premium <span className="orange">Quality</span>
            </div>
            <div className="homeText">
              Food for Your
              <span className="orange"> Healthy</span>
              <span className="imgWrap">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <img src={imgBanana} alt="banana" className="imgLogo"/>
              </span>
            </div>
            <div className="homeText">
              <span className="orange">& Daily Life</span>
              <span className="imgWrap2">
                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                <img src={imgApple} alt="apple" className="imgLogo"/>
              </span>
            </div>
            <div className="loRem">
              Goody Foody is food journal, can be used for manage your daily
              food and collect them to favourite menus.
            </div>
            <div className="row">
              <Link to="/register" className="homeButton ms-3">
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
      </>
    );
  };

  return <div className="container mb-3">{renderHome()}</div>;
}

export default App;

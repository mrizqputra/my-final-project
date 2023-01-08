import axios from "axios";
import React, { useEffect, useState} from "react";
import { Link } from "react-router-dom";
import "./homefood.css";

function Homefood() {
  // code for getting food data
  useEffect(() => {
    // Promise
    axios({
      method: "get",
      url: `https://api-bootcamp.do.dibimbing.id/api/v1/foods`,
      headers: {
        apiKey: `w05KkI9AWhKxzvPFtXotUva-`,
      },
    })
      .then(function (response) {
        console.log(response);
        setFoodList(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
        alert("ada error, coba reload halaman");
      });
  }, []);

  const [foodList, setFoodList] = useState([]);

  // when token is on localStorage, this function will be called or not
  const renderGetFood = () => {
    if (localStorage.getItem("token")) {
      return null;
    }
    return (
      <>
        <div className="text-center">
          <h3>
            <span className="orange">
              <u>below is food on Goody Foody library</u>
            </span>
          </h3>
        </div>
        <div className="row">
          {foodList.slice(0, 8).map((item) => {
            console.log(item);
            return (
              <>
                <div className="col-6 col-md-3 p-1">
                  <div className="cardHome">
                    <div className="card-body">
                      <img
                        className="foodlist_img img-fluid"
                        src={item.imageUrl}
                        style={{ height: "12rem", width: "12rem" }}
                        alt="food list img"
                      />
                      <div className="card-text h6">{item.name}</div>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
        <div className="text-center my-3">
          <h3>
            please{" "}
            <span className="orange">
              <Link to='/login' className="orange text-decoration-none">login</Link>
            </span>{" "}
            or{" "}
            <span className="orange">
              <Link to='/register' className="orange text-decoration-none">sign up</Link>
            </span>{" "}
            to explorer
          </h3>
        </div>
      </>
    );
  };

  return <div className="container mb-3">{renderGetFood()}</div>;
}

export default Homefood;

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./homefood.css";

function Homefood() {
  // code for getting food data
  useEffect(() => {
    // Promise
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BASE_URL}/api/v1/foods`,
      headers: {
        apiKey: `${process.env.REACT_APP_API_KEY}`,
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
      return null
    }
    return (
      <>
        <div className="text-center">
          <h3>
            <span className="orange">
              <u>This is Food at Goody Foody</u>
            </span>
          </h3>
        </div>
        <div className="row">
          {foodList.slice(0, 4)
            .map((item) => {
              console.log(item);
              return (
                <>
                  <div className="col-6 col-md-3 p-1">
                    <div className="cardHome">
                      <div className="card-body">
                        <div className="card-title h5">{item.name}</div>
                        <img
                          className="foodlist_img img-fluid"
                          src={item.imageUrl}
                          style={{ height: "12rem", width: "12rem" }}
                          alt="food list img"
                        />
                        <div className="card-text h6">{item.name}</div>
                        <div className="card-text h6">
                          Desciption: {item.description}
                        </div>
                        <div className="card-text h6">
                          ingredients: {item.ingredients.join(", ")}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )
            })
            // code for limiting the number of data items
            }
        </div>
      </>
    );
  };

  return <div className="container mb-3">{renderGetFood()}</div>;
}

export default Homefood;

import axios from "axios";
import React, { useEffect, useState } from "react";
import "./foodlist.css";

function Homefood() {
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

  const renderGetFood = () => {
    if (localStorage.getItem("token")) {
      return null;
    }
    return (
      <>
            <div className="text-center">
        <h3>
          <span className="orange"><u>This is Food at Goody Foody</u></span>
        </h3>
      </div>
      <div className="row">
        {foodList.map((item) => {
          console.log(item);
          return (
            <>
              <div className="col-6 col-md-3 p-1">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    {/* <h6 className="card-subtitle mb-2 text-muted">ID: {item.id}</h6> */}
                    <img
                      className="foodlist_img"
                      src={item.imageUrl}
                      style={{ height: "12rem", width: "12rem" }}
                      alt="food list img"
                    />
                    <h3 className="card-text">{item.name}</h3>
                    <h4 className="card-text">
                      Desciption: {item.description}
                    </h4>
                    <p className="card-text">ingredients: {item.ingredients}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
      </>
    )
  }

  return (
    <div className="container mb-3">
      {renderGetFood()}
    </div>
  );
}

export default Homefood;

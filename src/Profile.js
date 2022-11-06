import axios from "axios";
// import { useFormik } from "formik";
// import * as Yup from "yup";
import React, { useState, useEffect } from "react";
// import Upload from "./Upload";

function Profile() {
    const [userGet, setUserGet] = useState([]);

    useEffect(() => {
        // Promise
        axios({
          method: "get",
          url: `${process.env.REACT_APP_BASE_URL}/api/v1/user`,
          headers: {
            apiKey: `${process.env.REACT_APP_API_KEY}`,
            Authorization: `Bearer ${localStorage.getItem(`token`)}`,
          },
        })
          .then(function (response) {
            console.log(response);
            setUserGet(response.data.user);
          })
          .catch(function (error) {
            console.error(error);
            alert("ada error, coba reload halaman");
          });
      }, []);
    
      return (
        // <row className="App">
        <>
          {userGet.map((item) => {
            console.log(item);
            return (
              <div>
                <div
                  className="card col-6"
                  // style={{ width: "18rem" }}
                >
                  <div className="card-body">
                    <h5 className="card-title">{item.name}</h5>
                    <h6 className="card-subtitle mb-2 text-muted">ID: {item.id}</h6>
                    {/* <img
                      className="foodlist_img"
                      // src={item.profilePictureUrl}
                      style={{ height: "12rem", width: "12rem" }}
                      alt="user list img"
                    /> */}
                    <h3 className="card-text">{item.name}</h3>
                    <p className="card-text">Email: {item.email}</p>
                    <p className="card-text">Role: {item.role}</p>
                    <p className="card-text">phone number: {item.phoneNumber}</p>
                  </div>
                </div>
              </div>
            );
          })}
          </>
        // </row>
      );
    
}

export default Profile;
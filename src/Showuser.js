import axios from "axios";
import React, { useEffect, useState } from "react";
import "./Showuser.css";

function Showuser() {
  const [userList, setUserList] = useState([]);

  useEffect(() => {
    // Promise
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BASE_URL}/api/v1/all-user`,
      headers: {
        apiKey: `${process.env.REACT_APP_API_KEY}`,
        Authorization: `Bearer ${localStorage.getItem(`token`)}`,
      },
    })
      .then(function (response) {
        console.log(response);
        setUserList(response.data.data);
      })
      .catch(function (error) {
        console.error(error);
        alert("ada error, coba reload halaman");
      });
  }, []);

  return (
    <div className="container mb-3">
      <div className="container">
        <div className="row">
          {userList.map((item) => {
            console.log(item);
            return (
              <div className="col-5 col-md-3 mb-3">
                <div className="card p-1 align-items-center">
                  <div className="card-body">
                    {/* <h5 className="card-title">{item.name}</h5> */}
                    <h6 className="card-subtitle mb-2 text-muted">
                      ID: {item.id}
                    </h6>
                    <img
                      className="user_img img-fluid"
                      src={item.profilePictureUrl}
                      style={{ height: "12rem", width: "12rem" }}
                      alt="user list img"
                    />
                    <h3 className="card-text">{item.name}</h3>
                    <p className="card-text">Email: {item.email}</p>
                    <p className="card-text">Role: {item.role}</p>
                    <p className="card-text">
                      phone number: {item.phoneNumber}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Showuser;

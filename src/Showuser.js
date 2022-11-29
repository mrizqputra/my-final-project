import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import Upload from "./Upload";
import "./Showuser.css";

function Showuser() {
  const [userList, setUserList] = useState([]);

  const [fileToUpload, setFileToUpload] = useState("");

  const getUserData = () => {
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
  };

  useEffect(() => {
    getUserData();
  }, []);


  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      role: "",
      phoneNumberEdit: "",
    },
    validationSchema: Yup.object({
      // name: Yup.string()
      //   .min(6, 'Must be 6 characters or more')
      //   .max(15, 'Must be 15 characters or less')
      // .required("Required"),
      // email: Yup.string()
      //   .required('Required'),
      // password: Yup.string()
      //   .min(8, 'Must be 8 characters or more')
      //   .max(20, 'Must be 20 characters or less')
      //   .required('Required'),
      // passwordRepeat: Yup.string()
      //   .min(8, 'Must be 8 characters or more')
      //   .max(20, 'Must be 20 characters or less')
      //   .required('Required'),
      // role: Yup.object()
      //   .required('Required'),
      // phoneNumber: Yup.string()
      //   .required('Required')
    }),
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(fileToUpload);
    console.log(formik.values);
    const values = formik.values;
    axios({
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}/api/v1/update-profile`,
      headers: {
        apiKey: `${process.env.REACT_APP_API_KEY}`,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        name: values.name,
        email: values.email,
        profilePictureUrl: fileToUpload,
        phoneNumber: values.phoneNumber,
        imageUrl: fileToUpload,
      },
    })
      .then((response) => {
        alert("edit profile success!");
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
    getUserData();
  };

  const handleRole = (e, id) => {
    console.log(id);
    e.preventDefault();
    const values = formik.values;
    console.log(values.role);
    axios({
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}/api/v1/update-user-role/${id}`,
      headers: {
        apiKey: `${process.env.REACT_APP_API_KEY}`,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        role: values.role,
      },
    })
      .then((response) => {
        alert("edit role success!");
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
    getUserData();
  };

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
                                    {/* <!-- Button trigger modal --> */}
                <button
                  type="button"
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target="#editProfile"
                >
                  Edit Profile
                </button>
                <button
                  type="button"
                  onClick={() => handleRole(item.id)}
                  className="btn btn-primary"
                  data-bs-toggle="modal"
                  data-bs-target={`#roleModal-${item.id}`}
                >
                  Edit Role
                </button>
                  </div>
                </div>

                {/* <!-- Modal --> */}
                <div
                  class="modal fade"
                  id="editProfile"
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          edit your profile: {item.id}
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div className="container-fluid">
                          {/* <img src={logo} alt="logo" className="img-fluid mx-auto d-block img_set"/> */}
                          <form onSubmit={handleSubmit}>
                            <div className="container-fluid">
                              <div className="mb-3">
                                <label
                                  for="inputName"
                                  className="form-label input_label"
                                >
                                  Previous name is: {item.name}
                                </label>
                                <input
                                  id="name"
                                  name="name"
                                  type="text"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.name}
                                  className="input-group mb-3 input_box mx-auto"
                                />
                                {/* check error or not */}
                                {formik.touched.username && formik.errors.username ? (
                                  <div>{formik.errors.username}</div>
                                ) : null}
                              </div>
                              <div className="mb-3">
                                <label
                                  for="inputEmail"
                                  className="form-label input_label"
                                >
                                  Previous email is: {item.email}
                                </label>
                                <input
                                  id="email"
                                  name="email"
                                  type="email"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.email}
                                  className="input-group mb-3 input_box mx-auto"
                                />
                                {/* check error or not */}
                                {formik.touched.email && formik.errors.email ? (
                                  <div>{formik.errors.email}</div>
                                ) : null}
                              </div>
                              <div className="mb-3">
                                <label
                                  for="phoneNumber"
                                  className="form-label input_label"
                                >
                                  Previous Phone Number is: {item.phoneNumber}
                                </label>
                                <input
                                  id="phoneNumber"
                                  name="phoneNumber"
                                  type="text"
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.phoneNumber}
                                  className="input-group mb-3 input_box mx-auto"
                                />
                                {/* check error or not */}
                                {formik.touched.phoneNumber &&
                                  formik.errors.phoneNumber ? (
                                  <div>{formik.errors.phoneNumber}</div>
                                ) : null}
                              </div>
                              <div className="mb-3">
                                <div className="input_label">
                                  Previous image profile
                                </div>
                                <img
                                  className="foodlist_img img-fluid input_label "
                                  src={item.profilePictureUrl}
                                  style={{ height: "12rem", width: "12rem" }}
                                  alt="user list img"
                                />
                              </div>
                              <div className="mb-3">
                                <label
                                  for="upload image"
                                  className="form-label input_label"
                                >
                                  Upload Your Image Profile
                                </label>
                                <Upload
                                  onChange={(value) => setFileToUpload(value)}
                                />
                              </div>
                              <button
                                type="submit"
                                className="btn btn-primary button_login"
                                data-bs-dismiss="modal"
                              >
                                Submit
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* <!-- Role Modal --> */}
                <div
                  class="modal fade"
                  id={`roleModal-${item.id}`}
                  tabindex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div class="modal-dialog">
                    <div class="modal-content">
                      <div class="modal-header">
                        <h1 class="modal-title fs-5" id="exampleModalLabel">
                          edit your role: {item.id}
                        </h1>
                        <button
                          type="button"
                          class="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div class="modal-body">
                        <div className="container-fluid">
                          <form onSubmit={(e) => handleRole(e, item.id)}>
                            <div className="container-fluid">
                              <div className="mb-3">
                                <label
                                  for="selectRole"
                                  className="form-label input_label"
                                >
                                  Choice your Role
                                </label>
                                <select
                                  onChange={formik.handleChange}
                                  onBlur={formik.handleBlur}
                                  value={formik.values.role}
                                  component="select"
                                  id="role"
                                  name="role"
                                  multiple={false}
                                  className="form-select input_box mx-auto mb-3"
                                >
                                  <option selected>Open this select menu</option>
                                  <option value="admin">Admin</option>
                                  <option value="client">Client</option>
                                </select>
                                <button
                                  type="submit"
                                  className="btn btn-primary button_login"
                                  data-bs-dismiss="modal"
                                >
                                  Submit
                                </button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
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

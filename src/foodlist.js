import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Upload from "./Upload";
import "./starrating.css";

function Foodlist() {
  useEffect(() => {
    // Promise
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BASE_URL}/api/v1/foods`,
      headers: {
        apiKey: `${process.env.REACT_APP_API_KEY}`,
        Authorization: `Bearer ${localStorage.getItem(`token`)}`,
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

  // import images url
  const [fileToUpload, setFileToUpload] = useState("");

  const [ingredients, setEditIngredients] = useState([""]);

  const handleAddEditIngredients = () => {
    setEditIngredients([...ingredients, ""]);
  };

  const handleRemoveEditIngredients = (index) => {
    const values = [...ingredients];
    setEditIngredients(values);
    if (index >= 1) {
      values.splice(index, 1);
    }
  };

  const handleCHangeEditIngredients = (index, value) => {
    const values = [...ingredients];
    values[index] = value;
    setEditIngredients(values);
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      ingredients: [],
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      // ingredients: Yup.string().required('Required'),
    }),
    // onSubmit: (e, id) => {
    //   console.log(fileToUpload);
    //   console.log(formik.values)
    //   const values = formik.values;
    //   axios({
    //     method: "post",
    //     url: `${process.env.REACT_APP_BASE_URL}/api/v1/update-food/${id}`,
    //     headers: {
    //       apiKey: `${process.env.REACT_APP_API_KEY}`,
    //       Authorization: `Bearer ${localStorage.getItem("token")}`,
    //     },
    //     data: {
    //       name: values.name,
    //       description: values.description,
    //       imageUrl: fileToUpload,
    //       ingredients: ingredients,
    //     },
    //   })
    //     .then((response) => {
    //       alert("edit makanan berhasil!");
    //       console.log(response);
    //     })
    //     .catch((error) => {
    //       console.error(error);
    //     });
    // },
  });

  // const handleName = (event) => {
  //   console.log(event.target.value)
  //   setName(event.target.value)
  // }
  // const handleDescription = (event) => {
  //   console.log(event.target.value)
  //   setDescription(event.target.value)
  // }
  // const handleImage = (event) => {
  //   console.log(event.target.value)
  //   setImage(event.target.value)
  // }
  // const handlePrice = (event) => {
  //   console.log(event.target.value)
  //   setPrice(event.target.value)
  // }
  // const handleNameEdit = (event) => {
  //   console.log(event.target.value)
  //   setNameEdit(event.target.value)
  // }
  // const handleDescriptionEdit = (event) => {
  //   console.log(event.target.value)
  //   setDescriptionEdit(event.target.value)
  // }
  // const handleImageEdit = (event) => {
  //   console.log(event.target.value)
  //   setImageEdit(event.target.value)
  // }
  // const handlePriceEdit = (event) => {
  //   console.log(event.target.value)
  //   setPriceEdit(event.target.value)
  // }
  // const handleSubmit = () => {
  //   axios({
  //     method: 'post',
  //     url: `${BASE_URL}/product`,
  //     data: {
  //       name: name,
  //       description: description,
  //       image: image,
  //       price: price,
  //     }
  //   }).then((response) => {
  //     console.log(response)
  //     window.location.reload()
  //   }).catch((error) => {
  //     console.error(error)
  //   })
  // }

  const handleSubmit = (e, id) => {
    e.preventDefault();
    console.log(fileToUpload);
    console.log(formik.values)
    const values = formik.values;
    axios({
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}/api/v1/update-food/${id}`,
      headers: {
        apiKey: `${process.env.REACT_APP_API_KEY}`,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        name: values.name,
        description: values.description,
        imageUrl: fileToUpload,
        ingredients: ingredients,
      },
    })
      .then((response) => {
        alert("edit makanan berhasil!");
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
  }

  const handleEdit = (id) => {
    if (window.confirm("are you sure you want to edit?")) {
      axios({
        method: "get",
        url: `${process.env.REACT_APP_BASE_URL}/api/v1/foods/${id}`,
        headers: {
          apiKey: `${process.env.REACT_APP_API_KEY}`,
          Authorization: `Bearer ${localStorage.getItem(`token`)}`,
        },
      })
        .then((response) => {
          console.log(response);
          // setEditFoodList(response.data);
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const [editFoodList, setEditFoodList] = useState([]);
  // const [nameEdit, setNameEdit] = useState('')
  // const [descriptionEdit, setDescriptionEdit] = useState('')
  // const [idEdit, setIdEdit] = useState('')
  // const [imageUrlEdit, setImageUrl] = useState('')
  // const [ingredientsEdit, setIngredientsEdit] = useState([])

  const handleDelete = (id) => {
    if (window.confirm("are you sure you want to delete?")) {
      // kalo user klik ok
      axios({
        method: "delete",
        url: `${process.env.REACT_APP_BASE_URL}/api/v1/delete-food/${id}`,
        headers: {
          apiKey: `${process.env.REACT_APP_API_KEY}`,
          Authorization: `Bearer ${localStorage.getItem(`token`)}`,
        },
      })
        .then((response) => {
          console.log(response);
          window.location.reload();
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleLike = (id, isLike) => {
    console.log(isLike);
    if (!isLike) {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_BASE_URL}/api/v1/like`,
        headers: {
          apiKey: `${process.env.REACT_APP_API_KEY}`,
          Authorization: `Bearer ${localStorage.getItem(`token`)}`,
        },
        data: {
          foodId: id,
        },
      })
        .then((response) => {
          console.log(response);
          alert("like success");
          // window.location.reload()
        })
        .catch((error) => {
          console.error(error);
        });
    } else {
      axios({
        method: "post",
        url: `${process.env.REACT_APP_BASE_URL}/api/v1/unlike`,
        headers: {
          apiKey: `${process.env.REACT_APP_API_KEY}`,
          Authorization: `Bearer ${localStorage.getItem(`token`)}`,
        },
        data: {
          foodId: id,
        },
      })
        .then((response) => {
          console.log(response);
          alert("unlike success");
          // window.location.reload()
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  // rating function
  function myFunction() {
    var five = document.getElementById("1-star").checked;
    document.getElementById("one").innerHTML = five;
  }

  return (
    <row className="App row">
      {foodList.map((item) => {
        console.log(item);
        return (
          <>
          <div
            className="card col-5 mb-2 me-2"
            // style={{ width: "18rem" }}
          >
            <div className="card-body">
              <h5 className="card-title">{item.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">ID: {item.id}</h6>
              <img
                className="foodlist_img"
                src={item.imageUrl}
                style={{ height: "12rem", width: "12rem" }}
                alt="food list img"
              />
              <h3 className="card-text">{item.name}</h3>
              <h4 className="card-text">Desciption: {item.description}</h4>
              <p className="card-text">ingredients: {item.ingredients}</p>
              <div className="row">
                <p className="card-text col-1">{item.rating}</p>
                <div className="col-5 flex">
                  <div class="star-rating">
                    <input type="radio" id="5-stars" name="rating" value="5" />
                    <label for="5-stars" class="star">
                      &#9733;
                    </label>
                    <input type="radio" id="4-stars" name="rating" value="4" />
                    <label for="4-stars" class="star">
                      &#9733;
                    </label>
                    <input type="radio" id="3-stars" name="rating" value="3" />
                    <label for="3-stars" class="star">
                      &#9733;
                    </label>
                    <input type="radio" id="2-stars" name="rating" value="2" />
                    <label for="2-stars" class="star">
                      &#9733;
                    </label>
                    <input type="radio" id="1-star" name="rating" value="1" />
                    <label for="1-star" class="star">
                      &#9733;
                    </label>
                    <p id="one" onclick={myFunction}></p>
                  </div>
                </div>
                <div className="col-6 flex">
                  <button
                    className="btn"
                    onClick={() => handleLike(item.id, item.isLike)}
                    type="button"
                  >
                    {/* <p className="card-text"> */}
                    {item.totalLikes}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      class="bi bi-heart ms-1"
                      style={{ color: `${item.isLike ? "red" : ""}` }}
                      viewBox="0 0 16 16"
                    >
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg>
                    {/* </p> */}
                  </button>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <button
                    type="button"
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-outline-danger"
                  >
                    Delete
                  </button>
                </div>
                <div className="col-6">
                  <button
                    data-bs-toggle="modal"
                    data-bs-target={`#exampleModal-${item.id}`}
                    
                    onClick={() => handleEdit(item.id)}
                    className="btn btn-outline-warning"
                  >
                    edit
                  </button>
                </div>
              </div>
            </div>
          </div>
                    <div
                    class="modal fade"
                    id={`exampleModal-${item.id}`}
                    tabindex="-1"
                    aria-labelledby="exampleModalLabel"
                    aria-hidden="true"
                  >
                    <div class="modal-dialog">
                      <div class="modal-content">
                        <div class="modal-header">
                          <h1 class="modal-title fs-5" id="exampleModalLabel">
                            do you want to edit data : {item.id}
                          </h1>
                          <button
                            type="button"
                            class="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                          ></button>
                        </div>
                        <div class="modal-body">
                          <h3>Latest Food Data</h3>
                          <h5>name: {item.name}</h5>
                          <h5>description: {null}</h5>
                          <h5>ingredients: {null}</h5>
                          <img
                            src={null}
                            style={{ height: "12rem", width: "12rem" }}
                            alt="food list img"
                          />
                          ========================================
                          <form
                            className="row g-3"
                            onSubmit={(e) => handleSubmit(e, item.id)}
                          >
                            <div className="col-md-6">
                              <label for="inputName" className="form-label">
                                Food Name
                              </label>
                              <input
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="text"
                                className="input-group mb-3"
                                id="name"
                              />
                            </div>
                            {formik.touched.name && formik.errors.name ? (
                              <div>{formik.errors.name}</div>
                            ) : null}
                            <div className="col-md-6">
                              <label for="inputAge" className="form-label">
                                Description
                              </label>
                              <input
                                value={formik.values.description}
                                onChange={formik.handleChange}
                                onBlur={formik.handleBlur}
                                type="text"
                                className="input-group mb-3"
                                id="description"
                              />
                            </div>
                            {formik.touched.description && formik.errors.description ? (
                              <div>{formik.errors.description}</div>
                            ) : null}
                            <div className="col-md-6">
                              <label for="inputFoodImage" className="form-label">
                                Food Image Upload
                              </label>
                              <Upload onChange={(value) => setFileToUpload(value)} />
                            </div>
                            {ingredients.map((ingredient, index) => {
                              return (
                                <div className="col-md-6">
                                  <label for="inputIngredient" className="form-label">
                                    Ingredients
                                  </label>
                                  <div className="d-flex">
                                    <input
                                      onBlur={formik.handleBlur}
                                      type="text"
                                      className="input-group mb-3"
                                      id="ingredients"
                                      value={ingredient}
                                      onChange={(event) =>
                                        handleCHangeEditIngredients(
                                          index,
                                          event.target.value
                                        )
                                      }
                                    />
                                    <button
                                      className="btn btn-warning"
                                      onClick={() => handleAddEditIngredients()}
                                      type="button"
                                    >
                                      Add
                                    </button>
                                    <button
                                      className="btn btn-warning"
                                      onClick={() => handleRemoveEditIngredients(index)}
                                      type="button"
                                    >
                                      Delete
                                    </button>
                                  </div>
                                  {formik.touched.ingredients &&
                                  formik.errors.ingredients ? (
                                    <div>{formik.errors.ingredients}</div>
                                  ) : null}
                                </div>
                              );
                            })}
                            <div className="col-12">
                              <button type="submit" className="btn btn-primary">
                                Edit Food
                              </button>
                            </div>
                          </form>
                        </div>
                        {/* <div class="modal-footer">
                            <button
                              type="button"
                              class="btn btn-secondary"
                              data-bs-dismiss="modal"
                            >
                              Close
                            </button>
                            <button type="submit" class="btn btn-primary">
                              Edit Food Data
                            </button>
                          </div> */}
                      </div>
                    </div>
                  </div>
</>        
        );
      })}
      {/* below is modal for edit food data */}
      {/* {editFoodList.map((items) => {
        console.log(items);
        return (
          <div
            class="modal fade"
            id={`exampleModal-${items.id}`}
            tabindex="-1"
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
          >
            <div class="modal-dialog">
              <div class="modal-content">
                <div class="modal-header">
                  <h1 class="modal-title fs-5" id="exampleModalLabel">
                    do you want to edit data : {null}
                  </h1>
                  <button
                    type="button"
                    class="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>
                <div class="modal-body">
                  <h3>Latest Food Data</h3>
                  <h5>name: {null}</h5>
                  <h5>description: {null}</h5>
                  <h5>ingredients: {null}</h5>
                  <img
                    src={null}
                    style={{ height: "12rem", width: "12rem" }}
                    alt="food list img"
                  />
                  ========================================
                  <form
                    className="row g-3"
                    onSubmit={() => formik.handleSubmit(null)}
                  >
                    <div className="col-md-6">
                      <label for="inputName" className="form-label">
                        Food Name
                      </label>
                      <input
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        className="input-group mb-3"
                        id="name"
                      />
                    </div>
                    {formik.touched.name && formik.errors.name ? (
                      <div>{formik.errors.name}</div>
                    ) : null}
                    <div className="col-md-6">
                      <label for="inputAge" className="form-label">
                        Description
                      </label>
                      <input
                        value={formik.values.description}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        type="text"
                        className="input-group mb-3"
                        id="description"
                      />
                    </div>
                    {formik.touched.description && formik.errors.description ? (
                      <div>{formik.errors.description}</div>
                    ) : null}
                    <div className="col-md-6">
                      <label for="inputFoodImage" className="form-label">
                        Food Image Upload
                      </label>
                      <Upload onChange={(value) => setFileToUpload(value)} />
                    </div>
                    {ingredients.map((ingredient, index) => {
                      return (
                        <div className="col-md-6">
                          <label for="inputIngredient" className="form-label">
                            Ingredients
                          </label>
                          <div className="d-flex">
                            <input
                              onBlur={formik.handleBlur}
                              type="text"
                              className="input-group mb-3"
                              id="ingredients"
                              value={ingredient}
                              onChange={(event) =>
                                handleCHangeEditIngredients(
                                  index,
                                  event.target.value
                                )
                              }
                            />
                            <button
                              className="btn btn-warning"
                              onClick={() => handleAddEditIngredients()}
                              type="button"
                            >
                              Add
                            </button>
                            <button
                              className="btn btn-warning"
                              onClick={() => handleRemoveEditIngredients(index)}
                              type="button"
                            >
                              Delete
                            </button>
                          </div>
                          {formik.touched.ingredients &&
                          formik.errors.ingredients ? (
                            <div>{formik.errors.ingredients}</div>
                          ) : null}
                        </div>
                      );
                    })}
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">
                        Edit Food
                      </button>
                    </div>
                  </form>
                </div>
                {/* <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      Close
                    </button>
                    <button type="submit" class="btn btn-primary">
                      Edit Food Data
                    </button>
                  </div> 
              </div>
            </div>
          </div>
        );
      })} */}
      {/* end of modal feature */}
    </row>
  );
}

export default Foodlist;

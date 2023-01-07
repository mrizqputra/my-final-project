import axios from "axios";
import React, { useEffect, useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import Upload from "./Upload";
import "./foodlist.css";

function Foodlist() {
  const getFoodData = () => {
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
  };

  useEffect(() => {
    getFoodData();
  }, []);

  const [foodList, setFoodList] = useState([]);
  const [reviewList, setReviewList] = useState([]);

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

  const removeBtn = (index) => {
    if (index === 0) {
      return (
        <>
          <button
            className="btn btn-success button_submitModal me-1"
            onClick={() => handleAddEditIngredients()}
            type="button"
          >
            Add
          </button>
        </>
      );
    }
    if (index >= 1) {
      return (
        <>
          <button
            className="btn btn-success button_submitModal me-1"
            onClick={() => handleAddEditIngredients()}
            type="button"
          >
            Add
          </button>
          <button
            className="btn btn-danger button_submitModal"
            id="removeBtn"
            style={{ marginLeft: "0" }}
            onClick={() => handleRemoveEditIngredients(index)}
            type="button"
          >
            Delete
          </button>
        </>
      );
    }
  };

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      ingredients: [],
      rating: "",
      review: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      // ingredients: Yup.string().required('Required'),
      rating: Yup.number().required("Required"),
    }),
  });

  const handleSubmit = (e, id) => {
    e.preventDefault();
    console.log(fileToUpload);
    console.log(formik.values);
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
        alert('edit data food success!');
        console.log(response);
        window.location.reload();
      })
      .catch((error) => {
        console.error(error);
        alert('edit data food not success! check your food value');
      });
    getFoodData();
  };

  const handleReviewSubmit = (e, id) => {
    e.preventDefault();
    const values = formik.values;
    axios({
      method: "post",
      url: `${process.env.REACT_APP_BASE_URL}/api/v1/rate-food/${id}`,
      headers: {
        apiKey: `${process.env.REACT_APP_API_KEY}`,
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
      data: {
        rating: parseInt(values.rating),
        review: values.review,
      },
    })
      .then((response) => {
        alert("review food success!");
        console.log(response);
        // window.location.reload();
      })
      .catch((error) => {
        console.error(error);
      });
    getFoodData();
  };

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
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };

  const handleReview = (id) => {
    // if (window.confirm("are you sure you want to edit?")) {
    axios({
      method: "get",
      url: `${process.env.REACT_APP_BASE_URL}/api/v1/food-rating/${id}`,
      headers: {
        apiKey: `${process.env.REACT_APP_API_KEY}`,
        // Authorization: `Bearer ${localStorage.getItem(`token`)}`,
      },
    })
      .then((response) => {
        console.log(response);
        // setEditFoodList(response.data);
        // window.location.reload();
        setReviewList(response.data.data);
      })
      .catch((error) => {
        console.error(error);
      });
    // }
  };

  // const [editFoodList, setEditFoodList] = useState([]);
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
    // getFoodData();
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
          // alert("like success");
          // window.location.reload();
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
          // alert("unlike success");
          // window.location.reload()
        })
        .catch((error) => {
          console.error(error);
        });
    }
    getFoodData();
  };

  return (
    <div className="container mb-3">
      <div className="row">
        {foodList.map((item) => {
          console.log(item);
          return (
            <>
              <div className="col-md-12 col-lg-6 p-3 mb-3">
                <div className="card_foodlist shadow">
                  <div className="card-body px-3">
                    <div className="row mb-3">
                      <div className="mb-3 mt-4 col-sm-12 mb-sm-3 col-md-4 col-lg-4 text-center">
                        <img
                          className="shadow foodlist_img img-fluid"
                          src={item.imageUrl}
                          // style={{ height: "12rem", width: "12rem" }}
                          alt="foodlist-img"
                        />
                      </div>
                      <div className="shadow bg-light rounded py-2 mt-4 col-sm-12 col-md-8 col-lg-8">
                        <div className="py-2 px-3 card-text h4 fw-bold text-center">
                          <span className="orange">{item.name}</span>
                        </div>
                        <div className="row mb-1">
                          <div className="col-3 col-sm-3 col-md-3 col-lg-4">
                            <div className="card-text h6">Description:</div>
                          </div>
                          <div className="col-9 col-sm-9 col-md-9 col-lg-8">
                            <div className="card-text h6">
                              {item.description}
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3">
                          <div className="col-3 col-sm-3 col-md-3 col-lg-4">
                            <div className="card-text h6">Ingredients:</div>
                          </div>
                          <div className="col-9 col-sm-9 col-md-9 col-lg-8">
                            <div className="card-text h6">
                              {item.ingredients.join(", ")}
                            </div>
                          </div>
                        </div>
                        <div className="row mb-3 text-center">
                          <div className="col-6">Rating: {item.rating}</div>
                          <div className="col-4">
                            <div className="h6">
                              Total likes: {item.totalLikes}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="row mb-3 text-center float-lg-end float-md-end">
                      <div className="col-3">
                        <button
                          className="shadow btn btn-dark button_submit"
                          style={{
                            color: `${item.isLike ? "orange" : ""}`,
                            // width: `${'90px'}`,
                          }}
                          onClick={() => handleLike(item.id, item.isLike)}
                          type="button"
                        >
                          {`${item.isLike ? "Liked" : "Like!"}`}&nbsp;
                          {/* <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            fill="currentColor"
                            style={{
                              color: `${item.isLike ? "orange" : ""}`,
                            }}
                            class="bi bi-hand-thumbs-up"
                            // viewBox="0 0 16 16"
                          >
                            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z" />
                          </svg> */}
                        </button>
                      </div>
                      <div className="col-3">
                        <button
                          data-bs-toggle="modal"
                          data-bs-target={`#reviewModal-${item.id}`}
                          onClick={() => handleReview(item.id)}
                          className="shadow btn btn-success button_submit"
                        >
                          review
                        </button>
                      </div>
                      <div className="col-3">
                        <button
                          type="button"
                          onClick={() => handleDelete(item.id)}
                          className="shadow btn btn-danger button_submit"
                        >
                          Delete
                        </button>
                      </div>
                      <div className="col-3">
                        <button
                          data-bs-toggle="modal"
                          data-bs-target={`#editFoodModal-${item.id}`}
                          onClick={() => handleEdit(item.id)}
                          className="shadow btn btn-warning button_submit"
                        >
                          edit
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="modal fade"
                id={`editFoodModal-${item.id}`}
                tabindex="-1"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <div class="modal-title fs-5 h1" id="exampleModalLabel">
                        Want to edit @food ID : {item.id}
                      </div>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div className="bg-light rounded shadow py-3 mb-3">
                        <div className="h4 input_label">Latest Food Data</div>
                        <div className="h5 input_label">name: {item.name}</div>
                        <div className="h6 input_label">
                          description: {item.description}
                        </div>
                        <div className="h6 input_label">
                          ingredients: {item.ingredients.join(", ")}
                        </div>
                        <img
                          src={item.imageUrl}
                          alt="food list img"
                          className="img-fluid input_label foodlist_img"
                        />
                      </div>
                      <form
                        className="row g-1 bg-danger bg-opacity-25 rounded shadow py-3 mt-4 mb-3"
                        onSubmit={(e) => handleSubmit(e, item.id)}
                      >
                        <div className="h5 fw-bold text-center">
                          FORM TO EDIT FOOD DATA
                        </div>
                        <label
                          for="inputName"
                          className="form-label input_label"
                        >
                          Food Name
                        </label>
                        <input
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          type="text"
                          className="input-group mb-3 input_box"
                          id="name"
                        />
                        {formik.touched.name && formik.errors.name ? (
                          <div>{formik.errors.name}</div>
                        ) : null}
                        <label
                          for="inputAge"
                          className="form-label input_label"
                        >
                          Description
                        </label>
                        <input
                          value={formik.values.description}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          type="text"
                          className="input-group mb-3 input_box"
                          id="description"
                        />
                        {formik.touched.description &&
                        formik.errors.description ? (
                          <div>{formik.errors.description}</div>
                        ) : null}
                        <label
                          for="inputFoodImage"
                          className="form-label input_label"
                        >
                          Food Image Upload
                        </label>
                        <Upload onChange={(value) => setFileToUpload(value)} />
                        {ingredients.map((ingredient, index) => {
                          return (
                            <>
                              <label
                                for="inputIngredient"
                                className="form-label input_label"
                              >
                                Ingredients
                              </label>
                              <div className="container mb-3 ">
                                <input
                                  onBlur={formik.handleBlur}
                                  type="text"
                                  className="input-group input_box mb-3"
                                  id="ingredients"
                                  value={ingredient}
                                  onChange={(event) =>
                                    handleCHangeEditIngredients(
                                      index,
                                      event.target.value
                                    )
                                  }
                                />
                                {removeBtn(index)}
                              </div>
                              {formik.touched.ingredients &&
                              formik.errors.ingredients ? (
                                <div>{formik.errors.ingredients}</div>
                              ) : null}
                            </>
                          );
                        })}
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary button_submitModal"
                            data-bs-dismiss="modal"
                          >
                            Edit Food
                          </button>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
              <div
                class="modal fade"
                id={`reviewModal-${item.id}`}
                tabindex="-1"
              >
                <div class="modal-dialog">
                  <div class="modal-content">
                    <div class="modal-header">
                      <div class="modal-title fs-5 h1" id="exampleModalLabel">
                        Want to review @food ID:{" "}
                        <span className="orange">{item.id}</span>
                      </div>
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      ></button>
                    </div>
                    <div class="modal-body">
                      <div className="bg-light rounded shadow py-3 mb-3">
                        <div className="h6 input_label">name: {item.name}</div>
                        <div className="h6 input_label">
                          rating average: {item.rating}
                        </div>
                        <img
                          src={item.imageUrl}
                          // style={{ height: "12rem", width: "12rem" }}
                          alt="food list img"
                          className="img-fluid input_label foodlist_img"
                        />
                        <div class="d-grid gap-2 col-6 mx-auto mt-3">
                        <button class="btn btn-primary" type="button" data-bs-toggle="collapse" data-bs-target="#reviewExample" aria-expanded="false" aria-controls="reviewExample">
    Click to give a Review
  </button>
                        </div>
                      </div>
                      <div className="bg-light rounded shadow py-3 mb-3">
                        <div className="h3 input_label">Reviewer and Commentary</div>

                      {reviewList.map((item) => {
                        console.log(item);
                        return (
                          <div className="bg-light rounded shadow py-3 mb-3 mx-3">
                            <div className="row input_label">
                              <div className="col-2">
                                {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
                                <img
                                  className="img-fluid review_img"
                                  src={item.user.profilePictureUrl}
                                  alt="reviewer"
                                />
                              </div>
                              <div className="col-8 bg-success bg-opacity-10 rounded shadow py-3 mb-3">
                                <div className="h4">
                                  <span className="orange">
                                    {item.user.name}
                                  </span>
                                </div>
                                <div className="h6">{item.review}</div>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                      </div>
                      <div class="collapse" id="reviewExample">
                      <form
                        className="row g-1 bg-info bg-opacity-10 rounded shadow py-3 mt-4 mb-3"
                        onSubmit={(e) => handleReviewSubmit(e, item.id)}
                      >
                        <label
                          for="inputName"
                          className="h5 fw-bold text-center"
                        >
                          FORM FOR GIVE RATING AND REVIEW
                        </label>
                        <label
                          for="inputName"
                          className="form-label input_label"
                        >
                          Rating
                        </label>
                        <select
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          value={formik.values.rating}
                          onKeyPress={(event) => {
                            if (!/[0-9]/.test(event.key)) {
                              event.preventDefault();
                            }
                          }}
                          component="select"
                          id="rating"
                          name="rating"
                          type="number"
                          multiple={false}
                          className="form-select input_box mx-auto"
                        >
                          <option selected>Open this rating value</option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                        </select>

                        <label
                          for="inputAge"
                          className="form-label input_label"
                        >
                          Review
                        </label>
                        <input
                          value={formik.values.review}
                          onChange={formik.handleChange}
                          onBlur={formik.handleBlur}
                          type="text"
                          className="input-group mb-3 input_box"
                          id="review"
                        />
                        {formik.touched.review && formik.errors.review ? (
                          <div>{formik.errors.review}</div>
                        ) : null}
                        <div className="col-12">
                          <button
                            type="submit"
                            className="btn btn-primary button_submitModal"
                            data-bs-dismiss="modal"
                          >
                            Send Review
                          </button>
                        </div>
                      </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </div>
  );
}

export default Foodlist;

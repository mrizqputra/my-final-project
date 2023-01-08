import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useState } from "react";
import Upload from "./Upload";
import logo from "./img/logo.jpg";
import "./Registerfood.css";

function Registerfood() {
  // import images url
  const [fileToUpload, setFileToUpload] = useState("");

  // add and remove handle Ingredients
  const [ingredients, setIngredients] = useState([""]);

  const handleAddIngredients = () => {
    setIngredients([...ingredients, ""]);
  };

  const handleRemoveIngredients = (index) => {
    const values = [...ingredients];
    setIngredients(values);
    if (index >= 1) {
      values.splice(index, 1);
    }
  };

  const handleCHangeIngredients = (index, value) => {
    const values = [...ingredients];
    values[index] = value;
    setIngredients(values);
  };

  const removeBtn = (index) => {
      if (index === 0) {
        return (
          <>
            {" "}
            <button
              className="btn btn-success button_login"
              onClick={() => handleAddIngredients()}
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
              className="btn btn-success button_login"
              onClick={() => handleAddIngredients()}
              type="button"
            >
              Add
            </button>
            <button
              className="btn btn-danger button_delete"
              onClick={() => handleRemoveIngredients(index)}
              type="button"
            >
              Delete
            </button>
          </>
        );
      }
    }
  
  // formik for add food data
  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      ingredients: [],
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Required"),
      description: Yup.string().required("Required"),
      // ingredients: Yup.object(['']).required("Required"),
    }),
    onSubmit: (values) => {
      console.log(fileToUpload);
      axios({
        method: "post",
        url: `https://api-bootcamp.do.dibimbing.id/api/v1/create-food`,
        headers: {
          apiKey: `w05KkI9AWhKxzvPFtXotUva-`,
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
          alert("adding food success!");
          console.log(response);
          window.location.href = "/food";
        })
        .catch((error) => {
          alert("adding food not success! check your food value");
          console.error(error);
        });
    },
  });

  return (
    <div className="container mb-3">
      <div className="container-fluid">
        <img
          src={logo}
          alt="logo"
          className="img-fluid mx-auto d-block img_set"
        />
        <form onSubmit={formik.handleSubmit}>
          <div className="container-fluid">
            <div className="mb-3">
              <label for="inputName" className="form-label input_label">
                Food Name
              </label>
              <input
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                className="input-group mb-3 input_box mx-auto"
                id="name"
              />
              {formik.touched.name && formik.errors.name ? (
                <div className="input_label">{formik.errors.name}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label for="inputAge" className="form-label input_label">
                Description
              </label>
              <input
                value={formik.values.description}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                type="text"
                className="input-group mb-3 input_box mx-auto"
                id="description"
              />
              {formik.touched.description && formik.errors.description ? (
                <div className="input_label">{formik.errors.description}</div>
              ) : null}
            </div>
            <div className="mb-3">
              <label for="inputFoodImage" className="form-label input_label">
                Food Image Upload
              </label>
              <Upload onChange={(value) => setFileToUpload(value)} />
            </div>
            {ingredients.map((ingredient, index) => {
              return (
                <>
                  <div className="mb-3">
                    <label
                      for="inputIngredient"
                      className="form-label input_label"
                    >
                      Ingredients
                    </label>
                    <div className="container-fluid">
                      <input
                        onBlur={formik.handleBlur}
                        type="text"
                        className="input-group mb-3 input_box mx-auto"
                        id="ingredients"
                        value={ingredient}
                        onChange={(event) =>
                          handleCHangeIngredients(index, event.target.value)
                        }
                      />
                      {removeBtn(index)}
                      {/* <button
                        className="btn btn-success button_login"
                        onClick={() => handleAddIngredients()}
                        type="button"
                      >
                        Add
                      </button>
                      <button
                        className="btn btn-danger button_delete"
                        onClick={() => handleRemoveIngredients(index)}
                        type="button"
                      >
                        Delete
                      </button> */}
                    </div>
                    {formik.touched.ingredients && formik.errors.ingredients ? (
                      <div className="input_label">
                        {formik.errors.ingredients}
                      </div>
                    ) : null}
                  </div>
                </>
              );
            })}
            <button type="submit" className="btn btn-primary button_login">
              Create
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Registerfood;

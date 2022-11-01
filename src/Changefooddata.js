import axios from "axios";
import { useFormik, yupToFormErrors, Field, FieldArray } from "formik";
import * as Yup from "yup";
import React, { useEffect, useState } from "react";
import Upload from "./Upload";

function Changefooddata() {
  //   const [addName, setAddName] = useState("");
  //   const [addDescription, setAddDescription] = useState("");
  // // //   // const [imageUrl, setImageUrl] = useState("");
  //   const [addIngredients, setAddIngredients] = useState([]);
  // const [rating, setRating] = useState();
  // const [totalLikes, setTotalLikes] = useState();

  // import images url
  const [fileToUpload, setFileToUpload] = useState("");

  // const [nameEdit, setNameEdit] = useState("");
  // const [descriptionEdit, setDescriptionEdit] = useState("");
  // const [imageUrlEdit, setImageUrlEdit] = useState("");
  // const [ingredientsEdit, setIngredientsEdit] = useState([]);
  // const [ratingEdit, setRatingEdit] = useState();
  // const [totalLikesEdit, setTotalLikesEdit] = useState();

  // const handleName = (event) => {
  //     console.log(event.target.value)
  //     setAddName(event.target.value)
  // }
  // const handleDescription = (event) => {
  //     console.log(event.target.value)
  //     setAddDescription(event.target.value)
  // }
  // const handleIngredients = (event) => {
  //     console.log(event.target.value)
  //     setAddIngredients(event.target.value)
  // }
  // const handleRating = (event) => {
  //     console.log(event.target.value)
  //     setRating(event.target.value)
  // }
  // const handleTotalLikes = (event) => {
  //     console.log(event.target.value)
  //     setTotalLikes(event.target.value)
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

  const formik = useFormik({
    initialValues: {
      name: "",
      description: "",
      ingredients: [''],
    },
    validationSchema: Yup.object({
      // name: Yup.string().required('Required'),
      // description: Yup.string().required('Required'),
      // ingredients: Yup.object().required('Required'),
    }),
    onSubmit: (values) => {
      console.log(fileToUpload);
      axios({
        method: "post",
        url: `${process.env.REACT_APP_BASE_URL}/api/v1/create-food`,
        headers: {
          apiKey: `${process.env.REACT_APP_API_KEY}`,
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
        data: {
          name: values.name,
          description: values.description,
          imageUrl: fileToUpload,
          ingredients: values.ingredients,
        },
      })
        .then((response) => {
          alert("tambah makanan berhasil!");
          console.log(response);
        })
        .catch((error) => {
          console.error(error);
        });
    },
  });


  // const handleEdit = (id) => {
  //   if (window.confirm('are you sure you want to edit?')) {
  //     axios({
  //       method: 'put',
  //       url: `${BASE_URL}/product/${id}`,
  //       data: {
  //         name: nameEdit,
  //         description: descriptionEdit,
  //         image: imageEdit,
  //         price: priceEdit,
  //       }
  //     }).then((response) => {
  //       console.log(response)
  //       window.location.reload()
  //     }).catch((error) => {
  //       console.error(error)
  //     })
  //   }
  // }
  // const handleDelete = (id) => {
  //   if (window.confirm('are you sure you want to delete?')) {
  //     // kalo user klik ok
  //     axios({
  //       method: 'post',
  //       url: `${BASE_URL}/product/delete/${id}`,
  //     }).then((response) => {
  //       console.log(response)
  //       window.location.reload()
  //     }).catch((error) => {
  //       console.error(error)
  //     })
  //   }
  // }

  return (
    <div className="container">
      <form className="row g-3" onSubmit={formik.handleSubmit}>
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
        <div className="col-md-6">
          <label for="inputIngredient" className="form-label">
            Ingredients
          </label>
          <input
            value={formik.values.ingredients}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type="text"
            className="input-group mb-3"
            id="ingredients"
          />
        </div>
        {/* <div className="col-md-6 form-control">
          <label>List of Ingredients</label>
          <FieldArray name='Ingredients'>
            {
              (fieldArrayProps) => {
                console.log('fieldArrayProps', fieldArrayProps)
                const {push, remove, form} = fieldArrayProps
                const { values } = form
                const { ingredients } = values
                return <div>
                  {ingredients.map((ingredient, index)) => (
                    <div key={index}>
                      <Field name={`ingredients[${index}]`}/>
                      <button type="button" onClick={() => remove(index)}>-</button>
                      <button type="button" onClick={() => push('')}>+</button>
                    </div>
                  )}
                </div>
              }
            }

          </FieldArray>
        </div> */}
        {formik.touched.ingredients && formik.errors.ingredients ? (
          <div>{formik.errors.ingredients}</div>
        ) : null}
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Create
          </button>
        </div>
      </form>
    </div>
  );
}

export default Changefooddata;

import axios from "axios";
import React, { useEffect, useState } from "react";
import BASE_URL from "./baseurl";

function Foodlist() {
  const [foodList, setFoodList] = useState([]);
  const [id, setID] = useState("");
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [ingredients, setIngredients] = useState([]);
  const [rating, setRating] = useState();
  const [totalLikes, setTotalLikes] = useState();

  // const [nameEdit, setNameEdit] = useState('')
  // const [descriptionEdit, setDescriptionEdit] = useState('')
  // const [imageEdit, setImageEdit] = useState('')
  // const [priceEdit, setPriceEdit] = useState()

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
  return (
    <div className="App">
      {/* <form className="row g-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label for="inputName" className="form-label">Product Name</label>
          <input value={name} onChange={handleName} type="text" className="form-control" id="inputProductName" />
        </div>
        <div className="col-md-6">
          <label for="inputAge" className="form-label">Description</label>
          <input value={description} onChange={handleDescription} type="text" className="form-control" id="inputDescription" />
        </div>
        <div className="col-md-6">
          <label for="inputAge" className="form-label">Image URL</label>
          <input value={image} onChange={handleImage} type="text" className="form-control" id="inputImageURL" />
        </div>
        <div className="col-md-6">
          <label for="inputAge" className="form-label">Price</label>
          <input value={price} onChange={handlePrice} type="number" className="form-control" id="inputPrice" />
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">Create</button>
        </div>
      </form> */}
      {foodList.map((item) => {
        console.log(item);
        return (
          <div>
            <div className="card" style={{ width: "18rem" }}>
              <div className="card-body">
                <h5 className="card-title">{item.name}</h5>
                <h6 className="card-subtitle mb-2 text-muted">ID: {item.id}</h6>
                <img
                  className="image"
                  src={item.imageUrl}
                  style={{ height: "12rem", width: "12rem" }}
                  alt="image product"
                />
                <h3 className="card-text">{item.name}</h3>
                <h4 className="card-text">{item.description}</h4>
                <p className="card-text">{item.ingredients}</p>
                <p className="card-text">{item.rating}</p>
                <p className="card-text">{item.totalLikes}</p>
                {/* <a href="#" className="card-link" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</a>
              <a href="#" className="card-link" onClick={() => handleDelete(item.id)}>Delete</a> */}
              </div>
            </div>
            {/* <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Edit Product {item.id}</h5>
                  <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div className="modal-body">
                  <form className="row g-3" onSubmit={() => handleEdit(item.id)}>
                    <div className="col-md-6">
                      <label for="inputName" className="form-label">Name</label>
                      <input value={nameEdit} onChange={handleNameEdit} type="text" className="form-control" id="inputName" />
                    </div>
                    <div className="col-md-6">
                      <label for="inputName" className="form-label">Desciption</label>
                      <input value={descriptionEdit} onChange={handleDescriptionEdit} type="text" className="form-control" id="inputDescription" />
                    </div>
                    <div className="col-md-6">
                      <label for="inputName" className="form-label">Image URL</label>
                      <input value={imageEdit} onChange={handleImageEdit} type="text" className="form-control" id="inputImage" />
                    </div>
                    <div className="col-md-6">
                      <label for="inputAge" className="form-label">Age</label>
                      <input value={priceEdit} onChange={handlePriceEdit} type="number" className="form-control" id="inputPrice" />
                    </div>
                    <div className="col-12">
                      <button type="submit" className="btn btn-primary">Submit</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div> */}
          </div>
        );
      })}
    </div>
  );
}

export default Foodlist;

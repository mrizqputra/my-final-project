import axios from "axios";
import React, { useEffect, useState } from "react";
import BASE_URL from "./baseurl";

function Foodlist() {
  const [foodList, setFoodList] = useState([]);
  // const [id, setID] = useState("");
  // const [name, setName] = useState("");
  // const [description, setDescription] = useState("");
  // const [imageUrl, setImageUrl] = useState("");
  // const [ingredients, setIngredients] = useState([]);
  // const [rating, setRating] = useState();
  // const [totalLikes, setTotalLikes] = useState();

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

  const isLikesButton = () => {

  }

  return (
    <row className="App">
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
            <div className="card col-6"
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
                  <p className="card-text col-6">{item.rating}</p>
                  <div className="col-6 flex">
                  <button className="isLikesButton">
                    <p className="card-text">{item.totalLikes} 
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-heart ms-1" viewBox="0 0 16 16">
                      <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
                    </svg></p></button>
                    </div>
                </div>
              </div>
              {/* <a href="#" className="card-link" data-bs-toggle="modal" data-bs-target="#exampleModal">Edit</a>
              <a href="#" className="card-link" onClick={() => handleDelete(item.id)}>Delete</a> */}
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
    </row >
  );
}

export default Foodlist;

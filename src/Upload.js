import axios from "axios";
import { useState } from "react";

const Upload = () => {
  const [image, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQAiSbUgqCbN_h3H7g5tjIZK4ljpN7cOAOFg&usqp=CAU");
  const [saveImage, setSaveImage] = useState("");

  // const handleImage = (event) => {
  //   console.log(event.target.value)
  //   setImage(event.target.value)
  // }

  // upload image
  function handleUploadChange(e) {
    console.log(e.target.files[0]);
    let uploaded = e.target.files[0];
    // setSaveImage(URL.createObjectURL(uploaded));
    setSaveImage(uploaded)
  }

  let formData = new FormData();
  formData.append('image', saveImage);

  function uploadImage() {
    if(!saveImage) {
      alert('please upload a image first')
    } else {
          axios({
      method: 'post',
      url: `${process.env.BASE_URL}/api/v1/upload-image`,
      headers: {
        apiKey: `${process.env.BASE_URL}`,
        Authorization: `Bearer${process.env.JWT.TOKEN}`
      },
      body: formData,
      params: {
        TOKEN: `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6Im1pZnRhaGZhcmhhbkBnbWFpbC5jb20iLCJ1c2VySWQiOiI4NDg2ZmQ1YS0xOWRkLTQ1NGEtYWUxMy02Y2Y2ZWM2OTE0NDgiLCJyb2xlIjoiYWRtaW4iLCJpYXQiOjE2NjY3NzY2ODF9.kS-0o6wL1Egt-UhpHY3ZO1qIdSeZuqsLh5ivMt47OLM`
      }
    }).then((response) => {
      console.log(response)
      alert('Upload successful')
      // window.location.reload()
    }).catch((error) => {
      console.error(error)
    })
    }
  }

  return (
    <div className="input-group">
      <img src={image} alt="" style={{ height: '12rem', width: '12rem' }}/>
      <input
        type="file"
        className="form-control"
        id="formFile"
        onChange={handleUploadChange}
        accepts="image/*" 
      />
      <button
        className="btn btn-outline-secondary"
        type="button"
        id="inputGroupFileAddon04"
        onClick={uploadImage}
      >
        Button
      </button>
    </div>
  );
};

export default Upload;

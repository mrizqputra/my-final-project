import axios from "axios";
import { useRef, useState } from "react";
import BASE_URL from "./baseurl";

const Upload = ({onChange}) => {
  const [image, setImage] = useState("https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQAiSbUgqCbN_h3H7g5tjIZK4ljpN7cOAOFg&usqp=CAU");
  const [saveImage, setSaveImage] = useState("");

  const fileUpload = useRef(null);
  
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



  function uploadImage() {
    if(!saveImage) {
      alert('please upload a image first')
    } else {
      console.log(fileUpload.current.files[0]
        )
      let formData = new FormData();
      formData.append('image', saveImage);
    //       axios({
    //   method: 'post',
    //   url: `${BASE_URL}/api/v1/upload-image`,
    //   headers: {
    //     apiKey: `w05KkI9AWhKxzvPFtXotUva-`,
    //     Authorization: `Bearer${localStorage.getItem("token")}`,
    //     'Content-Type': 'multipart/form-data',
    //   },
    //   body: formData,
    // })
    let config = {
      headers: {
        apiKey: `w05KkI9AWhKxzvPFtXotUva-`,
        Authorization: `Bearer${localStorage.getItem("token")}`,
        'Content-Type': 'multipart/form-data',
      },
  };

    axios.post(`${BASE_URL}/api/v1/upload-image`, 
    formData, config
    )
    .then(function (response) {
      console.log(response);
      onChange(response.data.url)
    })
    .catch(function (error) {
      console.log(error);
    })
  
    .then((response) => {
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
        ref={fileUpload}
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


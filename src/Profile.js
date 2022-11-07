// import axios from "axios";
// // import { useFormik } from "formik";
// // import * as Yup from "yup";
// import React, { useState, useEffect } from "react";
// // import Upload from "./Upload";

// function Profile() {
//   const [profileGet, setProfileGet] = useState([]);

//   useEffect(() => {
//     // Promise
//     axios({
//       method: "get",
//       url: `${process.env.REACT_APP_BASE_URL}/api/v1/user`,
//       headers: {
//         apiKey: `${process.env.REACT_APP_API_KEY}`,
//         Authorization: `Bearer ${localStorage.getItem(`token`)}`,
//       },
//     })
//       .then(function (response) {
//         console.log(response);
//         setProfileGet(response.data.user);
//       })
//       .catch(function (error) {
//         console.error(error);
//         alert("ada error, coba reload halaman");
//       });
//   }, []);


//   return (
//     <row className="container">
//       <>
//       {profileGet.map((profile) => {
//         console.log(profile);
//         return (
//           <div>
//             <div
//               className="card col-6"
//               // style={{ width: "18rem" }}
//             >
//               <div className="card-body">
//                 <h5 className="card-title">
//                   {profile.name}
//                   </h5>
//                 <h6 className="card-subtitle mb-2 text-muted">ID: 
//                 {profile.id}
//                 </h6>
//                 <img
//                       className="foodlist_img"
//                       src={profile.profilePictureUrl}
//                       style={{ height: "12rem", width: "12rem" }}
//                       alt="user list img"
//                     />
//                 <h3 className="card-text">
//                   {profile.name}
//                   </h3>
//                 <p className="card-text">Email: 
//                 {profile.email}
//                 </p>
//                 <p className="card-text">Role: 
//                 {profile.role}
//                 </p>
//                 <p className="card-text">phone number: 
//                 {profile.phoneNumber}
//                 </p>
//               </div>
//             </div>
//           </div>
//         );
//       })} 
//       </>
//     </row>
//   );
// }

// export default Profile;

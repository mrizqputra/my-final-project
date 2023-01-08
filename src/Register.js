import React, { useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import Upload from "./Upload";
import logo from "./img/logo.jpg";

const Register = () => {
  const [fileToUpload, setFileToUpload] = useState('');


  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      password: '',
      passwordRepeat: '',
      role: '',
      phoneNumber: '',
    },
    validationSchema: Yup.object({
      name: Yup.string()
      //   .min(6, 'Must be 6 characters or more')
      //   .max(15, 'Must be 15 characters or less')
        .required('Required'),
      // email: Yup.string()
      //   .required('Required'),
      password: Yup.string()
        .min(6, 'Must be 6 characters or more')
      //   .max(20, 'Must be 20 characters or less')
        .required('Required'),
      passwordRepeat: Yup.string()
        .min(6, 'Must be 6 characters or more')
      //   .max(20, 'Must be 20 characters or less')
        .required('Required'),
      role: Yup.object()
        .required('Required'),
      phoneNumber: Yup.string()
        .required('Required')
    }),
    onSubmit: values => {
      console.log(fileToUpload)
      axios({
        method: 'post',
        url: `https://api-bootcamp.do.dibimbing.id/api/v1/register`,
        headers: {
          apiKey: `w05KkI9AWhKxzvPFtXotUva-`
        },
        data: {
          name: values.name,
          email: values.email,
          password: values.password,
          passwordRepeat: values.passwordRepeat,
          role: values.role,
          profilePictureUrl: fileToUpload,
          phoneNumber: values.phoneNumber
        }
      })
      .then(res => {
        alert('Registrasi berhasil! silahkan login')
        window.location.href = "/";
      }).catch(e => {
        alert('register belum berhasil!')
      })
    },
  });



return (
  <div className="container mb-3">
    <div className="container-fluid">
    <img src={logo} alt="logo" className="img-fluid mx-auto d-block img_set"/>
    <form onSubmit={formik.handleSubmit}>
      <div className="container-fluid">
      <div className="mb-3">
        <label for="inputName" className="form-label input_label">
          Name
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
          <div className="input_label">{formik.errors.username}</div>
        ) : null}
      </div>
      <div className="mb-3">
        <label for="inputEmail" className="form-label input_label">
          Email
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
          <div className="input_label">{formik.errors.email}</div>
        ) : null}
      </div>
      <div className="mb-3">
        <label for="inputPassword" className="form-label input_label">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="input-group mb-3 input_box mx-auto"
        />
        {/* check error or not */}
        {formik.touched.password && formik.errors.password ? (
          <div className="input_label">{formik.errors.password}</div>
        ) : null}
      </div>
      <div className="mb-3">
        <label for="inputPasswordRepeat" className="form-label input_label">
          Repeat Password
        </label>
        <input
          id="passwordRepeat"
          name="passwordRepeat"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.passwordRepeat}
          className="input-group mb-3 input_box mx-auto"
        />
        {/* check error or not */}
        {formik.touched.passwordRepeat && formik.errors.passwordRepeat ? (
          <div className="input_label">{formik.errors.passwordRepeat}</div>
        ) : null}
      </div>
      <div className="mb-3">
        <label for="selectRole" className="form-label input_label">
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
          className="form-select input_box mx-auto">
          <option selected>Open this select menu
          </option>
          <option value="admin">Admin</option>
          <option value="client">Client</option>
        </select>
      </div>
      <div className="mb-3">
        <label for="phoneNumber" className="form-label input_label">
          Phone Number
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
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div className="input_label">{formik.errors.phoneNumber}</div>
        ) : null}
      </div>
      <div className="mb-3 ">
      <label for="upload image" className="form-label input_label">
          Upload Your Image Profile
        </label>
          <Upload
            onChange={(value) => setFileToUpload(value)} />
      </div>
      <button type="submit" className="btn btn-primary button_login">
        Submit
      </button>
      </div>
    </form>
    </div>
  </div>
);
}

export default Register;

import React, { useEffect, useState } from "react";
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from "axios";
import Upload from "./Upload";

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
      // name: Yup.string()
      //   .min(6, 'Must be 6 characters or more')
      //   .max(15, 'Must be 15 characters or less')
      //   .required('Required'),
      // email: Yup.string()
      //   .required('Required'),
      // password: Yup.string()
      //   .min(8, 'Must be 8 characters or more')
      //   .max(20, 'Must be 20 characters or less')
      //   .required('Required'),
      // passwordRepeat: Yup.string()
      //   .min(8, 'Must be 8 characters or more')
      //   .max(20, 'Must be 20 characters or less')
      //   .required('Required'),
      // role: Yup.object()
      //   .required('Required'),
      // phoneNumber: Yup.string()
      //   .required('Required')
    }),
    onSubmit: values => {
      console.log(fileToUpload)
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_BASE_URL}/api/v1/register`,
        headers: {
          apiKey: `${process.env.REACT_APP_API_KEY}`
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
        // const verifiedRequestToken = res.data.request_token;
        // axios({
        //   method: 'post',
        //   url: `${process.env.BASE_URL}/api/v1/register`,
        //   headers: {
        //     apiKey: `${process.env.BASE_URL}`
        //     },    
        //   data: {
        //     request_token: verifiedRequestToken
        alert('Registrasi berhasil! silahkan login')
      }).catch(e => {
        alert('register belum berhasil!')
      })
    },
  });



return (
  <div className="container">
    <form onSubmit={formik.handleSubmit}>
      <div class="mb-3">
        <label for="inputName" class="form-label">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className="input-group mb-3"
        />
        {/* check error or not */}
        {formik.touched.username && formik.errors.username ? (
          <div>{formik.errors.username}</div>
        ) : null}
      </div>
      <div class="mb-3">
        <label for="inputEmail" class="form-label">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className="input-group mb-3"
        />
        {/* check error or not */}
        {formik.touched.email && formik.errors.email ? (
          <div>{formik.errors.email}</div>
        ) : null}
      </div>
      <div class="mb-3">
        <label for="inputPassword" class="form-label">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.password}
          className="input-group mb-3"
        />
        {/* check error or not */}
        {formik.touched.password && formik.errors.password ? (
          <div>{formik.errors.password}</div>
        ) : null}
      </div>
      <div class="mb-3">
        <label for="inputPasswordRepeat" class="form-label">
          Repeat Password
        </label>
        <input
          id="passwordRepeat"
          name="passwordRepeat"
          type="password"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.passwordRepeat}
          className="input-group mb-3"
        />
        {/* check error or not */}
        {formik.touched.passwordRepeat && formik.errors.passwordRepeat ? (
          <div>{formik.errors.passwordRepeat}</div>
        ) : null}
      </div>
      <div class="mb-3">
        <label for="selectRole" class="form-label">
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
          class="form-select">
          <option value="admin">Admin</option>
          <option value="client">Client</option>
        </select>
      </div>
      <div class="mb-3">
        <label for="phoneNumber" class="form-label">
          Phone Number
        </label>
        <input
          id="phoneNumber"
          name="phoneNumber"
          type="text"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phoneNumber}
          className="input-group mb-3"
        />
        {/* check error or not */}
        {formik.touched.phoneNumber && formik.errors.phoneNumber ? (
          <div>{formik.errors.phoneNumber}</div>
        ) : null}
      </div>
      <div class="mb-3">
          <Upload
            onChange={(value) => setFileToUpload(value)} />
      </div>
      <button type="submit" class="btn btn-primary">
        Submit
      </button>
    </form>
  </div>
);
}

export default Register;

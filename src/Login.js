import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import logo from "./img/logo.jpg";
import "./Login.css";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: Yup.object({
      email: Yup.string()
        // .min(6, 'Must be 6 characters or more')
        // .max(15, 'Must be 15 characters or less')
        .required("Required"),
      password: Yup.string()
        // .min(8, 'Must be 8 characters or more')
        // .max(20, 'Must be 20 characters or less')
        .required("Required"),
      // .matches(
      //   /^.*(?=.*\d)((?=.*[a-zA-Z]){1}).*$/,
      //   "Password must contain atleast one letter and one number"
      // ),
    }),
    onSubmit: (values) => {
      axios({
        method: "post",
        url: `https://api-bootcamp.do.dibimbing.id/api/v1/login`,
        headers: {
          apiKey: `w05KkI9AWhKxzvPFtXotUva-`,
        },
        data: {
          email: values.email,
          password: values.password,
        },
      })
        .then((resp) => {
          alert("login successful");
          console.log(resp);
          const token = resp.data.token;
          localStorage.setItem("token", token);
          const email = values.email;
          localStorage.setItem("email", email);
          window.location.href = "/";
        })
        .catch((e) => {
          console.log(e);
          alert("Login belum berhasil! cek email dan password");
        });
    },
  });

  return (
  <div className="container mb-3">
    <div className="container-fluid">
    <img src={logo} alt="logo" className="img-fluid mx-auto d-block img_set"/>
    <form onSubmit={formik.handleSubmit}>
      <div className="container-fluid">
      <label htmlFor="email" className="input_label">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className="input-group mb-3 input_box mx-auto"
      />
      {formik.touched.email && formik.errors.email ? (
        <div className="input_label">{formik.errors.email}</div>
      ) : null}
      <br></br>
      <label htmlFor="password" className="input_label">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        className="input-group mb-3 input_box mx-auto"
      />
      {formik.touched.password && formik.errors.password ? (
        <div className="input_label">{formik.errors.password}</div>
      ) : null}
      <br></br>
      <button type="submit" className="btn btn-primary button_login">
        Submit
      </button>
      </div>
    </form>
    </div>
    </div>
  )
};

export default Login;

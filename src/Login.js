import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// async function generateRequestToken() {
//   // async/await
//   try {
//     const response = await axios({
//       method: 'post',
//       url: `${BASE_URL}/api/v1/login`,
//     })
//     return response.data.request_token
//   } catch (e) {
//     console.error(e)
//     return null
//   }
// }

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: Yup.object({
      email: Yup.string()
        // .min(6, 'Must be 6 characters or more')
        // .max(15, 'Must be 15 characters or less')
        .required('Required'),
      password: Yup.string()
        // .min(8, 'Must be 8 characters or more')
        // .max(20, 'Must be 20 characters or less')
        .required('Required')
      // .matches(
      //   /^.*(?=.*\d)((?=.*[a-zA-Z]){1}).*$/,
      //   "Password must contain atleast one letter and one number"
      // ),
    }),
    onSubmit: values => {
      // generateRequestToken()
      //   .then(requestToken => {
      axios({
        method: 'post',
        url: `${process.env.REACT_APP_BASE_URL}/api/v1/login`,
        headers: {
          apiKey: `${process.env.REACT_APP_API_KEY}`
        },
        data: {
          email: values.email,
          password: values.password
        }
        // }).catch(e => {
        //   console.log(e)
      }).then(resp => {
        alert("login successful")
        console.log(resp);
        const token = resp.data.token;
        localStorage.setItem('token', token);
        const email = values.email;
        localStorage.setItem('email', email);
        window.location.href = '/'
      })
        // .then(res => {
        //   // console.log(res);
        //   const verifiedToken = res.token;
        //   axios({
        //     method: 'post',
        //     url: `${BASE_URL}/api/v1/login`,
        //     headers: {
        //       apiKey: `w05KkI9AWhKxzvPFtXotUva-`
        //     },
        //       token: verifiedToken
        //   });
        //     .then(resp => {
        //       const token = resp.token
        //       localStorage.setItem('token', token)
        //       alert('Login Success!')
        //       // window.location.href = '/'
        //     }).catch(e => {
        //       console.log(e)
        //     }).then(resp => {
        //       const email = values.email
        //       localStorage.setItem('email', email)
        //     })
        // })
        .catch(e => {
          console.log(e)
          alert('Login belum berhasil! cek email dan password')
        })
      // });
    }
  });

  // useEffect(() => {
  //   console.log(localStorage.getItem('token'))
  // }, [])

  return <div className='container'>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="email">Email</label>
      <input
        id="email"
        name="email"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        className="input-group mb-3"
      />
      {formik.touched.email && formik.errors.email ? (
        <div>{formik.errors.email}</div>
      ) : null}
      <br></br>
      <label htmlFor="password">Password</label>
      <input
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        className="input-group mb-3"
      />
      {formik.touched.password && formik.errors.password ? (
        <div>{formik.errors.password}</div>
      ) : null}
      <br></br>
      <button type="submit" className="btn btn-primary">Submit</button>
    </form>
  </div>
}

export default Login;

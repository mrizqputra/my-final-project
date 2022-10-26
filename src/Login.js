import React, { useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

// async function generateRequestToken() {
//   // async/await
//   try {
//     const response = await axios({
//       method: 'get',
//       url: `${process.env.BASE_URL}/api/v1/login`,
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
      username: '',
      password: '',
    },
    validationSchema: Yup.object({
      username: Yup.string()
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
            url: `https://api-bootcamp.do.dibimbing.id/api/v1/login`,
            headers: {
              apiKey: `w05KkI9AWhKxzvPFtXotUva-`
            },
            data: {
              username: values.username,
              password: values.password
            }
          })
          .then(res => {
            const verifiedRequestToken = res.data.request_token;
            axios({
              method: 'post',
              url: `$https://api-bootcamp.do.dibimbing.id/api/v1/login`,
              data: {
                request_token: verifiedRequestToken
              }
            })
            .then(resp => {
              const token = resp.data.token
              localStorage.setItem('token', token)
              alert('Login Success!')
              window.location.href = '/'
            }).catch(e => {
              console.log(e)
            }).then(resp => {
              const userName = values.username
              localStorage.setItem('userName', userName)
            })
          })
          .catch(e => {
            alert('Login belum berhasil! cek username dan password')
          })
        // });
    },
  });

  useEffect(() => {
    console.log(localStorage.getItem('token'))
  }, [])

  return <div className='container'>
    <form onSubmit={formik.handleSubmit}>
      <label htmlFor="username">Username</label>
      <input
        id="username"
        name="username"
        type="text"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.username}
        className="input-group mb-3"
      />
      {formik.touched.username && formik.errors.username ? (
        <div>{formik.errors.username}</div>
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

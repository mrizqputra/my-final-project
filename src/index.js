import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import Navbar from './Navbar';
import Footer from './footer';
import Login from './Login';
import Register from './Register';
import Foodlist from './foodlist';
import Showuser from './Showuser';
import Registerfood from './Registerfood';
import Homefood from './homefood';
// import Breadcrump from './Breadcrump';
// import Profile from './Profile';
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <>
    <Navbar />
    <Outlet />
    <Footer />
    </>,
    errorElement: <p>Page Not Found</p>,
    children: [
      {
        path: "/",
        element: <><App /><Homefood /></>  
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
      {
        path: "/foodlist",
        element: <>
        {/* <Breadcrump/> */}
        <Foodlist /></>
      },
      {
        path: "/showuser",
        element: <Showuser />
      },
      // {
      //   path: "/profile",
      //   element: <Profile />
      // },
      {
        path: "/registerfood",
        element: <Registerfood />
      }
    ],
  }
])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router} />
);


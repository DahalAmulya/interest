import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import reportWebVitals from "./reportWebVitals";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Components/Layout";

import Given from "./Components/About";

import SignUp from "./Components/SignUp";
import Customer from "./Components/Customer";
import Taken from "./Components/Taken";
import User from "./Components/Users";
const root = ReactDOM.createRoot(document.getElementById("root"));

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "given",
        element: <Given />,
      },
      {
        path: "customer",
        element: <Customer />,
      },

      {
        path: "signup",
        element: <SignUp />,
      },
      {
        path: "user",
        element: <User />,
      },
      {
        path: "taken",
        element: <Taken />,
      },
    ],
  },
]);
root.render(
  <React.StrictMode>
    <div className="overflow-hidden">
      <RouterProvider router={router} />
    </div>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

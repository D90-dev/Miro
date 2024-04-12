import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Jewelry from "./Pages/Jewelry/Jewelry.jsx";
import Price from "./Pages/Price/Price.jsx";
import Layout from "./Components/Layout/Layout.jsx";
import JewelryDetails from "./Components/JewelryDescription/JewelryDescription.jsx";

const router = createBrowserRouter([
  {
    path: "/jewelry",
    element: <Jewelry />,
  },

  {
    path: "/engagement-rings",
    element: <Price />,
  },

  {
    path: "/wedding-bands",
    element: <Price />,
  },

  {
    path: "/diamonds",
    element: <Price />,
  },

  {
    path: "/jewelry/:id",
    element: <JewelryDetails />,
  },

  {
    path: "/",
    element: <App />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Layout>
      <RouterProvider router={router} />
    </Layout>
  </React.StrictMode>
);

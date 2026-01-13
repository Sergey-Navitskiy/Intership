// src/app/router.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../pages/Home";
import Locations from "../pages/Locations";
import Login from "../pages/Login";
import Shop from "../pages/Shop";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />, // Обертка с Хедером
    errorElement: <div>404 Not Found</div>,
    children: [
      {
        index: true, // Это значит path="/"
        element: <Home />,
      },
      {
        path: "locations",
        element: <Locations />,
      },
      {
        path: "locations/:id",
        element: <div>Детальная страница (пока заглушка)</div>,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "shop",
        element: <Shop />,
      },
    ],
  },
]);

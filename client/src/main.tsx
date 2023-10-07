import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "./Navbar";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <Navbar />
        <Outlet />
      </>
    ),
    children: [
      {
        index: true,
        element: <Home />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

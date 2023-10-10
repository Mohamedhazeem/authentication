import React from "react";
import ReactDOM from "react-dom/client";
import "./main.css";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import { Home } from "./Home";
import { Navbar } from "./Navbar";
import { SignUp } from "./SignUp";

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
      {
        path: "/signup",
        element: <SignUp />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

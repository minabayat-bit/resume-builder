import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Home from "./page/home";
import Login from "./components/Login";
import Register from "./components/Register";



const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
   {
    path: "/login",
    element:<Login/> ,
  },
  {
    path: "/register",
    element:<Register/> ,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

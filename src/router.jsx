import { createBrowserRouter, Navigate } from "react-router-dom";

import Home from "@views/Home.jsx";
import About from "@views/About.jsx";
import Error404 from "@views/Error404.jsx";

import GuestLayout from "@layouts/GuestLayout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    name: "GuestLayout",
    element: <GuestLayout />,
    children: [
      {
        path: "/",
        name: "Home",
        element: <Home />,
      },
      {
        path: "/about",
        name: "About",
        element: <About />,
      },
    ],
  },
  // {
  //   path: "/products/:id",
  //   name: "Product",
  //   element: <Product />
  // }
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;

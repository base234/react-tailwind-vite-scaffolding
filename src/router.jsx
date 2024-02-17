import { createBrowserRouter, Navigate } from "react-router-dom";

import GuestLayout from "@layouts/GuestLayout.jsx";
import Home from "@views/Home.jsx";
import HowTo from "./views/HowTo";
import About from "@views/About.jsx";
import Error404 from "@views/Error404.jsx";


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
        path: "/how-to",
        name: "HowTo",
        element: <HowTo />,
      },
      {
        path: "/about",
        name: "About",
        element: <About />,
      },
    ],
  },
  {
    path: "*",
    element: <Error404 />,
  },
]);

export default router;

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainRoute from "./Pages/MainRoute.jsx";
import Home from "./Pages/Home.jsx";
import AllAppPage from "./Pages/AllAppPage.jsx";
import Installation from "./Pages/Installation.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allapps",
        Component: AllAppPage,
      },
      {
        path: "/installation",
        Component: Installation,
      },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

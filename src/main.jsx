import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import MainRoute from "./Pages/MainRoute.jsx";
import Home from "./Pages/Home.jsx";
import AllAppPage from "./Pages/AllAppPage.jsx";
import Installation from "./Pages/Installation.jsx";
import AppDetails from "./Components/AppDetails.jsx";
import ErrorPage from "./Pages/ErrorPage.jsx";
import AppNotFound from "./AppNotFound.jsx";
// import "react-toastify/dist/ReactToastify.css";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainRoute></MainRoute>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/allapps",
        Component: AllAppPage,
      },

      // {
      //   path: "/allapps",
      //   children: [
      //     { index: true, Component: AllAppPage }, // /allapps chatgpt setup
      //     { path: ":id", Component: AppDetails }, // /allapps/1, /allapps/2
      //     { path: "*", Component: AppNotFound }, // /allapps/anything-else
      //   ],
      // },
      {
        path: "/installation",
        Component: Installation,
      },
      {
        path: "/appdetails/:id",
        Component: AppDetails,
      },
      // {
      //   path: "/allapps/*",
      //   Component: AppNotFound,
      // },
    ],
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>
);

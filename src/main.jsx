import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "./index.css";
import HomePage from "./pages/HomePage.jsx";
import ProjectPage from "./pages/ProjectPage.jsx";
import ProjectDetailPage from "./pages/ProjectDetailPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";

const router = createBrowserRouter([
  {
    element: <App />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/projets",
        element: <ProjectPage />,
      },
      {
        path: "/projets/:id",
        element: <ProjectDetailPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "*",
        element: <h1>Page not found</h1>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

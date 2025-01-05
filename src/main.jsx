import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Detail from "./Page/Detail.jsx";
import { Toaster } from "react-hot-toast";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "details/:id",
    element: <Detail></Detail>,
    loader: () => fetch("project.json"),
  },
]);
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
    <Toaster position="top-center" reverseOrder={false}></Toaster>
  </StrictMode>
);

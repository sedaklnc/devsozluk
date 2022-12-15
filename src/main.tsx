import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import Router from "@/router/index";
import { AuthProvider } from "@/context/Auth";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/tailwind.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <AuthProvider>
    <ToastContainer theme="dark" position="top-center" />
    <RouterProvider router={Router} />
  </AuthProvider>
);

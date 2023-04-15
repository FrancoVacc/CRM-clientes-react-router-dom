import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import NuevoClientes, {
  action as clientesAction,
} from "../pages/NuevoClientes";
import Home, { clientesLoader } from "../pages/Home";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <NotFound />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: clientesLoader,
      },
      {
        path: "/clientes/nuevo",
        element: <NuevoClientes />,
        action: clientesAction,
      },
    ],
  },
]);

import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Layout from "../layout/Layout";
import NuevoClientes, {
  action as clientesAction,
} from "../pages/NuevoClientes";
import Home, { clientesLoader } from "../pages/Home";
import NotFound from "../pages/NotFound";
import EditarClientes, {
  editarClietnesLoader,
  action as editarClienteAction,
} from "../pages/EditarClientes";
import { action as eliminarClienteAction } from "../components/Cliente";

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
      {
        path: "/clientes/:id/editar",
        element: <EditarClientes />,
        loader: editarClietnesLoader,
        action: editarClienteAction,
      },
      {
        path: "/clientes/:id/eliminar",
        element: <EditarClientes />,
        action: eliminarClienteAction,
      },
    ],
  },
]);

import React from "react";
import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";

const Home = () => {
  const clientes = useLoaderData();

  return (
    <div>
      <h1 className="font-black text-2xl text-slate-50 bg-slate-900 w-full px-10">
        Clientes
      </h1>
      <p className="mt-3 font-thin text-lg italic px-10">
        "Adminsitra tus Clientes"
      </p>
      <div>
        {clientes.length > 0 ? (
          clientes.map((cliente) => (
            <div key={cliente.id}>
              <Cliente cliente={cliente} />
            </div>
          ))
        ) : (
          <p>Cargando</p>
        )}
      </div>
    </div>
  );
};

export default Home;

export const clientesLoader = () => {
  const clientes = [
    {
      id: "1",
      nombre: "Franco",
      telefono: "3444-407543",
      email: "franco@mail.com",
      empresa: "programacion",
    },
    {
      id: "2",
      nombre: "Tami",
      telefono: "3444-444444",
      email: "Tami@mail.com",
      empresa: "programacion",
    },
    {
      id: "3",
      nombre: "Piti",
      telefono: "3444-555555",
      email: "Piti@mail.com",
      empresa: "programacion.com",
    },
    {
      id: "4",
      nombre: "Chiquito",
      telefono: "3444-6666666",
      email: "Chiquito@mail.com",
      empresa: "programacion.com",
    },
    {
      id: "5",
      nombre: "Messi",
      telefono: "3444-7777777",
      email: "Messi@mail.com",
      empresa: "programacion",
    },
  ];
  return clientes;
};

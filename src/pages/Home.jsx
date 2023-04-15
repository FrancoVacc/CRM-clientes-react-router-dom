import React from "react";
import { useLoaderData } from "react-router-dom";
import Cliente from "../components/Cliente";
import { obtenerClientes } from "../data/Clientes";

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
  return obtenerClientes();
};

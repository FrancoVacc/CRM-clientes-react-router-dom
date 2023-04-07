import React from "react";

const Cliente = ({ cliente }) => {
  return (
    <div className="flex justify-between mx-2 p-10 bg-slate-50 rounded-md shadow-xl mb-5">
      <div>
        <h2 className="Font-black text-2xl text-slate-950 ">
          {cliente.nombre}
        </h2>
        <p className=" text-lg text-slate-950">{cliente.telefono}</p>
        <p className=" text-lg text-slate-950">{cliente.email}</p>
        <p className=" text-lg text-slate-950">{cliente.empresa}</p>
      </div>
      <div>
        <button className=" block px-5 py-2 rounded-md bg-blue-900 hover:bg-blue-700 text-slate-50 my-2 w-full">
          Editar
        </button>
        <button className=" block px-5 py-2 rounded-md bg-red-700 hover:bg-red-600 text-slate-50 my-2 w-full">
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default Cliente;

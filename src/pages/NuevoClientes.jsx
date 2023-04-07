import React from "react";
import { Form, useNavigate } from "react-router-dom";
import Formulario from "../components/Formulario";

export const action = async ({ request }) => {
  //extraccion de los datos del formulario
  const formData = await request.formData();

  const datos = Object.fromEntries(formData);

  //validaciones

  return { ok: true };
};

const NuevoClientes = () => {
  const navigate = useNavigate();
  return (
    <div>
      <h1 className="font-black text-2xl text-slate-50 bg-slate-900 w-full px-10">
        Nuevo Cliente
      </h1>
      <p className="mt-3 font-thin text-lg italic px-10">
        "Llena todos los campos para registrar un nuevo cliente"
      </p>
      <Form method="POST">
        <Formulario />
      </Form>
      <div>
        <button
          className="rounded-sm px-5 py-2 bg-slate-950 hover:bg-slate-600 text-white fixed bottom-5 right-5"
          onClick={() => navigate("/")}
        >
          Volver
        </button>
      </div>
    </div>
  );
};

export default NuevoClientes;

import React from "react";
import { Form, useNavigate, useActionData, redirect } from "react-router-dom";
import Formulario from "../components/Formulario";
import Errores from "../components/Errores";
import { agregarClientes } from "../data/Clientes";

export const action = async ({ request }) => {
  //extraccion de los datos del formulario
  const formData = await request.formData();

  const datos = Object.fromEntries(formData);
  const email = formData.get("email");
  const nombre = formData.get("nombre");

  //validaciones
  const errores = [];
  if (Object.values(datos).includes("")) {
    errores.push("Todos los campor son obligatorios");
  }

  const regex = new RegExp(
    "([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|\"([]!#-[^-~ \t]|(\\[\t -~]))+\")@([!#-'*+/-9=?A-Z^-~-]+(.[!#-'*+/-9=?A-Z^-~-]+)*|[[\t -Z^-~]*])"
  );
  const regexNombre = new RegExp(/[a-zA-Z]/);

  if (!regex.test(email)) {
    errores.push("el email no es válido");
  }

  if (!regexNombre.test(nombre)) {
    errores.push("el nombre debe contener solo letras");
  }

  //retornar errores

  if (Object.keys(errores).length) {
    return errores;
  }

  await agregarClientes(datos);
  return redirect("/");
};

const NuevoClientes = () => {
  const errores = useActionData();
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
      {errores?.length &&
        errores.map((error, i) => <Errores key={i}>{error}</Errores>)}

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

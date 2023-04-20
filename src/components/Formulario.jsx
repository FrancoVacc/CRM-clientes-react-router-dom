import React from "react";

const Formulario = ({ cliente }) => {
  return (
    <div className=" bg-slate-50 shadow-xl rounded-md md:w-3/4 mx-2 md:mx-auto mt-5 px-5 py-10">
      <div className="px-2">
        <label htmlFor="nombre" className=" font-semibold text-slate-900">
          Nombre
        </label>
        <input
          type="text"
          placeholder="Ingrese el Nombre"
          className="w-full rounded-lg px-5 py-2 bg-slate-200 mt-1"
          id="nombre"
          name="nombre"
          defaultValue={cliente?.nombre}
        />
      </div>
      <div className="px-2">
        <label htmlFor="empresa" className=" font-semibold text-slate-900">
          Empresa
        </label>
        <input
          type="text"
          placeholder="Ingrese la Empresa"
          className="w-full rounded-lg px-5 py-2 bg-slate-200 mt-1"
          id="empresa"
          name="empresa"
          defaultValue={cliente?.empresa}
        />
      </div>
      <div className="px-2">
        <label htmlFor="telefono" className=" font-semibold text-slate-900">
          Teléfono
        </label>
        <input
          type="text"
          placeholder="Ingrese el teléfono"
          className="w-full rounded-lg px-5 py-2 bg-slate-200 mt-1"
          id="telefono"
          name="telefono"
          defaultValue={cliente?.telefono}
        />
      </div>
      <div className="px-2">
        <label htmlFor="email" className=" font-semibold text-slate-900">
          Email
        </label>
        <input
          type="text"
          placeholder="Ingrese el email"
          className="w-full rounded-lg px-5 py-2 bg-slate-200 mt-1"
          id="email"
          name="email"
          defaultValue={cliente?.email}
        />
      </div>
      <div className="px-2">
        <label htmlFor="nota" className=" font-semibold text-slate-900">
          Nota
        </label>
        <textarea
          placeholder="Ingrese la nota"
          className="w-full rounded-lg px-5 py-2 bg-slate-200 mt-1"
          id="nota"
          cols="30"
          rows="10"
          name="nota"
          defaultValue={cliente?.nota}
        ></textarea>
      </div>
      <div className="mt-5 mx-2">
        <input
          type="submit"
          value="Agregar Cliente"
          className="w-full rounded-lg bg-slate-950 hover:bg-slate-600 text-white py-2"
        />
      </div>
    </div>
  );
};

export default Formulario;

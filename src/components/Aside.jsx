import React from "react";
import { Link, useLocation } from "react-router-dom";

const Aside = () => {
  const location = useLocation();
  return (
    <aside className=" bg-gradient-to-b from-slate-900 to-slate-600 md:w-1/4  py-10">
      <h1 className="text-2xl font-black text-slate-900 bg-slate-50 w-full text-center">
        CRM - Clientes
      </h1>
      <nav className="mt-10 px-10">
        <Link
          className={`md:block mx-2 text-xl hover:text-slate-300 ${
            location.pathname === "/" ? "text-slate-400" : "text-white"
          }`}
          to={"/"}
        >
          Clientes
        </Link>
        <Link
          className={`md:block mx-2 text-xl hover:text-slate-300 ${
            location.pathname === "/clientes/nuevo"
              ? "text-slate-400"
              : "text-white"
          }`}
          to={"/clientes/nuevo"}
        >
          Nuevo Cliente
        </Link>
      </nav>
    </aside>
  );
};

export default Aside;

export const obtenerClientes = async () => {
  try {
    const res = await fetch(import.meta.env.VITE_API_URL);

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    const clientes = await res.json();

    return clientes;
  } catch (error) {
    console.log(error);
  }
};

export const obtenerCliente = async (id) => {
  try {
    const res = await fetch(`${import.meta.env.VITE_API_URL}/${id}`);

    if (!res.ok) throw { status: res.status, statusText: res.statusText };

    const clientes = await res.json();

    return clientes;
  } catch (error) {
    console.log(error);
  }
};

export const agregarClientes = async (data) => {
  const addData = {
    id: Date.now(),
    nombre: data.nombre,
    telefono: data.telefono,
    email: data.email,
    empresa: data.empresa,
    nota: data.nota,
  };

  try {
    const res = await fetch("http://localhost:3000/clientes", {
      method: "POST",
      body: JSON.stringify(addData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const actualizarCliente = async (id, datos) => {
  try {
    const res = await fetch(`http://localhost:3000/clientes/${id}`, {
      method: "PUT",
      body: JSON.stringify(datos),
      headers: {
        "Content-Type": "application/json",
      },
    });
    await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const eliminarClientes = async (id) => {
  try {
    const res = await fetch(`http://localhost:3000/clientes/${id}`, {
      method: "DELETE",
    });
    await res.json();
  } catch (error) {
    console.log(error);
  }
};

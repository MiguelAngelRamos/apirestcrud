const URL = 'http://localhost:4000/clientes';

export const obtenerClientes = async () => {
  try {
    const resultado = await fetch(URL);
    const clientes = await resultado.json();
    return clientes
  } catch (error) { 
    throw error;
  }
}

export const nuevoCliente =  async cliente => {
  try {
    await fetch(URL,{
      method: 'POST',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    // redireccionar al usuario al index.html tengo la tabla de clientes
    window.location.href = 'index.html';
  } catch (error) {
    throw error;
  }
};

// Actualiza un Registro
export const editarCliente = async cliente => {
  try {
    
    await fetch(`${URL}/${cliente.id}`, {
      method: 'PUT',
      body: JSON.stringify(cliente),
      headers: {
        'Content-Type': 'application/json'
      }
    });
    window.location.href = 'index.html';
  } catch (error) {
    throw error;
  }
};

// Un cliente por id
export const obtenerCliente = async id => {
  try {
    const resultado = await fetch(`${URL}/${id}`);
    const cliente = await resultado.json();
    return cliente
  } catch (error) { 
    throw error;
  }
}
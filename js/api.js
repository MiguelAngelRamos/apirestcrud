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
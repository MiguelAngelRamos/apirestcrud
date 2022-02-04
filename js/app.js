import { obtenerClientes } from './api.js';

(()=> {
  const listado = document.querySelector('#listado-clientes');
  // cuando se carga el documento html
  document.addEventListener('DOMContentLoaded', mostrarClientes);
  async function mostrarClientes() {
    const clientes = await obtenerClientes();
    console.log(clientes);
    // {}
    clientes.forEach(cliente => {
      const {nombre, email, telefono, empresa, id } = cliente;
      const row = document.createElement('tr'); // <tr></tr>

      row.innerHTML += `
        <td>
          <p>${nombre}</p>
        </td>

        <td>
          <p>${email}</p>
        </td>
        <td>
          <p>${telefono}</p>
        </td>
        <td>
          <p>${empresa}</p>
        </td>
        <td>
          <a href="editar-cliente.html?id=${id}">Editar</a>
          <a href="#" data-cliente="${id}" class="eliminar">Eliminar</a>
        </td>
      `;
      
    listado.appendChild(row);

    })
  }
  }
)();
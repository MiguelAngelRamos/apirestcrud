export function mostrarAlerta(mensaje) {
  const alerta = document.querySelector('.form-text');
  alerta.classList.add('error', 'text-center', 'mt-5');
  alerta.innerHTML = `
    <span>${mensaje}</span>
  `;
}

export function validar(obj) {
  // true cuando falten campos
  // false cuando esten todos los campos
  return !Object.values(obj).every( input => input !== '');
}
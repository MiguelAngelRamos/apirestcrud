export function validar(obj) {
  // true cuando falten campos
  // false cuando esten todos los campos
  return !Object.values(obj).every( input => input !== '');
}
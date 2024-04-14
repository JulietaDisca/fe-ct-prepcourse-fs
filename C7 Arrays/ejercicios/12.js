function convertirStringAMayusculas(array) {
  // Convierte a mayúsculas todos los strings del array.
  // Retorna el arreglo resultante.
  // Tu código:
  let stringMayusculas = [];
  for(let i = 0; i < array.length; i++){
    stringMayusculas[i] = array[i].toUpperCase();
  }
  return stringMayusculas;
  //toUpperCase() para convertir un string de minusculas a mayusculas
  //toLowCase() para convertir de mayusculas a minusculas
}

module.exports = convertirStringAMayusculas;
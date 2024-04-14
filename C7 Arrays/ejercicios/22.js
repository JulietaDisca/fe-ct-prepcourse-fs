function tablaDelSeis() {
  // Devuelve un arreglo con los resultados de la tabla de multiplicar del 6 en orden creciente.
  // Desde 0 al 60.
  // Tu código:
  let numerosMultiplicados = [];
  for(let i = 0; i <= 10; i++){
    let multiplos = i * 6;
    numerosMultiplicados.push(multiplos);
  }
  return numerosMultiplicados;
}

module.exports = tablaDelSeis;

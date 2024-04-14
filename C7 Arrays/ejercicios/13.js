function filtrarNumerosPares(array) {
  // Devuelve un arreglo solo con los números pares presentes en el array.
  // Tu código:
  let numFiltrados = [];
  for(let i = 0; i < array.length; i++){
    if(array[i] % 2 === 0){
      numFiltrados.push(array[i]) ;
    }
  }
  return numFiltrados;
}

module.exports = filtrarNumerosPares;

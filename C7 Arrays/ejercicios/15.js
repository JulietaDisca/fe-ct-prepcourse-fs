function encontrarIndiceMayor(array) {
  // Encuentra el índice del número más grande en el array de números.
  // Devuelve el valor de este índice.
  // Tu código:
  let indice = 0;
  for(let i = 1; i < array.length; i++){
    if(array[i] > array[indice]){
      indice = i;
    }
  }
  return indice;
}
module.exports = encontrarIndiceMayor;



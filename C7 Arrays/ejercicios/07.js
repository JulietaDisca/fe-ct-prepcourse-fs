function ordenarArray(array) {
  // Ordena los elementos del areglo array de menor a mayor.
  // Devuelve el arreglo resultante.
  // Tu código:
  return array.sort((a,b) => {
  //sort() se utiliza para ordenar los elementos de un array. Puede ordenar los elementos alfabéticamente como strings, o numéricamente como números
    if(typeof array === 'number'){
      return a - b;
    } return String(a).localeCompare(String(b));
    //String(a) y String(b) convierten los valores de a y b en strings
    //LocaleCompare() es un metodo de strins que compara 2 strings y devuelve un valor numerico que indica si el string pasado por metodo precede, sigue o es igual al string pasado como argumento
  })
} 


module.exports = ordenarArray;

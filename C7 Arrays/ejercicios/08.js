function encontrarElemento(num, array) {
   // Busca el número pasado por argumento dentro del array.
   // Si lo encuentras debes retornar el INDICE en el que se encuentra dentro del array.
   // Si no se encuentra, retorna -1.
   // Tu código:
   let indice = array.indexOf(num);
   return indice;
   //indexOf() para obtener el índice de un elemento en un array. Si el número no está presente en el array, indexOf() devolverá -1.
}

module.exports = encontrarElemento;

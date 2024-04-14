function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  // Verifica si el tipo de dato es numérico
  if(typeof numero !== "number" || numero === NaN) {
    return false;
  } else if(numero % 1 === 0) {
      return true;
    }  else {
        return false;
    }  
}

module.exports = esNumeroEntero;
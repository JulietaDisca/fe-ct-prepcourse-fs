function esNumeroEntero(numero) {
  // La función recibe un argumento "numero".
  // Verifica si este es un número entero o no.
  // Returna true si lo es, de lo contrario, retorna false.
  // Tu código:
  // Verifica si el tipo de dato es numérico
  if(typeof numero !== "number" || isNaN(numero)) {
    return false;
  } else if(Number.isInteger(numero)) {
      return true;
    }  else {
        return false;
    }  
}

module.exports = esNumeroEntero;
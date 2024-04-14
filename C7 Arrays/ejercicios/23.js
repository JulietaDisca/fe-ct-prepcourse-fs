function breakStatement(num) {
  // Iterar en un bucle aumentando en 2 el número num recibido hasta un límite de 10 veces.
  // Guardar cada nuevo valor en un arreglo y retórnarlo.
  // Si en algún momento el valor de la suma y la cantidad de iteraciones coinciden, debe interrumpirse
  // la ejecución y retornar el string: "Se interrumpió la ejecución".
  // PISTA: Utiliza el statement 'break'.
  // Tu código:
  var resultados = [];

  // Iteramos en un bucle hasta 10 veces
  for (var i = 0; i < 10; i++) {
    // Aumentamos el número en 2 en cada iteración
    num += 2;

    // Si el número supera 100, rompemos el bucle
    if (num > 100) {
      break;
    }

    // Guardamos el nuevo valor en el arreglo de resultados
    resultados.push(num);

    // Si el valor de la suma coincide con la cantidad de iteraciones, interrumpimos la ejecución
    if (num === i) {
      return "Se interrumpió la ejecución";
    }
  }

  // Devolvemos el arreglo de resultados
  return resultados;
}

module.exports = breakStatement;

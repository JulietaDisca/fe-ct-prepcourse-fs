function promedioResultadosTest(resultadosTest) {
  // Itera sobre los elementos del arreglo resultadosTest y devuelve el promedio de las notas.
  // Tu código:
  //se suman las notas y se dividen por la cantidad
  //sumaNotas
  //cantidadDeNotas
  //promedio = sumaNotas/cantidadDeNotas
  let sumaResultadosTest = 0;
  let promedio = 0;
  for(let i = 0; i < resultadosTest.length; i++){
    sumaResultadosTest += resultadosTest[i];
    promedio = sumaResultadosTest / resultadosTest.length;
  }
  
  return promedio;
}

module.exports = promedioResultadosTest;


//PROMEDIO NOTAS = (resultado + resultado) / cantidad notas = resultado;
//resultadosTest[i] = notas;
//resultadosTest.length = cantidad notas;
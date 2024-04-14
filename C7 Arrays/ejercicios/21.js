function mesesDelAño(array) {
  // El array contiene algunos meses del año desordenados. Debes recorrerlo, buscar los meses "Enero",
  // "Marzo" y "Noviembre", guardarlos en un nuevo arreglo y retornarlo.
  // Si alguno de los meses no está, retornar el string: "No se encontraron los meses pedidos".
  // Tu código:
  let nuevoArreglo = [];
  for(let i = 0; i < array.length; i++){
    let mes = array[i];
    if(mes === "Enero" || mes === "Marzo" || mes === "Noviembre"){
      nuevoArreglo.push(mes);
    }
  }

    if(nuevoArreglo.length === 3){
      return nuevoArreglo;
    } else{
      return "No se encontraron los meses pedidos";
      }
}

module.exports = mesesDelAño;

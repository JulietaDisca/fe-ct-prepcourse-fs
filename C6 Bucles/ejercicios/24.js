function invertirTexto(texto) {
   // La función recibe un argumento "texto" que es un string.
   // Tu objetivo es invertir el string y devolver el string invertido.
   // Tu código:
   let resultado = '';

   for(let i = texto.length; i >= 0; i--){
      resultado += texto[i];
   }
   return resultado;
}

module.exports = invertirTexto;

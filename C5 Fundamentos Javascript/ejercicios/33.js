function esNumeroPrimo(numero) {
  // La función recibe un argumento "numero".
  // Determina si este corresponde a un número primo.
  // De ser así, retorna true.
  // De lo contrario, retorna false.
  // IMPORTANTE: Recuerda que un número primo es aquel que
  // solo es divisible por sí mismo y por 1.
  // Tu código:
  if (numero <= 1) {
    return false;
  }
  // Iteramos desde 2 hasta la raíz cuadrada del número
  for (let i = 2; i <= Math.sqrt(numero); i++) {
      // Si el número es divisible por algún otro número que no sea 1 ni él mismo, no es primo
      if (numero % i === 0) {
          return false;
      }
  }
  // Si no se encontró ningún divisor además de 1 y el propio número, es primo
  return true;
}
module.exports = esNumeroPrimo;

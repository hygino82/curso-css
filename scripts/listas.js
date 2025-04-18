const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("Multiplicar valores por 7");
console.log(numeros.map((x) => 7 * x));

console.log("Apenas números pares");
const pares = numeros.filter(function (valor) {
  return valor % 2 == 0;
});
console.log(pares);

/*const somarValores = numeros.reduce(function (valor, acumulador) {
  return acumulador + valor;
}, 0);*/

const somarValores = numeros.reduce((acumulador, valor) => acumulador + valor, 0);
console.log(`A soma dos valore vale ${somarValores}`)
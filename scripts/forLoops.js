// for (let index = 0; index < 10; index++) {
//   console.log(index);
// }

const carros = ["fusca", "kombi", "brasilia", "147", "chevete", "monza"];

carros.forEach(function (x, index) {
  console.log(index);
  console.log(x.toUpperCase());
});

carros.forEach((x, index) => console.log(`${index} ${x}`));

const pessoa = {
  nome: "Teodoro",
  sobrenome: "Gomes",
  idade: 35,
  email: "teodoro@email.com",
};

for (key in pessoa) {
  console.log(pessoa[key]);
  console.log(key);
}

let soma = 0;

const valores = [1, 2, 3, 4, 5, 6];
let posicao = 0;

while (posicao < valores.length) {
  soma += valores[posicao];
  posicao++;
}

console.log(`A soma vale: ${soma}`);

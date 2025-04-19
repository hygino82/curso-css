const p = { nome: 'Jupira', idade: 37, email: 'jupirinha@email.com' };

const { nome, idade, email } = p;

for (key in p) console.log(key, p[key]);

const frutas = ['banana', 'manga', 'laranja'];
const [, f1, f2] = frutas; //pega os dois ultimos elementos

console.log(f2);

const partes = ['ombro', 'joelho', 'orelha'];

const corpo = ['cabeça', partes[0], partes[1], partes[2], 'pés'];
console.log(corpo);

const corpoComSpread = ['cabeça', ...partes, 'pés']; //spread operator
console.log(corpoComSpread);

function createUser(nome, idade, contato1, contato2, contato3) {
  return {
    nome,
    idade,
    contatos: [contato1, contato2, contato3],
  };
}

function createUserSpread(nome, idade, ...contatos) {
  return {
    nome,
    idade,
    contatos,
  };
}

const usuarioA = createUser(
  'Fabio',
  45,
  { email: 'fabio@teste.com' },
  { fone: '1234-1234' },
  { whatsapp: '4321-4321' }
);
const usuarioB = createUserSpread(
  'Fabio',
  45,
  { email: 'fabio@teste.com' },
  { fone: '1234-1234' },
  { whatsapp: '4321-4321' }
);

console.log(usuarioA);
console.log(usuarioB);

const usuario = {
  nome: 'hugobacker',
  email: 'hugobacker@teste.com',
};

const novoUsuario = { ...usuario, regra: 'admin' };

console.log(usuario);
console.log(novoUsuario);

const corpoCompleto = ['cabeça', ...partes, 'pé'];

//tentativa errada de juntar faz uma lista dentro da outra
const corpo2 = ['cabeça', partes, 'pé'];

console.log(corpoCompleto);
console.log('tentativa errada de juntar faz uma lista dentro da outra');
console.log(corpo2);

const ingredientesSemSpread = ['ovo', 'presunto'];
const temperos = ['sal', 'pimenta'];

ingredientesSemSpread.push(temperos);
console.log('Ingredientes Sem Spread');
console.log(ingredientesSemSpread);

const ingredientesComSpread = ['ovo', 'presunto'];
ingredientesComSpread.push(...temperos);
console.log('Ingredientes Com Spread');
console.log(ingredientesComSpread);

//REST OPERATOR
function calcular(subtrairItem, multiplicaritem, ...itensSomar) {
  let total = 0;
  for (const item of itensSomar) {
    total += item;
  }

  return (total - subtrairItem) * multiplicaritem;
}

console.log('\nREST OPERATOR');
console.log(calcular(1, 2, 3, 4));

console.log(calcular(1, 2, 3, 4, 5, 6, 7, 8));

const frutas1 = ['banana', 'morango', 'manga', 'kiwi', 'maracujá'];
const [primeiroItem, segundoItem, ...outrosItens] = frutas1;

console.log(primeiroItem);
console.log(segundoItem);
console.log(outrosItens);
/*No exemplo acima nós estamos pegando o primeiro elemento “banana” e guardando na variável
“primeiroItem”, depois pegamos o segundo elemento “morando” e guardamos no
“segundoItem”, até aqui tivemos o processo de desestruturação, que pega dois primeiros itens
do array de frutas.
Depois é feito um agrupamento usando o rest operator, onde pegamos os demais itens do array
de “frutas” de guardamos dentro do array “outrosItens”.
É importante ressaltar que o rest operator deve ser o último item a ser aplicado na relação de
variáveis, pois ele representa o RESTO DOS ELEMENTOS*/

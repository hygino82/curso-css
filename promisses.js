/*PROMISES
Uma maneira de trabalhar com operações assíncronas de forma mais legível e gerenciável.*/

const promise = new Promise((resolve, reject) => {
  setTimeout(() => resolve('Feito!'), 3000);
});

promise.then((result) => {
  console.log(result);
});

/*21
PROMISES
Uma maneira de trabalhar com operações assíncronas de forma mais legível e gerenciável.
Para exemplificar o uso do Promise, temos o exemplo acima aplicando um “delay” para aguardar
a resolução do que foi pedido. Nesse caso é feito um retorno da string “Feito!” para essa Promise.
Depois aplicamos o “then” que é executado após a resolução dessa Promise, imprimindo o que
é fruto do resultado dela.
Ao executar esse código vocês poderão observar que o “then” só acontece após o tempo definido
no setTimeout acabar. É uma simulação de que o Promise nos permite trabalhar de foma
assíncrona.
Uma Promise representa um valor que pode estar disponível agora, depois ou nunca. Essa
Promise pode ser resolvida(resolve) ou rejeitada(reject)*/
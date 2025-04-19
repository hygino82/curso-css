/*Um código que é executado sem bloquear a execução principal do programa é
denominado um código assíncrono.
E assim a execução do programa não fica “travado” esperando aquela ação acontecer, ele
continua sendo executado em paralelo com o código assíncrono, como se fossem as threads em
Java.*/

//import fetch from 'node-fetch';

const fetch = require('node-fetch');  // Importando a biblioteca
const resposta = fetch('http://api.postmon.com.br/v1/cep/8230901');

resposta
  .then((data) => data.json())
  .then((data) => console.log(data))
  .catch((erro) => console.log(erro));

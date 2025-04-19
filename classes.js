import { somar } from './calculadora.js';

class Pessoa {
  constructor(nome) {
    this.nome = nome;
  }

  saudacao() {
    console.log(`Olá meu nome é ${this.nome}`);
  }
}

const hugo = new Pessoa('Hugo');
hugo.saudacao();
/*Acima podemos observar a implementação de um exemplo de classe. Onde temos um construtor
e um método “saudação”, mas que vale observar que o método é definido como sendo uma
função, mas sem a palavra function.
Os atributos são referenciados obrigatoriamente por meio do this.
O método construtor é executado toda vez que instanciamos nossa classe.*/

console.log(somar(2, 3)); //5

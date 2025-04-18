const pessoa = {
    nome: "Teodoro",
    sobrenome: "Gomes",
    idade: 35,
    email: "teodoro@email.com",
    hobbies: ["Bicicleta", "Caminhada", "Video Game"],
    gato: { nome: "Saci", idade: 4 },
  };
  
  const {
    nome: primeiroNome,
    sobrenome: ultimoNome,
    idade,
    email,
    hobbies,
    gato: { nome: nomeDoGato },
  } = pessoa;
  
  console.log(`nome : ${primeiroNome}`);
  console.log(`sobrenome: ${ultimoNome}`);
  console.log(`idade: ${idade}`);
  console.log(`email: ${email}`);
  console.log(`nome do gato: ${nomeDoGato}`);
  console.log("Hobbies");
  hobbies.forEach((x) => console.log(x));
  
  console.log(pessoa);

  const tarefas = [
    {
      id: 1,
      descricao: "Estudar JS e TS",
      terminada: false,
    },
    {
      id: 2,
      descricao: "Praticar programação",
      terminada: true,
    },
    {
      id: 3,
      descricao: "Ler livros de desenvolvimento",
      terminada: false,
    },
    {
      id: 4,
      descricao: "Participar de projetos open-source",
      terminada: false,
    },
    {
      id: 5,
      descricao: "Aprender React e Node",
      terminada: true,
    },
  ];
  
  tarefas.push({
    id: 6,
    descricao: "Aprender testes unitários",
    terminada: false,
  });
  
  console.log(tarefas[tarefas.length - 1].descricao);
  

  class PessoaObjeto {
    constructor(nome, sobrenome, idade, email) {
      this.nome = nome;
      this.sobrenome = sobrenome;
      this.email = email;
      this.idade = idade;
    }
  
    nomeCompleto() {
      console.log(`${this.nome} ${this.sobrenome}`);
    }
  
    static falar() {
      console.log("Falou!");
    }
  }
  
  const pessoa1 = new PessoaObjeto(
    "Gorete",
    "Medeiros",
    "goretinha@email.com",
    54
  );
  
  pessoa1.nomeCompleto();
  PessoaObjeto.falar();
  
  class Animal {
    constructor(nome) {
      this.nome = nome;
    }
  
    speak() {
      console.log(`${this.nome} fez barulho!`);
    }
  }
  
  class Ave extends Animal {
    constructor(nome) {
      super(nome);
    }
    voa() {
      console.log(`${this.nome} vou!`);
    }
  }
  
  const ave = new Ave("Juma");
  ave.voa();
  
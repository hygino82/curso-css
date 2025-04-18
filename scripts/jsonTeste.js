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
  
  //converte objeto para JSON
  const tarefasJSON = JSON.stringify(tarefas);
  
  console.log(tarefasJSON);
  
  //JSON para objeto
  const listaTarefas = JSON.parse(tarefasJSON);
  console.log(listaTarefas);

  async function lerJson() {
    const response = await fetch("../exemplo.json").catch(() => null);
    if (response) {
      const data = await response.json();
      console.log(data);
    }
  }
  
  lerJson();
  
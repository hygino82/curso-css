const message = "Olá mundo!";

const verify = (message) =>
  `A mensagem ${message.toUpperCase()} tem ${message.length} carateres`;

console.log(verify(message));

// const nomes = "teodoro,godofredo,jupira";
// console.log(nomes.split(","));

nomes.split(",").forEach((c) => console.log(c.toUpperCase()));

console.log(typeof message);

console.log(7 < 3);

function validarNomes(nomes) {
    if (
      !Array.isArray(nomes) ||
      !nomes.every((nome) => typeof nome === "string")
    ) {
      throw new Error("nomes deve ser um array de strings");
    }
    return nomes;
  }
  
  const nomes = validarNomes(["gorete", "teodoro", "melania", "jupira"]);
  console.log(nomes[2]);
  
  const buscarElemento = (valor) => nomes.indexOf(valor);
  
  function verificaExistencia(elemento) {
    const res = buscarElemento(elemento);
  
    if (res < 0) {
      console.log(`Elemento: ${elemento} não encontrado!`);
    } else {
      console.log(
        `Elemento: ${elemento.toUpperCase()} ocupa a posição ${res} da lista`
      );
    }
  }
  
  verificaExistencia("melania");
  
  console.log(nomes.sort());
  
  const outro = nomes.map((x) => x.toUpperCase());
  console.log(outro);
  
  
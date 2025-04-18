const titulo = document.querySelector("#cadastrar-usuario");
titulo.textContent = "Add User"; //usa em query selector

const btnCadastar = document.getElementById("cadastrar");
btnCadastar.value = "Add";
//btnCadastar.innerText usa em getElementById

const teste = document.querySelector(".container #formulario");
console.log(teste);

//const itens = document.querySelectorAll(".item"); //devolve um node list
const itens = document.getElementsByClassName("item"); //devolve um html collection não podemos usar métodos de lista

const tagItens = document.getElementsByTagName("li");
console.log(tagItens);

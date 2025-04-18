/*const titulo = document.querySelector("#cadastrar-usuario");
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
*/

const items = document.querySelector(".items");

//items.remove();//remove da página toda a lista
//items.firstElementChild.remove();//elimina o primeiro elemento da lista
//items.lastElementChild.remove();//elimina o ultimo elemento da lista

// items.children[1].textContent = "Item 2 Novo"; //muda o testo do elemento na posição 1

// items.lastElementChild.innerHTML = "<h3>Olá</h3>";

const botao = document.getElementById("cadastrar");
botao.style.background = "cyan"; //muda a cor do botão

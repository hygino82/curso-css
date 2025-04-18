const botaoSubmit = document.getElementById("cadastrar");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const formulario = document.getElementById("formulario");
const errorMessage = document.querySelector(".message");
const items = document.querySelector("#items");

botaoSubmit.addEventListener(
  "click",
  (event) => {
    event.preventDefault();

    const nomeValor = campoNome.value;
    const emailValor = campoEmail.value;

    if (emailValor === "" || nomeValor === "") {
      errorMessage.textContent = "Preencha os campos primeiro";
      errorMessage.classList = "error";

      setTimeout(() => {
        errorMessage.textContent = "";
        errorMessage.classList = "";
      }, 3000);
      return;
    }

    items.innerHTML = `<li>${nomeValor}</li><li>${emailValor}</li>`;
    campoNome.value = "";
    campoEmail.value = "";

    // const li = document.createElement("li");
    // li.classList = "item";
    // li.textContent = `Nome: ${nomeValor}`;

    // items.appendChild(li);
  },
  false
);

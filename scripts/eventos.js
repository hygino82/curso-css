const botaoSubmit = document.getElementById("cadastrar");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const formulario = document.getElementById("formulario");
const items = document.querySelector(".items");

botaoSubmit.addEventListener(
  "click",
  function (event) {
    event.preventDefault();
    //console.log(event);
    //console.log("Apertou o botão!");

    const nomeValor = campoNome.value;
    const emailValor = campoEmail.value;

    if (emailValor === "" || nomeValor === "") {
      alert("Preencha os campos!");
      formulario.style.background = "red";
      return;
    }

    formulario.style.background = "beige";

    //formulario.innerHTML += `<h3>${nomeValor}</h3><br><h3>${emailValor}</h3>`;
    //adiciona ao formulario o elemento h3
    items.children[0].innerHTML = `<h3 style='color:red;'>${nomeValor}</h3>`;
    items.children[1].innerHTML = `<h3>${emailValor}</h3>`;

    const p = { nomeValor, emailValor };

    console.log(p);
  },
  false
);

campoNome.addEventListener("change", function (event) {
  console.log(event.target.value);
});

campoEmail.addEventListener("change", function (event) {
  console.log(event.target.value);
});

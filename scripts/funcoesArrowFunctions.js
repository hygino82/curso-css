console.log("oi");

function soma(a, b = 3, c = 10) {
  return a + b + c;
}

console.log(soma(10));

const sumaArrow = (a, b = 3, c = 10) => a + b + c;

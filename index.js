import cipher from './cipher.js';

const botao1 = document.getElementById("button1")
const botao2 = document.getElementById("button2")
const campoEntrada = document.getElementById("mensagem");
const numDesloc = document.getElementById("deslocamento");
const resultado = document.getElementById("Cifrada");



botao1.addEventListener("click", function () {
  resultado.value = cipher.encode(parseInt(numDesloc.value), campoEntrada.value);
});

botao2.addEventListener("click", function () {
  resultado.value = cipher.decode(parseInt(numDesloc.value), resultado.value);
});

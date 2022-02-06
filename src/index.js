import cipher from './cipher.js';

const enviar = document.getElementById("enviar")
const decifrar = document.getElementById("decifrar")
const campoEntrada = document.getElementById("mensagem");
const numDesloc = document.getElementById("deslocamento");
const resultado = document.getElementById("Cifrada");

enviar.addEventListener("click", function () {
  resultado.value = cipher.encode(parseInt(numDesloc.value), campoEntrada.value);
});

decifrar.addEventListener("click", function () {
  resultado.value = cipher.decode(parseInt(numDesloc.value), resultado.value);
});

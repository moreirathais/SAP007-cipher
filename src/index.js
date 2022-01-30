import cipher from './cipher.js';

console.log(cipher);

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


//const elemento = document.getElementById ("button");
//elemento.addEventListener("click", enviar);

//function enviar(){
  //  let texto = document.getElementById("cifrar").value.toUpperCase();
    //document.getElementById("cifrada").value = texto
    //let quantidade = document.querySelector("#deslocamento").value
   
 //}

//function cifrar(){
  //  let texto = document.getElementById("cifrar").value.toUpperCase();
    //document.getElementById("cifrada").value = texto
  //  let quantidade = document.querySelector("#deslocamento").value
    //texto = cipher.encode(quantidade, texto);
    
//}



//function decifrar(){
  //  let textoCifrado = document.getElemnteById("cifrada").value.toUpperCase();
    //document.getElementById("decifrada").value = textoCifrado
   // let quantidade = document.querySelector("#deslocamento").value
    //textoCifrado= cipher.decode(quantidade, textoCifrado)

//}




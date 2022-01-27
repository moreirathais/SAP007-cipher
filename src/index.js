import cipher from './cipher.js';

const elemento = document.getElementById ("button");
elemento.addEventListener("click", enviar);
function enviar(){
    console.log("Entrou")
 
    let texto = document.getElementById("cifrar").value.toUpperCase();
    document.getElementById("cifrada").value = texto
}

let quantidade = document.getElementById("descolamento");
function cifrar(){
    document.getElementById("cifrada").value = cipher.encode(quantidade, texto);

    let textoCifrado = document.getElementById("cifrada").value.toUpperCase();
}

function cifrar ()


console.log(cipher);
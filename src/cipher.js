const cipher = {
  encode(quantidade, texto){
  let resultadoEncode = "";
    for (let i=0; i<texto.length; i++){
    let códigoAsc = texto.charCodeAt(i);   
    let codigoLetra = 65;
    let valorEncode = ((codigoASC - codigoLetra + quantidade)%26 + codigoLetra);
    resultadoEncode = resultadoEncode.concat(texto.fromCharCode(valorEncode));
    }
    return resultadoEncode;
    },
 decode(quantidade,textoCifrado){
   let resultadoDecode = "";
   for (let i=0; i< textoCifrado.length; i++){
    let codigoASC =tecoCifrado.charCodeAt(i)
       let codigoLetra = 90
       let valorDecode= ((codigoASC - codigoLetra - quantidade)%26 + codigoLetra);
       resultadoDecode = resultadoDecode.concat(textoCifrado.fromCharCode(valorDecode));
    }

    return resultadoDecode;

    }
}

   export default cipher;

  


















//const alfabeto =["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
//const msg1 = document.getElementById("cifrar");
//const msg2 = document.getElementById("cifrada");

//msg1.addEventListener("submit", event => {
//   event.//preventDefault();
 //   msg2 = [...(msg1).document.getElementById("cifrar").value].map(char => encrypt(char)).join("");
//});

//function encode (msg1){
  //  const deslocamento = Number(form.input.value);
    //if(alfabeto.includes);

    //const posicao= alfabeto.indexOf;
    //const novaPosicao = (posicao+deslocamento)%26;
    //return alfabeto[novaPosicao]

//}


//let codigoASC = str.charCodeAt(alfabeto);
//let codigoLetra =alfabeto.length-1;
//let deslocamento = input.getElementByID("deslocamento");
//let frase = document.getElementById("cifrada");
//const cipher = (codigoASC-codigoLetra+deslocamento)%26 - codigoLetra;

//function encode (i) {(frase[i]-65 + 2) %26+65;{
   // if (onclick){cipher;
   //     return document.write("msg2");
        
  //  }

  //  function decode (i) {(frase[i]-65 - 2) %26+65;{
   //     if (onclick){cipher;
   //         return document.write("msg2");
            
    //    }   
//


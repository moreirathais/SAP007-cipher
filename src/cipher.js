const cipher = {
   encode(quantidade, string) 
    let msg1 = document.getElementById("cifrar")
    let quantidadeLetras = String.length
    let quantidade = document.getElementById("quantidade")
    
   for (let i=0; i<quantidadeLetras; i++){
    let códigoAsc = String.charCodeAt(i)   
    let codigoLetra = 65
    let valorMsg1 = ((codigoASC - codigoLetra + quantidade)%26 + codigoLetra);
        resultadoMsg1 = resultadoMsg1.concat(String.fromCharCode(valorMsg1));
    }

   return resultadoMsg1;
    }

    decodeURI(quantidade,string){
        let msg3 =document.getElementById("decifrada");
        let quantidadeLetras = string.length

    for (let i=0; i< quantidadeLetras; i++){
        let codigoASC = String.charCodeAt(i)
        let codigoLetra = 90
        let valorMsg3 = ((codigoASC - codigoLetra - quantidade)%26 + codigoLetra);
        resultadoMsg3 = resultadoMsg3.concat(String.fromCharCode(valorMsg3));

    }

    return resultadoMsg3;
    }



















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

export default cipher;

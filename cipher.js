const cipher = {
     encode:
  
      function (numDesloc, msgUsuario) {
        
        let msgCifrada = "";
        let codigoA = 65;
        let codigoZ = 90;
        let codigoa = 97;
        let codigoz = 122;
  
        for (let i = 0; i < msgUsuario.length; i++) {
          let cifrando = msgUsuario[i].charCodeAt();
          if (cifrando >= codigoA && cifrando <= codigoZ) {
            cifrando = ((cifrando - codigoA + numDesloc) % 26) + codigoA
          }
          else if (cifrando >= codigoa && cifrando <= codigoz) {
            cifrando = ((cifrando - codigoa + numDesloc) % 26) + codigoa
          }
        
  
          msgCifrada += String.fromCharCode(cifrando);
        }
        return msgCifrada;
      },
  
    decode:
  
      function (numDesloc, msgUsuario) {
        
        let msgDecifrada = "";
        let codigoA = 65;
        let codigoZ = 90;
        let codigoa = 97;
        let codigoz = 122;
  
        for (let i = 0; i < msgUsuario.length; i++) {
          let decifrando = msgUsuario[i].charCodeAt();
          if (decifrando >= codigoA && decifrando <= codigoZ) {
            decifrando = ((decifrando + codigoA - numDesloc) % 26) + codigoA
          }
  
          else if (decifrando >= codigoa && decifrando <= codigoz) {
            decifrando = codigoz - ((codigoz - decifrando + numDesloc) % 26)
          }
  
          msgDecifrada += String.fromCharCode(decifrando);
        }
        return msgDecifrada;
       
      }
};


  
  
   export default cipher;


"use strict";
const readline = require('readline');
const algorithm  = require('./algorithm');
const encrypt = algorithm.encrypt;
const decrypt = algorithm.decrypt;
const message = algorithm.result;



const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});




rl.question('Inserte la palabra a encriptar: ', (palabra) => {
  rl.question('Inserte el desplazamiento: ', (desplazamiento) => {
    const a = Number(desplazamiento);
    rl.question('1: encriptar, 2: Desencriptar ', (opcion) => {
      const s = Number(opcion);
      if(s===1) message(palabra,a,encrypt) 
      if(s===2) message(palabra,a,decrypt);
       rl.close();
    });
  });
});


  // message("cuaderno",3,encrypt);
  // message("fxdghuqr",3,decrypt);
  // message("Hola",3,encrypt);
  // message("xyz",6,encrypt);
  // message("Krod",3,decrypt);
  // message("abc",4,decrypt);
 






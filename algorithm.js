"use strict";

const separateString =  (string) => string.replace(/\s/g,"").split("");
const toChar = (arr) => String.fromCharCode(arr);
const isLowerCase = text => text === text.toLowerCase(); //verificar si es minuscula


const toAscii = (text,move,option) => {
	const ascii = text.charCodeAt()+move;
	const upper = 'A'.charCodeAt(), lower = 'a'.charCodeAt();
		if (isLowerCase(text)){ 
			if (ascii>(lower+25)||ascii<lower) 
				return ascii+option;
		} else if (ascii>(upper+25) || ascii<upper)
				return ascii+option;
	return ascii;
}
	
const encrypt = (text,move) =>{
  const ArrAscii = separateString(text).map(text => toAscii(text, move,-26));
  return ArrAscii.map(toChar).join("");
}
 
const decrypt = (text,move) =>{
  const ArrAscii = separateString(text).map(text => toAscii(text,-move,26));
  return ArrAscii.map(toChar).join("");
}

const result = (text,move,algorithm) => {
  console.log("----Código de César----");
  console.log("Original: '" + text + "'");
  console.log("Desplazamiento: '" + move + "'");
  console.log("Resultado: '"+algorithm(text,move)+"'")
}          


module.exports = {encrypt, decrypt, result};



"use strict";

const separateString =  (string) => string.replace(/\s/g,"").split("");
const toChar = (arr) => String.fromCharCode(arr);
const isLowerCase = text => text === text.toLowerCase(); //verificar si es minuscula


const toAscii = (text,move) => {
	const ascii = text.charCodeAt()+move;
		if (isLowerCase(text)){
			if (ascii > ('a'.charCodeAt()+25))
				return ascii-26;
		} else if (ascii > ('A'.charCodeAt()+25))
				return ascii-26;
	return ascii;
}
	
const encrypt = (text,move) =>{
  const ArrAscii = separateString(text).map(text => toAscii(text, move));
  return ArrAscii.map(toChar).join("");
}
 //revisar para x y z  se le debe sumar 26
const decrypt = (text,move) =>{
  const ArrAscii = separateString(text).map(text => toAscii(text, move*-1));
  return ArrAscii.map(toChar).join("");
}

const result = (text,move,algorithm) => {
  console.log("----Código de César----");
  console.log("Original: '" + text + "'");
  console.log("Desplazamiento: '" + move + "'");
  console.log("Resultado: '"+algorithm(text,move)+"'")
}          


module.exports = {encrypt, decrypt, result};



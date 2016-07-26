"use strict";

const separateString =  (string) => string.replace(/\s/g,"").split("");
const toChar = (arr) => String.fromCharCode(arr);
const toAscii = (text,move) => text.charCodeAt()+move;

const encrypt = (text,move) =>{
  const ArrAscii = separateString(text).map(text => toAscii(text, move));
  return ArrAscii.map(toChar).join("");
}
   
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



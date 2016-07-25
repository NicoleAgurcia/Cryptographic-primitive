
const SeparateString =  (string) => {
  string= string.replace(/\s/g,"");
  ArrString = string.split("");
  return ArrString;
}

const ConvertToChar = (arr) =>{return ConvertToChar = String.fromCharCode(arr);}

const message = (Text,move) => {
  console.log("----Código de César----");
  console.log("Original: '" + Text + "'");
  console.log("Desplazamiento: '" + move + "'");
}          

const encrypting = (Text,move) =>{
  message(Text,move);
  const ConvertToAscii = (Text) => {return ConvertToAscii = Text.charCodeAt()+move;}
  const ArrAscii = SeparateString(Text).map(ConvertToAscii); 
  const ArrChar = ArrAscii.map(ConvertToChar).join(""); 
  console.log("Resultado: '"+ArrChar+"'");
}
 
   
encrypting ("cuaderno",3);

const desEncrypting = (Text,move) =>{
  message(Text,move);
  const ConvertToAscii = (Text) => {return ConvertToAscii = Text.charCodeAt()-move;}
  const ArrAscii = SeparateString(Text).map(ConvertToAscii); 
  const ArrChar = ArrAscii.map(ConvertToChar).join(""); 
  console.log("Resultado: '"+ArrChar+"'");
}   
desEncrypting ("fxdghuqr",3);






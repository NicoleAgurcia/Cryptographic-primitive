
const SeparateString =  (string) => {
  string= string.replace(/\s/g,"");
  ArrString = string.split("");
  return ArrString;
}


const ConvertToChar = (arr) =>{return ConvertToChar = String.fromCharCode(arr);}
          

const encrypting = (Text,move) =>{
  const ConvertToAscii = (Text) => {return ConvertToAscii = Text.charCodeAt()+move;}
  const ArrAscii = SeparateString(Text).map(ConvertToAscii); 
  const ArrChar = ArrAscii.map(ConvertToChar).join(""); 
  console.log(ArrChar);
}
 
   
encrypting ("hola",2);

 







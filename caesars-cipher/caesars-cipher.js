function rot13(str) {
  var real_str = "";
  for(let i = 0; i < str.length; i++){
    var char_code = str.charCodeAt(i)
    if((char_code >= 65) && (char_code <= 90) ){
      char_code = char_code + 13;
      if(char_code > 90){
        char_code = char_code - 91 + 65;
      }
      real_str += String.fromCharCode(char_code);
    }
    else{
      real_str +=str[i]
    }
  }
  return real_str;
}
function palindrome(str) {
  str = str.replace(/[&\/\\#,+()<>{}$~%.'":*?_-]/g, '').replace(/ /g,"").toLowerCase();
  for(let i = 0; i < Math.round(str.length/2); i++){
    if(str[i] != str[str.length - 1 - i]){
      return false;
    }
  }
  return true;
}

palindrome("eye");
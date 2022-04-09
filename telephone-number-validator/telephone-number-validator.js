function telephoneCheck(str) {
  if(/^(\+\d{1,2}\s?)?1?\-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/.test(str)){
    var isvalid = (str.match(/\(/g) || []).length == (str.match(/\)/g) || []).length;
    return true && isvalid;
  }
  else{
    return false;
  }
}

telephoneCheck("555-555-5555");

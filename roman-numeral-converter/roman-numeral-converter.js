function convertToRoman(num) {
  const convertions = [
    [1000,"M"], [900,"CM"], [500,"D"],
    [400,"CD"], [100,"C"], [90,"XC"],
    [50,"L"], [40,"XL"], [10,"X"],
    [9,"IX"], [5,"V"], [4,"IV"],
    [1,"I"] 
  ];
  let cast_roman = "";
  for (let i = 0; i < convertions.length; i ++){
    while(num >= convertions[i][0]){
      cast_roman = cast_roman.concat(convertions[i][1]);
      num =  num - convertions[i][0];
    }
  }
  return cast_roman;
}
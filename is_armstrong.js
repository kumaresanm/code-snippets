function isAmstrong(num){
   let temp = num;
   let sum = 0;
   let nosDigits = num.toString().length;
   while(temp > 0){
      let reminder = temp % 10;
      sum += reminder ** nosDigits;
      temp = parseInt(temp / 10);
   }
   if(sum === num){
      return "ïs armstrong";
   }
   return "not armstrong";
}

console.log(isAmstrong(1634));
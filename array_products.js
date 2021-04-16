function arrayOfProducts(array) {
    // Write your code here.
      let result = [];
      let valProduct = array.indexOf(0) > -1 ? 0 : product(array);
      for(i = 0; i < array.length; i++){
          result[i] = valProduct === 0 ? 0 : valProduct / array[i];
      }
      return result;
  }
  
  function product(array){
      return array.reduce((product, val) => product * val);
  }
// console.log([5, 1, 4, 2].reduce((product, val) => product * val));
console.log(arrayOfProducts([0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]));
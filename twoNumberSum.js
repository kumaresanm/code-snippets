// Function that takes an array and finds the elements which sum upto to a given target Number.

var array = [3, 5, -4, 8, 11, 1, -1, 6];
var target = 10;
function twoNumberSum(array, targetSum){
    for(var i = 0; i < array.length; i++){
        for(var j = i+1; j < array.length; j++){
            if(array[i]+array[j] === targetSum){
                return [array[i], array[j]];
            }
        }
    }
    return [];
}

console.log(twoNumberSum(array, target));
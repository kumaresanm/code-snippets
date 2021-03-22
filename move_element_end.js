var arr = [2, 1, 2, 2, 2, 3, 4, 2];
var toMove = 2;
function moveElementToEnd(array, toMove) {
    // Write your code here.
    array.sort((a, b) => a - b);
    for(i = 0; i < array.length; i++){
        if(array[i] === toMove){
            let val = array.splice(array.indexOf(toMove), 1)[0];
            array[array.length] = val;
            // array.push(array.splice(array.indexOf(toMove), 1)[0]);
        }
    }
    return array;
}

console.log(moveElementToEnd(arr, toMove));
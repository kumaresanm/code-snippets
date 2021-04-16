function isValidSubsequence(array, sequence) {
    let seqId = 0;
    for(const value of array){
        console.log(value);
        if(seqId === sequence.length){
            break;
        }
        if(sequence[seqId] === value){
            console.log('in');
            seqId++;
        }
    }
    return seqId === sequence.length;
}
var arr = [5, 1, 22, 25, 6, -1, 8, 10];
var seq = [1, 6, -1, 10];
console.log(isValidSubsequence(arr, seq));
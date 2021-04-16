function sumNatural(num){
    if(num == 0){
        return num;
    }
    return num + sumNatural(num -1);
}
console.log(sumNatural(5));
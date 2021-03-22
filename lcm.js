function getLcm(num1, num2){
    let hcf;
    for(i = 1; i <= num1 && i <= num2; i++){
        if(num1 % i === 0 && num2 % i === 0){
            hcf = i;
        }
    }
    return (num1 * num2) / hcf;
}
console.log(getLcm(6,8));
// print all prime numbers till interval
function primeTillInterval(interval){
    if(interval <= 1) return "No prime nor composite";
    for(i = 2; i < interval; i++){
        if(i % 2 !== 0){
            console.log(i);
        }
    }
}
primeTillInterval(10);
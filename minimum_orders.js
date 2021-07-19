function filledOrders(order, k){
    let remWidgets = k;
    let orderCnt = 0;
    for(let i = 0; i < order.length; i++){
        if(order[i] <= remWidgets){
            remWidgets -= order[i];
            orderCnt++;
        }
    }
    return orderCnt;
}

const arr = [5,4,6];
const k = 3;

console.log(filledOrders(arr, k));
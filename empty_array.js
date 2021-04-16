var arrayList = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
arrayList.splice(0, arrayList.length);
console.log(arrayList);

var arrayList1 = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
arrayList1 = [];
console.log(arrayList1);

var arrayList2 = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
arrayList2.length = 0;
console.log(arrayList2);

var arrayList3 = ['a', 'b', 'c', 'd', 'e', 'f']; // Created array
while(arrayList3.length){
    console.log(arrayList3.pop());
}
console.log(arrayList3);
console.log("11110001001000000".split("").length)
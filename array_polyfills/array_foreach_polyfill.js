var arr = [1,2,3,4,5];
arr.forEach(val => console.log(val));

Array.prototype.myForEach = function(callback){
    for(let i =0; i < this.length; i++){
        callback(this[i], i, this);
    }
}

arr.myForEach(val => console.log(val));
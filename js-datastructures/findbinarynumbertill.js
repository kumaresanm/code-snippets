// Generate Binary Numbers from 1 to n

const Queue = require("./queues");

function findBin(n) {
  let myQueue = new Queue();
  let result = [];
  myQueue.enqueue("1");
  for (let i = 0; i < n; i++) {
    result.push(myQueue.dequeue());
    s1 = result[i] + "0";
    s2 = result[i] + "1";
    myQueue.enqueue(s1);
    myQueue.enqueue(s2);
  }
  return result;
}

console.log(findBin(10));

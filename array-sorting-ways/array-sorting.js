// using setTimeout only ascending
let arr = [10, 100, 500, 20, 35];

arr.forEach(item => {
  setTimeout(() => console.log(item), item);
});

// using sort and comparator
let arr1 = [35, 29,100, 40, 10, 60, 9];
let sortArr = arr1.sort(function(a,b){
    return a -b;
});
console.log(sortArr);

// using css
const listEl = document.getElementById("my-list");
const arr2 = [10, 100, 500, 20, 35];

arr2.forEach(n => {
  const itemEl = document.createElement("div");

  itemEl.className = "sorted-list-item";
  itemEl.innerHTML = n;
  itemEl.style.order = n;

  listEl.appendChild(itemEl);
});
// html
{/* <div class="sorted-list" id="my-list"></div> */}
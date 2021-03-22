// Window Sliding Technique

// The technique can be best understood with the window pane in bus,
//  consider a window of length n and the pane which is fixed in it of length k. 
// Consider, initially the pane is at extreme left i.e., at 0 units from the left. 
// Now, co-relate the window with array arr[] of size n and pane with current_sum of size k elements. 
// Now, if we apply force on the window such that it moves a unit distance ahead. The pane will 
// cover next k consecutive elements. 
// Consider an array arr[] = {5, 2, -1, 0, 3} and value of k = 3 and n = 5
// Applying sliding window technique : 

// We compute the sum of first k elements out of n terms using a linear loop and 
// store the sum in variable window_sum.
// Then we will graze linearly over the array till it reaches the end and simultaneously
//  keep track of maximum sum.
// To get the current sum of block of k elements just subtract the first element
//  from the previous block and add the last element of the current block .

// Given an array of integers of size ‘n’.
// Our aim is to calculate the maximum sum of ‘k’ 
// consecutive elements in the array.

arr = [1, 4, 2, 10, 23, 3, 1, 0, 20];
k = 4;

var max_sum = 0;

function getMaxSum(arr, k) {
    for (var i = 0; i < arr.length - k + 1; i++) {
        var curr_sum = 0;
        for (var j = 0; j < k; j++) {
            curr_sum = curr_sum + arr[i+j]
        }
        max_sum = Math.max(curr_sum, max_sum)
    }
    return max_sum;
}

console.log(getMaxSum(arr,k));
function arrayIntersection(arr1,arr2) { 
let arr = [];
 
  for (let index=0; index< arr2.length; index++){
if(arr1.includes(arr2[index])) {
  arr.push(arr2[index])
}
  }
  return arr;
}


module.exports = arrayIntersection;

// 10/09/26, 20:00
// 10/09/26, 20:10


// Analysis Result
// Time complexity: O(n * m), where n = arr1.length and m = arr2.length. For each element of arr2, includes scans arr1 in the worst case.

// Space complexity: O(k), where k is the number of common elements found (at most min(n, m)). The extra space is the output array.

// second solution::::::::::::::::: 
//   let firstArr = new Set(arr1);
//   return [...new Set(arr2.filter(item=> firstArr.has(item)))]

// Analysis Result
// - Time complexity: O(n + m), where n is the length of arr1 and m is the length of arr2. Creating the Set from arr1 is O(n). Filtering arr2 is O(m) with O(1) average lookup in the Set. The final spread into a new Set and array is O(k), where k is the number of common elements (k ≤ min(n, m)); overall still O(n + m).

// - Space complexity: O(n + k), due to storing the elements of arr1 in a Set (size n) and the resulting array of common elements (size k).

// 10/09/26, 20:50
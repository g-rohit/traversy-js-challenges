// sumOfEvenSquares([-1, 0, 1, 2, 3, 4]); // 20 (0^2 + 2^2 + 4^2)
function sumOfEvenSquares(nums) {
  return nums.filter(eachNum => eachNum %2===0)
  .map(eachNum=> eachNum**2)
  .reduce((total, current)=>total+current,0)
}



// let nums = [-1, 0, 1, 2, 3, 4];
// console.log(sumOfEvenSquares(nums))

module.exports = sumOfEvenSquares;


// 21/09/26, 23:05 ---> 21/09/26, 23:17
// Analysis Result
// Time complexity: O(n), where n is the length of the input array. Each pass over the array components (filter, map, and reduce) processes every element a constant number of times.

// Space complexity: O(n) in the worst case due to the intermediate arrays created by filter and map (holding the even numbers and their squares). If the language optimizes or uses lazy evaluation, the practical space could be reduced, but with standard eager evaluation the extra space is proportional to the number of even elements.
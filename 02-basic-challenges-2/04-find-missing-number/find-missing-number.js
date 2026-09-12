function findMissingNumber(givenArray){
  let n = givenArray.length+1;;
  if(givenArray.includes(0)){
    n = givenArray.length;
  }
  let sumOfGivenArray = 0
 for(let index=0; index<=givenArray.length-1;index++)  {
   sumOfGivenArray += givenArray[index]
 }
let sumIfnIsKnown = n *(n+1)/ 2;
  return sumIfnIsKnown-sumOfGivenArray
}



module.exports = findMissingNumber;

// Method 1 --> =========================================================
// 12/09/26, 13:57
// Analysis Result
// Time complexity:
// - Sorting the array: O(n log n)
// - The loop iterates up to lastNumber (which is at most n if the array contains roughly 1..n-1, but could be larger if numbers skip): in worst case up to O(n). Inside the loop, includes(index) is O(n) in the worst case because givenArray is unsorted, so total inside loop cost is O(n) per iteration, yielding O(n^2) overall in the worst scenario.
// - Overall worst-case time complexity: O(n^2).

// Space complexity:
// - Sorting creates a new array in the sorted operation in many JS engines (depending on in-place sort). The code stores sortedArray and a few extra variables. In typical in-place sort, auxiliary space is O(1); otherwise O(n) for the sorted copy. The extra structures missingNumbers and others are O(k) where k is the number of missing numbers (at most n). Overall auxiliary space is O(n) in the worst case.

// Notes:
// - A more efficient approach would use a linear scan with a hash set or a mathematical sum formula to achieve O(n) time and O(n) space, or O(1) extra space with careful arithmetic if constraints permit.

// -------------------------------------------------------- //
// This problem can be solved by 4 methods:
// 1.Mathematics(sum of n natural number)
// 2.Sorting
// 3.HashSet
// 4.Bit Manipulation

// 1.Mathematics (Sum Formula):
// misNum = n(n+1)/2 - sumofELements(nums)
// Time Complexity: O(n)
// Space Complexity: O(1)
// Calculates the missing number using the sum formula of the first n natural numbers.

// 2.Sorting:
// Time Complexity: O(nlogn) (due to sorting) + O(n) (iterating through the array)
// Space Complexity: O(1)
// Sorts the array and then iterates through it to find the missing number.

// 3.HashSet:
// Time Complexity: O(n)
// Space Complexity: O(n)
// Uses a HashSet to store the array elements and then iterates through the array to find the missing number.

// 4.XOR (Bit Manipulation):
// Time Complexity: O(n)
// Space Complexity: O(1)
// Utilizes XOR operation to find the missing number without requiring extra space.

// All approaches provide different trade-offs in terms of time complexity, space complexity, and implementation simplicity.

// Method 2: ============================================================================
// function findMissingNumber(givenArray){
//   // sort the given array: 
//   let sortedArray = givenArray.sort((a,b)=>(a-b));
//   // console.log(sortedArray)
//   let lastNumber = sortedArray[sortedArray.length-1]
//   let isMissingCount = 0;
//   let missingNumbers = [];
//   // run loop on sorted array till the last number and generate all numbers( into new arr)
//   // while generating a new number check if the new generated number is missing from the given array or not
  
//   for(let index=1; index <= lastNumber; index++) {
//     // console.log(index, givenArray.includes(index))  
     
//     if(!givenArray.includes(index)) {
//      isMissingCount ++;
//     missingNumbers.push(index)
//       // return index
//     }
         
//     // console.log(isMissingCount, missingNumbers)
//   }
//     if(isMissingCount === 0){
//          // console.log('missingNumbers', missingNumbers)
//         return lastNumber+1;
//       }

//       if(isMissingCount >= 1){
//         // console.log('missingNumbers', missingNumbers)
//         return missingNumbers[0];
//       }
// }
// using gauss formula - We first calculate the sum of the numbers from 1 to n (inclusive) using the formula `n * (n + 1) / 2`.
// Time complexity: O(n)
// - The function iterates once over the input array to sum its elements, which is linear in the array size n.

// Space complexity: O(1)
// - It uses a constant number of additional variables, regardless of input size. No extra data structures are allocated.
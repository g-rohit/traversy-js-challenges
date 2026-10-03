//03/10/26, 20:33 
function validAnagrams(word1,word2) {
   
  if (word1.length != word2.length){
    return false;
  }
return word1.toLowerCase().split('').sort().join('')===word2.toLowerCase().split('').sort().join('');
}

// 03/10/26, 20:45

module.exports = validAnagrams;


// // Analysis Result
// Time complexity:
// - Let n be the length of the input words (both have same length after the initial check).
// - Converting to lowercase, splitting into chars, sorting both strings, and joining back each take O(n log n) time due to sorting.
// - The comparisons are O(n) but dominated by sorting, so overall O(n log n).

// Space complexity:
// - We create temporary arrays/strings for both word1 and word2 during the operations (lowercased, split, sort, join).
// - Each side uses O(n) space, and there are a constant number of such copies, so O(n) extra space overall.


// O(1)
// Constant

// Array access, hash lookup

// O(log n)
// Logarithmic

// Binary search

// O(n)
// Linear

// Single loop, linear search

// O(n log n)
// Linearithmic

// Merge sort, quick sort

// O(n²)
// Quadratic

// Nested loops, bubble sort

// O(2ⁿ)
// Exponential

// Recursive Fibonacci


// Method 2 - 03/10/26, 20:50
// function validAnagrams(word1,word2) {
//      if (word1.length != word2.length){
//     return false;
//   }
  
//   // split, reduce the sum of all characters and check the same other 
//     return word1
//     .split('')
//     .map(eachLetter=>eachLetter.charCodeAt(0))
//     .reduce((total,count) => total+count, 0) ===     word2
//     .split('')
//     .map(eachLetter=>eachLetter.charCodeAt(0))
//     .reduce((total,count) => total+count, 0)
  
// }

// 03/10/26, 21:15

// Analysis Result
// Time complexity:
// - The function first compares lengths in O(1).
// - It then processes word1: split into an array (O(n)), map over n characters to get char codes (O(n)), and reduce to sum (O(n)).
// - It processes word2 similarly (O(n)).
// - Overall time complexity is O(n), where n is the length of the words (assuming both are equal length).

// Space complexity:
// - Splitting each word creates an array of characters for each word (O(n) space) plus the intermediate arrays from map (still O(n)) and the reduce uses O(1) extra space.
// - Since the two passes are sequential, the peak extra space is O(n) for one word's array plus the temporary arrays, so overall O(n) auxiliary space.

// I learnt my second method is not correct coz it may fail for ad, bc type of combo.

// The correct optimised method is: 

// function validAnagrams(word1,word2) {
//      if (word1.length != word2.length){
//     return false;
//   }

//   let freq = {}
  
//   for (let char of word1.toLowerCase()) {
//     freq[char] = (freq[char] || 0 )+1;
//   }
  
//   // console.log(freq)
  
//   for (let char of word2.toLowerCase()) {
//     if(!freq[char]) {
//       // console.log('2nd word', char, freq[char])
//       return false
//     }
//       freq[char]--
//   }

//   return true
  
// }

//What you just implemented is usually called the Frequency Counter Pattern (or Frequency Map / Hash Map pattern).
// 04/10/26, 00:36
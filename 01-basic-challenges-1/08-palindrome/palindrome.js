  function isPalindrome(str){
  // using two pointers:
  
  // to lowercase and clean 
  str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
  console.log(str);
  
  // start from both ends
  let left = 0;
  let right = str.length -1;

  // console.log(left, right);
  
// compare characters from both sides
  while (left < right){
    if(str[left] !== str[right]){
      return false;
    }
    left++
    right--
  }
  return true;
}


module.exports = isPalindrome;


// str = str.toLowerCase().replace(/[^a-z0-9]/g, '') // to clear up spaces and update original string into a single word
  // return str.split('').reverse().join('') === str ;


// 23/08/26, 21:20
// Analysis Result:
// Time complexity:
// - The toLowerCase and replace operations both scan the input string once, O(n).
// - Splitting into an array, reversing, and joining also each traverse the string once, O(n).
// - Overall time complexity is O(n), where n is the length of the input string.

// Space complexity:
// - The replace step creates a new string of at most length n.
// - split turns the string into an array of characters, which uses O(n) space.
// - reverse and join also use additional temporary storage but still overall O(n) extra space.
// - Therefore, total auxiliary space is O(n).

// optimal solution would include two pointers where TC: o(n) and SC: 0(1)

//  using two pointers: 
// function isPalindrome(str) {
//     let left = 0
//     let right = str.length - 1;

//     console.log(left)
//     console.log(right)

//     while (left < right) {
//         while (left < right && !/[a-z0-9]/i.test(str[left])) left++
//         while (left < right && !/[a-z0-9]/i.test(str[right])) right--

//         if (str[left].toLowerCase() !== str[right].toLowerCase()) {
//             return false
//         };
//         left++
//         right--

//     }
//     return true
// }

// 08/09/26, 00:40

// function isPalindrome(str){
//   // using two pointers:
  
//   // to lowercase and clean 
//   str = str.toLowerCase().replace(/[^a-z0-9]/g, '');
  
//   console.log(str);
  
//   // start from both ends
//   let left = 0;
//   let right = str.length -1;

//   // console.log(left, right);
  
// // compare characters from both sides
//   while (left < right){
//     if(str[left] !== str[right]){
//       return false;
//     }
//     left++
//     right--
//   }
//   return true;
// }

// isPalindrome('racecar')
// isPalindrome('civ*&!ic')
// isPalindrome('afternoon')
// isPalindrome('race car')
// isPalindrome('rohit')
// isPalindrome('A man, a plan, a canal, Panama')

// https://www.bigocalc.com/
// Analysis Result
// Time complexity: O(n), where n is the length of the input string. This accounts for the initial pass to normalize the string (lowercase and remove non-alphanumeric) and the subsequent two-pointer scan, each touching every character at most once.

// Space complexity: O(n) in the worst case due to creating the cleaned string after replacement, which can be as long as the original input. The two-pointer variables use O(1) extra space aside from the output string. I
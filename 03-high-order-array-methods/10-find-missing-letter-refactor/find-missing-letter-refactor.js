function findMissingLetter(givenArr) {

    let start = givenArr[0].charCodeAt(0);
    console.log(start)

    const missingLetter =
        givenArr
            .slice(1)
            .map(eachChar => eachChar.charCodeAt(0))
            .find((current) => {
                // console.log(current-start)
                if (current - start > 1) {
                    return true
                }
                start = current
                return false
            })

    return missingLetter ? String.fromCharCode(missingLetter - 1) : ''

}

findMissingLetter(['a', 'b', 'c', 'e'])

module.exports = findMissingLetter;


// My first solution: 
// 10/10/26, 19:33
// function findMissingLetter(givenArr) {
//     let startIndex = givenArr[0].charCodeAt(0);
//     givenArr.forEach((eachLetter, index) => (eachLetter.charCodeAt(0) === startIndex + index)
//         ?
//         ''
//         :
//         console.log(String.fromCharCode(eachLetter.charCodeAt(0) - 1))
//     )

// }

// 12/10/26, 21:28 - based on above, but using find()

// function findMissingLetter(givenArr) {
//   let startIndex = givenArr[0].charCodeAt(0); 
//   let missing = 
//       givenArr
//     .find((eachLetter, index) => {
//       return (eachLetter.charCodeAt(0) !== startIndex+index) 
//     })
//   return missing ? String.fromCharCode(missing.charCodeAt(0)-1) : 'No letter is missing'
//   }
// 
// Analysis Result
// Time complexity: O(n), where n is the length of givenArr. The .find iterates through the array once until it finds a mismatch; in the worst case (no missing letter) it checks all elements. Each check uses constant-time operations.

// Space complexity: O(1), aside from the input array, since only a constant amount of extra variables (startIndex, missing) are stored. No additional data structures are allocated that grow with input size.


// 14/10/26, 06:35
// using filter

// function findMissingLetter(givenArr) {
// const missingChar = givenArr.filter((eachLetter, index)=> {
  
//   if(index=== 0){
//     return false
//   }
  
//   const prevCharCode = givenArr[index-1].charCodeAt(0);
//   const currentCharCode = eachLetter.charCodeAt(0);
  
// return currentCharCode-prevCharCode > 1
  
// })[0]

// return String.fromCharCode(missingChar.charCodeAt(0)-1);
//   }

// 14/10/26, 06:48
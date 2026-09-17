function findMissingLetter(givenArray) {
    let convertedArray = [];
    givenArray.forEach(eachLetter => convertedArray.push(eachLetter.charCodeAt(0)))
    for (let index = 0; index < convertedArray.length-1; index++) {
        if (convertedArray[index + 1] - convertedArray[index] > 1) {
            return String.fromCharCode(convertedArray[index] + 1)
        }
    }
}

module.exports = findMissingLetter;


// first trial, brute force:
// function findMissingLetter(givenArray) {
//     let convertedArray = [];
//     // console.log(givenArray);

//     // compare first and second number, diff should be only 1, else the sequence is broken and report the index number
//     // convert each letter to number
//     givenArray.forEach(eachLetter => convertedArray.push(eachLetter.charCodeAt(0)))
//     // console.log(convertedArray);
//     for (let index = 0; index < convertedArray.length; index++) {
//         // console.log(convertedArray[index + 1], convertedArray[index]);

//         // console.log(convertedArray[index+1] - convertedArray[index])

//         if (convertedArray[index + 1] - convertedArray[index] > 1) {
//             //   console.log('Missing number is:', convertedArray[index]+1, 'and Missing letter is:', String.fromCharCode(convertedArray[index]+1))
//             return String.fromCharCode(convertedArray[index] + 1)
//         }
//     }

// }
// Analysis Result
// Time complexity:
// - Let n be the length of givenArray. The code builds convertedArray in O(n) time.
// - The subsequent loop iterates n times, with O(1) work per iteration.
// - Overall time complexity is O(n).

// Space complexity:
// - convertedArray stores n numeric codes, plus the original givenArray (not created anew). The extra space beyond the input is O(n) for convertedArray. Total auxiliary space is O(n).


// Medhod 2 : without using extra empty array: 
// function findMissingLetter(givenArray){
// for(let index=0; index< givenArray.length -1; index++){
//   if(givenArray[index+1].charCodeAt(0) - givenArray[index].charCodeAt(0) > 1) {
//     return String.fromCharCode(givenArray[index].charCodeAt(0)+1)
//   }
// }
  
// }
// let givenArray =  ['a', 'b', 'c', 'e']    // missing d
// Time complexity: O(n), where n is the length of givenArray. The loop iterates once through the array (up to n-2 checks in the worst case).

// Space complexity: O(1), since only a few constant extra variables are used regardless of input size.
// 16/09/26, 19:38

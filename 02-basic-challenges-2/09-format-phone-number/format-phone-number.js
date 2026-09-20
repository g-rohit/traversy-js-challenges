function formatPhoneNumber(givenNumber) {
    // expected output: (123) 456-7890
    // ignore invalid numbers

    if (givenNumber.length === 10 && givenNumber.every(item=> Number.isInteger(item) && item >=0 && item<= 9)) {
        let formattedNumber = givenNumber;
        formattedNumber.splice(0, 0, '(');
        formattedNumber.splice(4, 0, ') ');
        formattedNumber.splice(8, 0, '-');

        return formattedNumber.join('');

    }
    return ('invalid input')
}

// const testNumbers = [
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 0],       // valid 10-digit number
//     [5, 5, 5, 1, 2, 3, 4, 5, 6, 7],       // another valid number
//     [1, 2, 3],                             // too short
//     [1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1],    // too long
//     ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"], // digits as strings
//     [1, 2, 3, "z", 5, 6, 7, 8, 9, 0],     // contains invalid character
//     [],                                    // empty array
// ];


// testNumbers.forEach((givenNumber) => {
//     console.log(formatPhoneNumber(givenNumber));
// });


module.exports = formatPhoneNumber;


// 18/09/26, 00:04
// Analysis Result
// The function formatPhoneNumber checks the input and, if valid, formats it by mutating the array and joining it into a string.

// Time complexity:
// - The validation step checks givenNumber.length (O(1)) and then uses givenNumber.every to inspect all 10 elements (O(n) with n = 10, but effectively constant).
// - If valid, it performs a fixed number of splice operations on a 10-element array (each splice is O(n) but n is small). Overall, the time is O(n) in the number of digits, but with a constant upper bound since n <= 10 in valid cases.
// - In practice, time is constant for typical inputs, with a small constant factor due to the array operations.

// Space complexity:
// - The function uses a new array created from givenNumber by mutating in place, plus a few extra characters for the formatted string.
// - Overall auxiliary space is O(n) for the resulting string and the mutated array, but since the input is 10 elements, it’s effectively constant space. If considering generalization to n digits, it would be O(n).


// Method 2: 
// using slice method, 
// slice method takes params like slice(start index, stop index+1) --> if we want to grab first 3 chars we will say slice(0,3), 
// let formattedNumber = `(${givenNumber.slice(0,3).join('')}) ${givenNumber.slice(3,6).join('')}-${givenNumber.slice(6).join('')}`
// return formattedNumber;


// 18/09/26, 00:55
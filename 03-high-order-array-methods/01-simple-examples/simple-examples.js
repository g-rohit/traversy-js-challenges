const numbers = [1, 2, 3, 4, 5];

/**
 * map: Transforms array elements with a provided function, creating a new array.
 */

// Question:
// Create a new array where every number is multiplied by 2.
// Expected result: [2, 4, 6, 8, 10]

console.log('map:')
console.log(numbers.map(eachNum=>eachNum*2))

/**
 * filter: Creates a new array with elements that satisfy a specified condition.
 */

// Question:
// Create a new array containing only the numbers greater than 2.
// Expected result: [3, 4, 5]
console.log('filter:')
console.log(numbers.filter(eachNum => eachNum>2))


/**
 * reduce: Accumulates array elements into a single value using a provided function.
 */

// Question:
// Calculate the sum of all numbers in the array.
// Expected result: 15
console.log('reduce:')
console.log(numbers.reduce((total, current)=> total+current, 0))

/**
 * forEach: Iterates through array elements and applies a function without creating a new array.
 */

// Question:
// Print each number to the console, one number at a time.
// Expected output:
// 1
// 2
// 3
// 4
// 5
console.log('forEach:')
numbers.forEach(eachNumber => console.log(eachNumber))


/**
 * find: Returns the first array element that satisfies a specified condition.
 */

// Question:
// Find the first number that is greater than 3.
// Expected result: 4

console.log('find:')
console.log(numbers.find(num=> num>3))

/**
 * some: Checks if at least one array element satisfies a condition.
 */

// Question:
// Check whether the array contains at least one number greater than 4.
// Expected result: true
console.log('some:')
console.log(numbers.some(num=> num>4))


/**
 * every: Checks if all array elements satisfy a condition.
 */

// Question:
// Check whether every number in the array is greater than 0.
// Expected result: true

console.log('every:')
console.log(numbers.every(num=> num>0))


// 21/09/26, 22:37 --> 21/09/26, 23:03

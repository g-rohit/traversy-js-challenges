function fizzBuzzArray(givenNumber) {
    let array = [];
    for (index = 1; index <= givenNumber; index++) {

        if (index % 5 === 0 && index % 3 == 0) {
            array.push('FizzBuzz')
        } else if (index % 3 === 0) {
            array.push('Fizz')
        } else
        if (index % 5 === 0) {
            array.push('Buzz')
        } else {
            array.push(index)
        }

    }
    return array;
}


module.exports = fizzBuzzArray;

// alternative solution: 
// function fizzBuzzArray(givenNumber) {
// let array = []
//   for(index=1; index<=givenNumber; index++){
//     array.push( index%15 === 0 ? "FizzBuzz": index%5===0 ? "Buzz": index%3 ===0 ? "Fizz": index);
//   }
//   return array
// }

// Analysis Result
// 10/09/26, 00:11
// Time complexity: O(n), where n is givenNumber. The loop runs from 1 to n, performing a constant amount of work for each iteration (modulo operations and pushes), so total time grows linearly with n.

// Space complexity: O(n), due to storing n elements in the resulting array. In the worst case, the array holds one entry per number from 1 to n. The extra space beyond the output is O(1).


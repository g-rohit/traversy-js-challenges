function removeDuplicates(givenArray) {
    // return Object.values([...new Set(givenArray)])
  return Array.from(new Set(givenArray))
}

module.exports = removeDuplicates;

// Analysis Result
// 08/09/26, 23:50
// Time complexity: O(n) on average, where n is the length of givenArray. Creating the Set and iterating once over the array both take linear time. In the worst case with hash collisions or set operations, it remains amortized O(n).

// Space complexity: O(n) in the worst case, since the Set may store all distinct elements from the input array, requiring additional space proportional to the number of unique elements.
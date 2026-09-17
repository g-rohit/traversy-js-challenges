function findFirstNonRepeatingCharacter(givenString) {
    let charCount = {}
    // Count each character
    for (let eachChar of givenString) {
        charCount[eachChar] = (charCount[eachChar] || 0) + 1
    }
    // Find the first character with a count of 1
    for (let eachChar of givenString) {
        if (charCount[eachChar] === 1) {
            return eachChar
        }
    }
    return null; // when there are no repeating characters
}
module.exports = findFirstNonRepeatingCharacter;


// 17/09/26, 11:09

// Analysis Result
// Time complexity: O(n), where n is the length of givenString. We traverse the string twice (once to count characters, once to find the first non-repeating), but each pass is linear in n.

// Space complexity: O(k), where k is the number of distinct characters in the string (the size of the charCount map). In the worst case, k is O(n).

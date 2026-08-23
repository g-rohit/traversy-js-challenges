function titleCase(str) {
    // Method 1
    //     let final = []
    //   str.split(" ").forEach((word)=> (word == '') ? '' : final.push(word[0].toUpperCase() + word.slice(1).toLowerCase()))
    //   return final.join(" ");

    //   Method 2:
    return str
        .split(" ")
        .filter(Boolean)
        .map(word => word[0].toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");

}

module.exports = titleCase;


// 23/08/26, 19:34
// https://www.bigocalc.com/
// ### Analysis Result, almost same for both methods
// The function splits the input string by spaces, then uppercases the first letter of each word and concatenates the rest, finally joining back with spaces.

// Time complexity:
// - Splitting the string into words takes O(n) time, where n is the length of the input string.
// - For each word, it computes word[0].toUpperCase() and word.slice(1), both proportional to word length. Across all words, this sums to O(n).
// - Joining the words back into a single string is also O(n).
// Overall time complexity: O(n).

// Space complexity:
// - It creates an array of words from the split, which uses O(n) space in total for the words and the final result, plus the final string. The final array and the final string together use O(n) additional space.
// Overall space complexity: O(n).
function reverseString(givenString) {
    // Method 1: without using any inbuilt methods: 
    let reversed = '';
    for (let index = givenString.length - 1; index > -1; index--) {
        reversed += givenString[index];
    }
    return reversed;

    // Method 2
    // return givenString.split('').reverse().join('');
}
module.exports = reverseString;



// 23/08/26, 20:36
// ### Analysis Result:Method 1
// Time complexity: O(n), where n is the length of givenString. The loop traverses each character exactly once.
// Space complexity: O(n), due to constructing the reversed string by concatenating characters, which in the worst case stores n characters.
// ### Analysis Result:Method 2
// - Time complexity: O(n), where n is the length of givenString. Splitting, reversing, and joining each process touches every character once.
// - Space complexity: O(n), due to creating a character array of length n and the resulting reversed string, both of which use additional space proportional to n.
function countOccurrences(givenString, givenCharacter) {
    let count = 0;
    // ======= method 1 ======= 
    // givenString.split('').forEach((letter) => {
    //     if (letter === givenCharacter) {
    //         count++
    //     }
    // });
    // ======= method 2 ======= 
    // for (let i = 0; i < givenString.length; i++) {
    //     if (givenString[i] === givenCharacter) {
    //         count++
    //     }
    // }
    // ======= method 3 ======= 
    count = givenString.split(givenCharacter).length - 1;

    return count

}

module.exports = countOccurrences;


// * Method 1: Time: O(n), Space: O(n) — split('') creates an array of all characters.
// * Method 2: Time: O(n), Space: O(1) — Iterates through the string directly without extra storage. <--- BEST
// * Method 3: Time: O(n), Space: O(n) — split() creates an array of substrings.
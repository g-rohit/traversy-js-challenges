function findMaxNumber(givenArray) {
    //   return givenArray.sort( (a,b) => b-a )[0]  // --- Method 1
    // return Math.max(...givenArray) // --- Method 2
    
    // Method 3
    let max = givenArray[0]
    for (let i = 1; i < givenArray.length; i++) {
        if (givenArray[i] >= max) {
            max = givenArray[i];
        }
    }
    return max;
}

module.exports = findMaxNumber;


// * Method 1: TC O(n log n), SC O(n) — sort() sorts the entire array.
// * Method 2: TC O(n), SC O(n) — spread creates arguments/elements for Math.max().
// * Method 3: TC O(n), SC O(1) — scans the array once while storing only max.
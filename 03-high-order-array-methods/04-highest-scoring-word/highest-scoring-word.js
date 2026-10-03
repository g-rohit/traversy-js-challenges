function highestScoringWord(givenLine) {
    // split the given sentence into words using space
    let words = givenLine.split(' ');
    let numbers = [];
     
    // console.log(words);

    words.forEach((eachWord) =>
        numbers.push(
            eachWord
                .split('')
                .map(eachLetter => eachLetter.charCodeAt(0) - 96)
                .reduce((total, current) => (total + current), 0))
    )

    // console.log('numbers: ', numbers);
    return words[numbers.indexOf(Math.max(...numbers))];
}



// console.log('aaxi'.charCodeAt(0)-96)
// highestScoringWord('man i need a taxi up to ubud');  // taxi

module.exports = highestScoringWord;


// 03/10/26, 18:53
// Analysis Result
// Time complexity: O(n * k), where n is the number of words in the input line and k is the average word length. For each word, it splits into characters (O(k)) and reduces over its characters (O(k)). The final max and index lookup are O(n). Overall, O(sum of word lengths) which is O(nk).

// Space complexity: O(n + m), where n is the number of words and m is the total number of characters across all words (since it stores the words array and the computed scores array). In practice, this is proportional to the input size: O(total characters).
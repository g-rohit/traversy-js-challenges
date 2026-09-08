function countVowels(str) {
    let givenStr = str.toLowerCase()

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    let count = 0;

    for (let index = 0; index < givenStr.length; index++) {
        // console.log(str[index])    
        if (vowels.includes(givenStr[index])) {
            console.log(givenStr[index])
            count++;
        }

    }
    return count;
}
module.exports = countVowels;

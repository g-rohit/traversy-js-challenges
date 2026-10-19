function reverseString(givenString) {

    if(givenString === ''){
        return ''
    }

    return reverseString(givenString.substring(1)) + givenString.charAt(0);
}

module.exports = reverseString;


// 19/10/26, 10:12

// const reverseString = givenString => givenString==='' ? '' : reverseString(givenString.substring(1)) + givenString.charAt(0);;

// reverseString('rohit') // tihor
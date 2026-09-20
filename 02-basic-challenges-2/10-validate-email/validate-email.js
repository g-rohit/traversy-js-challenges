function validateEmail(givenEmail) {

    // console.log(givenEmail.split('@'));
    
    if (givenEmail.split('@').length !== 2) {
        return false;   
    }


    const [local, domain] = givenEmail.split('@');
    // console.log('local:', local, 'domain: ', domain);
    
    if (local?.length === 0 || domain?.length <3) {

        return false;
    }

    
    console.log(domain.split('.'));
    const [emailProvider, topLevelDomainExtension ] = domain.split('.');
    console.log(emailProvider, topLevelDomainExtension);
    if (!topLevelDomainExtension || topLevelDomainExtension?.length <2) {
        return false
    }

    return true
}

module.exports = validateEmail;

 




// Analysis Result
// Time complexity:
// - The function splits the input string multiple times using the @ and . characters. Each split traverses the string once, so overall time is O(n), where n is the length of givenEmail.

// Space complexity:
// - The function creates a few substrings and arrays from the splits, plus a couple of constant-size variables. The extra space is O(n) in the worst case due to the substrings, but typically it is proportional to the size of the input. Overall, space complexity is O(n).

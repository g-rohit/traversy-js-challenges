function generateHashtag(input) {
    let cleanedInput = input.trim();
  
   if (cleanedInput === '') {
        return false;
    }
let hashTag =  `#${cleanedInput.split(/\s+/).map(eachWord=> `${eachWord[0].toUpperCase()}${eachWord.slice(1)}`).join('')}`
  // console.log(cleanedInput)
    if(hashTag.length > 140){
    return false
  }

return hashTag
}

module.exports = generateHashtag;

function areAllCharactersUnique(givenString) {
  let sortedArr = givenString.split('').sort();
console.log(givenString.split('').sort())
  let firstChar = sortedArr[0];
  for(let index=0; index<sortedArr.length -1; index++){
    if((sortedArr[index+1].charCodeAt() - sortedArr[index].charCodeAt()) === 0){
      console.log('NOT unique')
      return false
    } 
  }
  console.log('unique')
  return true
}


let givenString = 'abcdeajjAbBaz'
areAllCharactersUnique(givenString)

module.exports = areAllCharactersUnique;

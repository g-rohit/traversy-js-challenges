function validatePassword(givenInput){  
  if (givenInput.length < 8) { return false };
                          
  function checkUpperCaseOrNot(givenInput){
return Array.from(givenInput).some((eachLetter) => eachLetter.charCodeAt(0) >= 65 && eachLetter.charCodeAt(0) <= 90)}
  
  function checkLowerCaseOrNot(givenInput){
return Array.from(givenInput).some((eachLetter) => eachLetter.charCodeAt(0) >= 97 && eachLetter.charCodeAt(0) <= 122)}
  
  function checkNumberOrNot(givenInput){
    let numberReg = /[0-9]/;
 return numberReg.test(givenInput)
  
  }
  

  return checkUpperCaseOrNot(givenInput) && checkNumberOrNot(givenInput) && checkLowerCaseOrNot(givenInput)
  
}

module.exports = validatePassword;


// 10/10/26, 15:23 ---> // 10/10/26, 17:07
// Analysis Result
// Time complexity:
// - The function may scan the input string multiple times: once to check length, then up to three separate passes (uppercase, lowercase, and numeric checks). In the worst case, each pass traverses the entire string of length n.
// - Total time complexity: O(n), since the constant number of passes yields linear time in the input length.

// Space complexity:
// - The function uses a constant number of extra variables and helper functions. The Array.from(givenInput) calls inside each check create temporary arrays of length n, but they are scoped to each function call and freed afterwards. The peak additional space is O(n) due to those temporary arrays, but if you consider typical streaming checks without materializing arrays, it would be O(1). In this implementation, it is O(n) due to the temporary arrays created during the checks.
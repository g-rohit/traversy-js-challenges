function arraySum(givenArr){
  
  if(givenArr.length === 0){
    return 0
  }
  // return givenArr[0] + arraySum(givenArr.slice(1))
  // return givenArr.pop() + arraySum(givenArr);
  return givenArr.shift() + arraySum(givenArr);
}


// 26/10/26, 23:52

module.exports = arraySum;

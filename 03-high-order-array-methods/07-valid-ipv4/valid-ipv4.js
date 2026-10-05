function isValidIPv4(input) {
  const inputLen = input.split('.').length;

  const ipWithinRange = (eachNumber) => {
    return (
      Number(eachNumber) <= 255 &&
      eachNumber.length >= 0 &&
      eachNumber.length <= 3 &&
      !(eachNumber.length > 1 && Number(eachNumber[0]) === 0)
    );
  };

  if (inputLen !== 4) {
    return false;
  }

  return input.split('.').every(ipWithinRange);
}

// 04/10/26, 16:00



module.exports = isValidIPv4;


// 04/10/26, 09:27
// 04/10/26, 09:59

// isValidIPv4('0.0.0.0'); // true
// isValidIPv4('1.2.3.4'); // true
// isValidIPv4('123.45.67.89'); // true
// isValidIPv4('1.2.3'); // false
// isValidIPv4('1.2.3.4.5'); // false
// isValidIPv4('123.456.78.90'); // false
// isValidIPv4('123.045.207.089'); // false


// function isValidIPv4(input) {
//   // console.log(('1.2.3').split('.').length) 
//   let inputLen = input.split('.').length;
//    // console.log('-------------')
//   // console.log(input, inputLen) 
// // to check if a given number if without range of 0-255
//   let ipWithinRange = (eachNumber) => {
//     // console.log('eachNumber:', eachNumber);   
//     return (
//     Number(eachNumber) <=255 
//       && eachNumber.length >= 0
//       && eachNumber.length <= 3
//       && !(eachNumber.length > 1 && Number(eachNumber[0])===0) 
//     )
//   }  
  
//   if(inputLen !== 4 ) {
//     // console.log(input,inputLen, 'isValidIPv4 :', false)
//     return false
//   } else {
//     // console.log(input,inputLen, 'isValidIPv4 :', input.split('.').every(ipWithinRange))
//   return input.split('.').every(ipWithinRange)
//   }
//     // console.log('-------------')
 
// }


// 04/10/26, 16:00


// Analysis Result
// Time complexity:
// - Let n be the number of dot-separated segments in the input. The function splits the string into an array of length n and then checks each segment once. Therefore, time complexity is O(n), which in this case is O(4) constant, but conceptually linear in the number of segments.

// Space complexity:
// - The function creates an array from input.split('.'), plus a few extra variables. This uses O(n) auxiliary space, i.e., O(n) where n is the number of segments (up to 4 for a valid IPv4, but in general proportional to the number of segments).

// 05/10/26, 20:37
// Learned that the original solution by brad used ParseIn and converted to string to check the converted number and the given string, that till sort the logic for leading zeros for which i spent some time to write new logics --
// parseInt(octet).toString()
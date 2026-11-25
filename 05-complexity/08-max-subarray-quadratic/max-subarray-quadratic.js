// 25/11/26, 20:46

function maxSubarraySum(array, k){
  
  let maxSum = -Infinity;
  
  for(let i=0; i <= array.length -k; i++){
    let currentSum=0;
    
    for(let j = i; j < i+k; j++) {
      currentSum += array[j]
   // console.log(currentSum, array[j]);
    }
  maxSum = Math.max(maxSum, currentSum);
  }
  return maxSum;
}

module.exports = maxSubarraySum;

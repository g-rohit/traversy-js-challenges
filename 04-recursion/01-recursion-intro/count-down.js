// 14/10/26, 22:17

function countDown(num) {
  // base case
  if (num <= 0) {
    console.log('All done!');
    return
  }

  // recursive
  console.log(num);
  num--;
  countDown(num);
}


countDown(10)

module.exports = countDown;

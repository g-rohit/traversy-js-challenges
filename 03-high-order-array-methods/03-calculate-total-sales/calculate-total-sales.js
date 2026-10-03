function calculateTotalSalesWithTax(products, taxRate){
  let sum = 0
products.forEach(eachProduct=> sum += eachProduct.price*eachProduct.quantity )
  return (sum + sum*(taxRate/100));
}



module.exports = calculateTotalSalesWithTax;

// 23/09/26, 22:19
// Time complexity: O(n), where n is the number of products. The function loops through each product once to accumulate the total price times quantity.

// Space complexity: O(1) extra space. It uses a few scalar variables (sum) in addition to the input array, no additional data structures whose size scales with n.

// with reduce: 
// function calculateTotalSalesWithTax(products, taxRate){
// const totalSales=  products.reduce((sum, eachProduct)=> sum+ (eachProduct.price*eachProduct.quantity) , 0)

// return (totalSales + totalSales*(taxRate/100));
// }

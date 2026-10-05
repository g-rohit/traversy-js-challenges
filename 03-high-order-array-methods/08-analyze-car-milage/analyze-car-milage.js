function analyzeCarMileage(cars){
  
  let result = {};
  let allCarMileage = cars.map(eachCar=> eachCar.mileage);
  
    function getTotalMileage(){
  // get totalCarMilage 
  result.totalMileage= Number((allCarMileage.reduce((total,count) => total+count, 0).toFixed(2))); 
  }
  
  function getAverageMileage(){
    // total mil / total cars
    result.averageMileage =  Number((result.totalMileage/cars.length).toFixed(2)); 
  }
  
  function getHighestMileageCar(){
    // console.log('highest:', 
    result.highestMileageCar = cars[allCarMileage.indexOf(Math.max(...allCarMileage))]
  }
  
    function getLowestMileageCar(){
    result.lowestMileageCar = cars[allCarMileage.indexOf(Math.min(...allCarMileage))]
  }
  

  
  getTotalMileage()
  getLowestMileageCar()
  getHighestMileageCar()
  getAverageMileage()
  return result
}

// 05/10/26, 20:37 --> 06/10/26, 00:42

module.exports = analyzeCarMileage;

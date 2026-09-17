function diceGameSimulation(number) {
    let finalResult = []
    function runDiceGame() {
        let dice1 = dice();
        let dice2 = dice();
        let sum = dice1 + dice2;
        // get random number between 1 and 6, inclusive both
        function dice() {
            let min = 1;
            let max = 6
            return Math.floor(Math.random() * (max - min + 1)) + min
        }
        // show the outcome based on both dice sum
        function rollResult(sum) {
            switch (sum) {
                case 7:
                case 11:
                    return 'win'
                    break;
                case 2:
                case 3:
                case 12:
                    return 'lose'
                    break;
                default:
                    return 'roll again'
                    break;
            }
        }
        // finally return the result
        // console.log('dice1:', dice1, 'dice2:', dice2, 'sum: ', sum, 'result: ', rollResult(sum)) // this should be inside a function, and loop the number of times
        return {
            'dice1': dice1,
            'dice2': dice2,
            'sum': sum,
            'result': rollResult(sum)
        }
    }
    // we get input from user and build 
    for (let index = 0; index < number; index++) {
        finalResult.push(runDiceGame())
    }
    return finalResult;
};
// let number = 3;
// console.log(diceGameSimulation(number));

module.exports = diceGameSimulation;


// 17/09/26, 14:39
// Analysis Result
// Time complexity:
// - runDiceGame performs a constant amount of work: two random dice draws, a sum, a switch to compute the result, and a small object construction. All are O(1).
// - The outer loop runs number times, calling runDiceGame each time.
// - Overall time complexity is O(number).

// Space complexity:
// - Each invocation of runDiceGame creates a small fixed-size object with a few primitive fields. The finalResult array holds number such objects.
// - Excluding the output storage, auxiliary space is O(1). Including the returned array, the space complexity is O(number).
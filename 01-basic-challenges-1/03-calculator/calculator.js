function calculator(firstNumber,secondNumber, operator) {

    switch (operator) {
        case '+':
            return firstNumber + secondNumber
            break;
        case '-':
return firstNumber - secondNumber
            break;
        case '*':
            return firstNumber * secondNumber
            break;
        case '/':
            return firstNumber / secondNumber
            break;
  
        default:
            throw new Error('Invalid operator, please enter a valid operator like: +, -, * or /');
            break;
    }
}



module.exports = calculator;

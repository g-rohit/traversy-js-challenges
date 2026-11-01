function numberRange(firstNum, lastNum) {
    if (firstNum === lastNum) {
        return [firstNum];
    }

    const numbers = numberRange(firstNum, lastNum - 1);
    numbers.push(lastNum);

    return numbers;
}

module.exports = numberRange;

// 27/10/26, 09:28
// 01/11/26, 15:49
function power(base, exponent) {
    if(exponent === 0) {
        return 1
    }
exponent--;
    return base * power(base, exponent)
}

module.exports = power;

// 26/10/26, 09:47

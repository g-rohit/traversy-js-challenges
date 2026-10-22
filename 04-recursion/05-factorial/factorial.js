function factorial(num) {

    if(num <2){
        return 1
    }

    return num * factorial(num-1) 
}

module.exports = factorial;


// 22/10/26, 09:34
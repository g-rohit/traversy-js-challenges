function flattenArray(givenArray) {

    let result = [];

    // loop to check if given array has any more arrays inside it
    for (const eachArray of givenArray) {
        if (Array.isArray(eachArray)) {
            result = result.concat(flattenArray(eachArray))
        } else {
            result.push(eachArray);
        }

    }
    return result;

}

module.exports = flattenArray;

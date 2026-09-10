function displayLikes(names) {
    switch (names.length) {
      case 0: 
        return `no one likes this`  
          break;
      case 1:
          return `${names[0]} likes this`
            break;
        case 2:
            return `${names[0]} and ${names[1]} like this`
            break;
        case 3:
            return `${names[0]}, ${names[1]} and ${names[2]} like this`
            break;
        default: return `${names[0]}, ${names[1]} and ${names.length-2} others like this`
        
    }

}

module.exports = displayLikes;

// 10/09/26, 23:06
// Analysis Result
// Time complexity: O(n) in the worst case, where n is the number of names. The default case accesses names.length and references up to two elements (names[0], names[1]), but determining the correct string for large n requires only constant-time operations. However building the string in the default case uses names.length to compute n-2, which is constant time; overall the dominant factor is the constant-time switch decision, so effectively O(1) time per call. If you consider the cost of concatenating the string, it depends on the length of the resulting string, which is proportional to the number of characters output, i.e., O(n) characters for large n.

// Space complexity: O(1) additional space, not counting the output string, since the function only uses a fixed number of local variables and returns a string built from a few array elements and a constant amount of metadata. The output string itself is proportional to the length of the input data in the worst case, so internal auxiliary space remains constant.
function fibonacci(num) {

    if (num <2) {
        return num
    }

    return fibonacci(num-1)+fibonacci(num-2)

}

module.exports = fibonacci;


// Analysis Result
// Time complexity: Exponential, specifically O(2^n) in the worst case, since the naive recursion tree doubles at each level and many subproblems are recomputed.

// Space complexity: O(n) due to the maximum recursion depth, which is n. The call stack grows linearly with n.
// 22/10/26, 09:25
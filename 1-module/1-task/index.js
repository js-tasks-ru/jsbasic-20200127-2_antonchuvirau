/**
 * Factorial
 * @param {number} n
 * @returns {number}
 */
function factorial(n) {
    if (n === 0 || n === 1){
        return 1;
    }
    else{
        let factorialResult = n;
        while (n !== 1){
            factorialResult = factorialResult*(n-1);
            n--;
        }
        return factorialResult;
    }
}

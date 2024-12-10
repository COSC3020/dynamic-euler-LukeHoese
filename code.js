/*
function factorial(n, fac) {
    return n * fac;
}
*/

function e(n) {
    let result = 1.0;
    let fac = 1;

    // implement dynamic programming here. Instead of calculating factorial from scratch at every iteration, we will pass previous factorial as an argument to our factorial function so we do not repeat calculations.
    // previous factorial already calculated as (n-1)! * n, so we save work by passing our already calculated (n-1)! and our next n to the factorial function.
    for (let i = 1; i <= n; i++) {
        // fac = factorial(i, fac)
        fac *= i;
        result += 1 / fac;
    }

    return result;
}

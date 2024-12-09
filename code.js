function factorial(n, fac) {
    console.log(n*fac);
    return n * fac;
}

function e(n) {
    let result = 1.0;
    let fac = 1;

    // implement dynamic programming here. Instead of calculating factorial from scratch at every iteration, we will pass previous factorial as an argument so we do not repeat calculations.
    for (let i = 1; i <= n; i++) {
        fac = factorial(i, fac);
        result += 1 / fac;
    }

    return result;
}
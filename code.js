function factorial(n, fac) {
    return n * fac;
}

function e(n) {
    let result = 1.0;
    let fac = 1;

    for (let i = 1; i <= n; i++) {
        fac = factorial(i, fac);
        result += 1 / fac;
    }

    return result;
}
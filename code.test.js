const fs = require('fs');
const assert = require('assert');
eval(fs.readFileSync('code.js')+'');

assert(e(10) === 2.7182818011463845);
assert(factorial(10) === 3628800);

assert(e(5) >= 2.716 - .1 && e(5) <= 2.716 + .1);
assert(e(100) >= 2.6881 - .1 && e(100) <= 2.6881 + .1);

assert(e(10000) > 2.7182818284 - 0.00001 && e(10000) < 2.7182818284 + 0.00001);
assert(e(0) === 1);
assert(e(1) === 2);
assert(e(-1) === 1);

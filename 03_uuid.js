const { v1, v4, parse, stringify, validate, version } = require('uuid');

console.log(v1()); // 7d7746c0-2fbf-11eb-84d3-15e7bc8ea854

console.log(v4()); // bd817fd1-ea2b-4a6e-8982-d4a1976d1735

const uuidBytes = [
    0x6e,
    0xc0,
    0xbd,
    0x7f,
    0x11,
    0xc0,
    0x43,
    0xda,
    0x97,
    0x5e,
    0x2a,
    0x8a,
    0xd9,
    0xeb,
    0xae,
    0x0b,
];

console.log(stringify(uuidBytes)); // 6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b

const bytes = parse('6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b');

console.log([...bytes].map(v => v.toString(16).padStart(2, '0')));
/**
 * [
     '6e', 'c0', 'bd', '7f',
     '11', 'c0', '43', 'da',
     '97', '5e', '2a', '8a',
     'd9', 'eb', 'ae', '0b'
   ]
 */

console.log(validate('6ec0bd7f-11c0-43da-975e-2a8ad9ebae0b')); // true

console.log(validate('not uuid string')); // false

console.log(version('7d7746c0-2fbf-11eb-84d3-15e7bc8ea854')); // => 1

console.log(version('bd817fd1-ea2b-4a6e-8982-d4a1976d1735')); // => 4

const argv = require('minimist')(process.argv.slice(2));

console.log(argv);

// -x 3 -y 4 -n5 -abc --beep=boop foo bar baz

/*
    {
      _: [ 'foo', 'bar', 'baz' ],
      x: 3,
      y: 4,
      n: 5,
      a: true,
      b: true,
      c: true,
      beep: 'boop'
    }

 */
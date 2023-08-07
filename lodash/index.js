const _ = require('lodash');

console.log(_.random(0, 20));

const greet = _.once(() => {
    console.log('Haiii')
});

greet();

// The second greet will not called
greet();
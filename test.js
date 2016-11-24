'use strict';

let Marlist = require('./src/ll');

let list = new Marlist();
console.log('New empty list...');
console.log(list);
console.log(' ');
console.log(' ');

for (let n = 0; n <= 3; n++) {
    let data = { foobar: n, time: new Date().getDate() }
    list.add(data);
    console.log('------------ adding one more---------------');
    console.log(JSON.stringify(list));
    console.log(' ');
}

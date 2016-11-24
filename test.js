'use strict';

let Marlist = require('./src/ll');

const ITERS = 10;

let list = new Marlist();
console.log('New empty list...');
console.log(list);
console.log(' ');
console.log(' ');

for (let n = 0; n <= ITERS; n++) {
    let data = { foobar: n, also: n*10 }
    list.add(data);
    console.log('------------ adding one more---------------');
    console.log(JSON.stringify(list));
    console.log(' ');
}

console.log('------------ searching at position 2---------------');
console.log(JSON.stringify(list.search(2)));

console.log('------------ full list ---------------');
console.log(JSON.stringify(list));
console.log(' ');

console.log('------------ deleting at position 2---------------');
console.log(JSON.stringify(list.delete(2)));

console.log('------------ full list ---------------');
console.log(JSON.stringify(list));
console.log(' ');


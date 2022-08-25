'use strict';

// сравнение преобразует null в число 0, поэтому:
console.log( null > 0 );  // false
console.log( null >= 0 ); // true
// нестрогое равенство не преобразует null в число, при этом он равен только undefined
console.log( null == 0 ); // false

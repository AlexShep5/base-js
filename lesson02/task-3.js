'use strict';
const a = -15;
const b = 10;
let result;     // можно не делать - дело вкуса )

if (a >= 0 && b >= 0) {
    result = a - b;
}
else if (a < 0 && b < 0) {
    result = a * b;
}
else {
    result = a + b;
}
alert(result);

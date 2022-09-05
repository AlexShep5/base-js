'use strict';
let number = parseInt(prompt('Введите число от 0 до 999'));

function digitsObj (num) {
    if (isNaN(num) || num < 0 || num > 999) {
        console.log(`Значение параметра num ${num} не является числом в диапазоне 0..999`);
        return null;
    }

    const obj = {
        ones: Math.floor(num % 10),
        tens: Math.floor(num % 100 / 10),
        hundreds: Math.floor(num / 100)
    };

    return obj;
}

console.log(digitsObj(number));

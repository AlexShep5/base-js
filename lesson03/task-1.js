'use strict';

// массив для простых чисел
let easyNumbers = [2];
// результат
let result = '2';
// простое ли число
let isEasy;
// счетчики циклов
let i = 3
let j;

// проходим от 3 до 100
while (i <= 100) {
    isEasy = true;
    // проходим по всем уже найденым простым числам
    j = 0;
    while (j < easyNumbers.length) {
        if (!(i % easyNumbers[j])) {
            isEasy = false;
        }
        j++;
    }
    // если очередное число простое, то добавляем в массив и меняем результат
    if (isEasy) {
        easyNumbers.push(i);
        result += ' ' + i;
    }
    i++;
}
console.log(result);



// /*
//     Вариант только для чисел до 120:
// */

// // результат
// let result = '2 3 5 7';
// // счетчик цикла
// let i = 8;

// // проходим от 8 до 100
// while (i <= 100) {
//     // если число простое
//     if (i % 2 && i % 3 && i % 5 && i % 7) {
//         result += ' ' + i;
//     }
//     i++;
// }
// console.log(result);

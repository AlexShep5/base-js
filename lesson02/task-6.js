'use strict';
/**
 * Сложение двух чисел
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
 function add (a, b) {
    return a + b;
}

/**
 * Вычитание двух чисел
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function sub (a, b) {
    return a - b;
}

/**
 * Умножение двух чисел
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function mult (a, b) {
    return a * b;
}

/**
 * Деление двух чисел
 * @param {number} a
 * @param {number} b
 * @returns {number}
 */
function div (a, b) {
    return a / b;
}

/**
 * Выполнение мат. операции с двумя числами
 * @param {number} arg1
 * @param {number} arg2
 * @param {string} operation '+', '-', '/', '*'
 * @returns {string}
 */
function mathOperation (arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return add(arg1, arg2);
        case '-':
            return sub(arg1, arg2);
        case '*':
            return mult(arg1, arg2);
        case '/':
            return div(arg1, arg2);
        default:
            return null;
    }
}

console.log(mathOperation(10, 5, '+'));
console.log(mathOperation(10, 5, '-'));
console.log(mathOperation(10, 5, '*'));
console.log(mathOperation(10, 5, '/'));
console.log(mathOperation(10, 5, 'aaa'));

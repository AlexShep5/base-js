'use strict';
const goods = [
    ['book-1', 25, 550],
    ['book-2', 15, 800],
    ['book-3', 10, 1000]
];

function countBasketPrice (goods) {
    let result = 0;
    for (let i = 0; i < goods.length; i++) {
        result += goods[i][1] * goods[i][2];
    }
    return result;
}

console.log(countBasketPrice (goods));
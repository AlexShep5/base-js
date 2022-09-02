'use strict';

const basket = {
    goods: [
        {
            name: 'book-1',
            amount: 3,
            price: 300
        },
        {
            name: 'book-2',
            amount: 2,
            price: 450
        },
        {
            name: 'book-3',
            amount: 2,
            price: 500
        }
    ],
    getTotalPrice() {
        let result = 0;
        for (const product of this.goods) {
            result += product.amount * product.price;
        }
        return result;
    }
};

console.log(basket.getTotalPrice());

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
        return this.goods.reduce((result, item) => result + item.price * item.amount, 0);
    },

    getTotalCount() {
        return this.goods.reduce((result, item) => result + item.amount, 0);
    },

    getBacketInfo() {
        const container = document.querySelector('.basket');
        container.innerHTML = '';
        const totalPrice = this.getTotalPrice();
        const totalCount = this.getTotalCount();

        if (totalCount > 0) {
            container.innerText = `В корзине ${totalCount} товаров на сумму ${totalPrice} рублей`;
        } else {
            container.innerText = 'Корзина пуста';
        }
    }
};

basket.getBacketInfo();

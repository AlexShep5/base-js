'use strict';

const catalog = {
    goods: [],
    container: document.querySelector('.catalog'),
    cart: null,

    init (cart) {
        this.cart = cart;
        this.renderCatalog();
        this.container.addEventListener('click', (e) => {

            this.productClickHandler(e);
        });
    },

    renderCatalog() {
        this.container.innerHTML = '<div class="catalogTitle"><h3>Каталог</h3></div>';

        for (const item of this.goods) {
            const insertStr = `<div class='prodCard'>
                <div>Наименование: ${item.name}</div>
                <div>Цена: ${item.price} руб</div>
                <button class="prodBtn" data-name="${item.name}">В корзину</button>
                </div>`;

            this.container.insertAdjacentHTML(`beforeend`, insertStr);
        }
    },

    productClickHandler(e) {
        if (!e.target.classList.contains('prodBtn')) {
            return;
        }

        this.addToCart(e);
    },

    addToCart(e) {
        this.cart.addProduct(this.getProduct(e));
    },

    getProduct(e) {
        return this.goods.find(item => item.name == e.target.dataset.name);
    },

    addProduct (product) {
        const existProd = this.goods.find(item => item.name == product.name);

        if (!existProd) {
            this.goods.push(product);
        }

        this.renderCatalog();
    }
}

const cart = {
    goods: [],
    container: document.querySelector('.cart'),

    init() {
        this.renderCart();
        this.container.addEventListener('click', (e) => {

            this.clearClickHandler(e);
        });

    },

    renderCart() {
        this.container.innerHTML = '<div class="cartTitle"><h3>Корзина</h3></div>';

        for (const item of this.goods) {
            const insertStr = `<div class='cartItem'>
                <div>Наименование: ${item.name}</div>
                <div>Цена за ед.: ${item.price} руб</div>
                <div>Кол-во: ${item.amount}</div>
                </div>`;

            this.container.insertAdjacentHTML(`beforeend`, insertStr);
        }
        const totalCount = this.getTotalCount();
        const totalPrice = this.getTotalPrice();
        this.container.insertAdjacentHTML(`beforeend`, `<div class="cartTotal">В корзине ${totalCount} товаров на сумму ${totalPrice} рублей</div>`);
        this.container.insertAdjacentHTML(`beforeend`, '<button class="cartBtn">Очистить</button>');
    },

    clearClickHandler(e) {
        if (!e.target.classList.contains('cartBtn')) {
            return;
        }

        this.goods.length = 0;
        this.renderCart();
    },

    addProduct (product) {
        const existProd = this.goods.find(item => item.id == product.id);

        if (existProd) {
            existProd.amount += 1;
        } else {
            this.goods.push({...product, amount: 1});
        }

        this.renderCart();
    },

    getTotalPrice() {
        return this.goods.reduce((result, item) => result + item.price * item.amount, 0);
    },

    getTotalCount() {
        return this.goods.reduce((result, item) => result + item.amount, 0);
    }
}

catalog.init(cart);
catalog.addProduct({id: 145, name: 'Ручка', price: 80});
catalog.addProduct({id: 1478, name: 'Карандаш', price: 50});
catalog.addProduct({id: 18, name: 'Линейка', price: 30});
cart.init();

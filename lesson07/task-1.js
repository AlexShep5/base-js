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
                <button class="prodBtn" data-id="${item.id}">В корзину</button>
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
        return this.goods.find(item => item.id == e.target.dataset.id);
    },

    addProduct (product) {
        const existProd = this.goods.find(item => item.id == product.id);

        if (!existProd) {
            this.goods.push(product);
        }

        this.renderCatalog();
    }
}

const cart = {
    goods: [],
    container: document.querySelector('.cart'),
    visibleContent: null,
    navPrevBtn: null,
    navNextBtn: null,

    init() {
        this.renderCart();

        this.container.addEventListener('click', (e) => {

            this.clearClickHandler(e);
            this.delClickHandler(e);
            this.navPrevClickHandler(e);
            this.navNextClickHandler(e);
        });
    },

    getProduct(e) {
        return this.goods.find(item => item.id == e.target.dataset.id);
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

    delProduct (product) {
        const existProd = this.goods.find(item => item.id == product.id);

        if (!existProd) {
            return;

        } else if (existProd.amount > 1) {
            existProd.amount--;
        } else {
            const indexProd = this.goods.indexOf(existProd);
            this.goods.splice(indexProd, 1);
        }

        this.renderCart();
    },

    getTotalPrice() {
        return this.goods.reduce((result, item) => result + item.price * item.amount, 0);
    },

    getTotalCount() {
        return this.goods.reduce((result, item) => result + item.amount, 0);
    },

    renderCart() {
        this.container.innerHTML = '';

        this.renderTitle();

        const contentWrap = document.createElement('div');
        contentWrap.classList.add('contentWrap');
        this.container.appendChild(contentWrap);

        this.visibleContent = this.renderGoods(contentWrap);
        this.renderAddress(contentWrap);
        this.renderComment(contentWrap);
        this.container.insertAdjacentHTML(`beforeend`, `</div>`);

        this.renderNav();
    },

    renderTitle() {
        this.container.innerHTML = '<div class="cartTitle"><h3>Корзина</h3></div>';
    },

    renderGoods(contentWrap) {
        const goodsWrap = document.createElement('div');
        goodsWrap.classList.add('goodsWrap');
        contentWrap.appendChild(goodsWrap);

        for (const item of this.goods) {
            const insertStr = `<div class='cartItem'>
                <div>Наименование: ${item.name}</div>
                <div>Цена за ед.: ${item.price} руб</div>
                <div>Кол-во: ${item.amount}</div>
                <button class="delBtn" data-id="${item.id}">Удалить</button>
                </div>`;

                goodsWrap.insertAdjacentHTML(`beforeend`, insertStr);
        }

        const totalCount = this.getTotalCount();
        const totalPrice = this.getTotalPrice();
        goodsWrap.insertAdjacentHTML(`beforeend`, `<div class="cartTotal"><div>В корзине ${totalCount}      товаров  на сумму ${totalPrice} рублей</div><button class="clearGoodsBtn">Очистить</button></div>`);

        return goodsWrap;
    },

    renderAddress(contentWrap) {
        const addressWrap = document.createElement('div');
        addressWrap.classList.add('addressWrap');
        addressWrap.classList.add('hidden');
        contentWrap.appendChild(addressWrap);

        const insertStr = `<div class="adressItem">Страна/Регион <input class="addressInput type="text" name="Country"></div>
            <div class="adressItem">Город <input class="addressInput" type="text" name="city"></div>
            <div class="adressItem">Улица, дом, квартира <input class="addressInput type="text" name="address"></div>`;

        addressWrap.insertAdjacentHTML('beforeend', insertStr);
    },

    renderComment(contentWrap) {
        const commentWrap = document.createElement('div');
        commentWrap.classList.add('commentWrap');
        commentWrap.classList.add('hidden');
        contentWrap.appendChild(commentWrap);

        const insertStr = `<div class="commentItem">Комментарий</div>
            <div class="commentItem">
            <textarea class="addressInput" name="comment"></textarea></div>`;

        commentWrap.insertAdjacentHTML('beforeend', insertStr);
    },

    renderNav() {
        const navBar = document.createElement('div');
        navBar.classList.add('navBar');
        this.container.appendChild(navBar);

        const insertStr = `<div class="navBar">
            <button class="navPrevBtn">Назад</button>
            <button class="navNextBtn">Далее</button>
            </div>`;

        navBar.insertAdjacentHTML('beforeend', insertStr);

        this.navPrevBtn = navBar.querySelector('.navPrevBtn');
        this.navNextBtn = navBar.querySelector('.navNextBtn');

        this.checkNavBtn();
    },

    checkNavBtn() {
        if (this.visibleContent.classList.contains('goodsWrap')) {
            this.navPrevBtn.classList.add('hidden');
        } else if (this.visibleContent.classList.contains('commentWrap')) {
            this.navNextBtn.classList.add('hidden');
        } else {
            this.navPrevBtn.classList.remove('hidden');
            this.navNextBtn.classList.remove('hidden');
        }
    },

    clearClickHandler(e) {
        if (!e.target.classList.contains('clearGoodsBtn')) {
            return;
        }

        this.goods.length = 0;
        this.renderCart();
    },

    delClickHandler(e) {
        if (!e.target.classList.contains('delBtn')) {
            return;
        }

        this.delProduct(this.getProduct(e));

        this.renderCart();
    },

    navPrevClickHandler(e) {
        if (!e.target.classList.contains('navPrevBtn')) {
            return;
        }

        const newContent = this.visibleContent.previousElementSibling;
        if (newContent) {
            this.visibleContent.classList.toggle('hidden');
            newContent.classList.toggle('hidden');
            this.visibleContent = newContent;
        }

        this.checkNavBtn();

    },

    navNextClickHandler(e) {
        if (!e.target.classList.contains('navNextBtn')) {
            return;
        }
        console.log(this.visibleContent);

        const newContent = this.visibleContent.nextElementSibling;
        if (newContent) {
            this.visibleContent.classList.toggle('hidden');
            newContent.classList.toggle('hidden');
            this.visibleContent = newContent;
        }

        this.checkNavBtn();
    },
}

catalog.init(cart);
catalog.addProduct({id: 145, name: 'Ручка', price: 80});
catalog.addProduct({id: 1478, name: 'Карандаш', price: 50});
catalog.addProduct({id: 18, name: 'Линейка', price: 30});
cart.init();

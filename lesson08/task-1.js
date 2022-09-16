'use strict';

if (!("a" in window)) {
    var a = 1;
    }
alert(a);

/*
    Переменная a обявлена через var, поэтому она хостится наверх и становится свойством window.
    Инверсия в if дает false и присваивания не происходит.
    alert выведет undefined
*/

var b = function a(x) {
    x && a(--x);
    };
alert(a);

/*
    Браузер выдаст ошибку, т.к. имя функции a можно использовать, только внутри нее самой.
*/

function a(x) {
    return x * 2;
    }
var a;
alert(a);

/*
    var a встпывет наверх, создаст совойство window a, function declaration переопределит свойство а
    и alert выведет текст функиии, т.к. вызова нет
*/

function b(x, y, a) {
    arguments[2] = 10;
    alert(a);
    }
b(1, 2, 3);
/*
    alert выведет переменную a равную 3, т.к. изменение arguments[] не влияет на локальные переменные
 */

function a() {
    alert(this);
    }
a.call(null);

/*
    alert выведет null, как контекст вызова функции, так как null передается при вызове первым аргументом метода call
*/

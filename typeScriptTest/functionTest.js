var z = 100;
function addZ(x, y) {
    return x + y + z;
}
var res = addZ(10, 20);
console.log("三个值的和：" + res); //130
/**完整的函数类型 */
var myAdd = function (x, y) { return z + x + y; };
var myAdd2 = function (x, y) { };
//默认参数，必选参数，可选参数
//使用默认值
function moren(x, y) {
    if (x === void 0) { x = 5; }
    return x;
}
;
console.log("默认参数测试：" + moren(undefined, 4));
// function bmyAdd3(x: number, y?: number) { };
// function bmyAdd4(x?: number, y: number) { };//报错
//剩余参数
function buildName(firstName) {
    var restOfName = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        restOfName[_i - 1] = arguments[_i];
    }
    return firstName + " " + restOfName.join(" ");
}
var employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");
var buildNameFun = buildName;
/**this */
console.log("----------------");
console.log("this的使用");
var deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function () {
        var _this = this;
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return function () {
            var pickedCard = Math.floor(Math.random() * 52);
            var pickedSuit = Math.floor(pickedCard / 13);
            return { suit: _this.suits[pickedSuit], card: pickedCard % 13 };
        };
    }
};
var cardPicker = deck.createCardPicker();
var pickedCard = cardPicker();
console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
// interface Card {
//     suit: string;
//     card: number;
// }
// interface Deck {
//     suits: string[];
//     cards: number[];
//     createCardPicker(this: Deck): () => Card;
// }
// let deck: Deck = {
//     suits: ["hearts", "spades", "clubs", "diamonds"],
//     cards: Array(52),
//     // NOTE: The function now explicitly specifies that its callee must be of type Deck
//     createCardPicker: function(this: Deck) {
//         return () => {
//             let pickedCard = Math.floor(Math.random() * 52);
//             let pickedSuit = Math.floor(pickedCard / 13);
//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};
//         }
//     }
// }
// let cardPicker = deck.createCardPicker();
// let pickedCard = cardPicker();
// console.log("card: " + pickedCard.card + " of " + pickedCard.suit);
/**this 在回调函数内的使用 */
console.log("this 在回调函数内的使用");
// class Handler {
//     info: string;
//     onClickBad(this: Handler, e: Event) {
//         // oops, used this here. using this callback would crash at runtime
//         this.info = e.message;
//     };
// }
// let h = new Handler();
// uiElement.addClickListener(h.onClickBad); // error!
//如果方法是lambda表达式定义的,那么其中的this关键字总是指向类实例
var Foo = /** @class */ (function () {
    function Foo() {
        var _this = this;
        this.name = "z";
        this.x = {
            name: "x",
            sayHello: function () {
                var y = {
                    name: "y",
                    sayHello: function () {
                        console.log("hello,I'm " + _this.name);
                    }
                };
                y.sayHello();
            }
        };
    }
    Foo.prototype.sayHello = function () {
        this.x.sayHello();
    };
    return Foo;
}());
var foo = new Foo();
foo.sayHello(); //z
var t = {
    name: "t",
    x: foo.x
};
foo.sayHello.bind(t)(); //z
Foo.prototype.sayHello.bind(t)(); //z
//   class A {
//     public count: number = 0;
//     public hander(): number {
//         this.count += 1;
//         return this.count;
//     }
// }
var A = /** @class */ (function () {
    //在构造函数中重写方法
    function A() {
        var _this = this;
        this.count = 0;
        this.handler = function () {
            _this.count++;
            return _this.count;
        };
    }
    return A;
}());
var Test = /** @class */ (function () {
    function Test() {
        this.count = 100;
    }
    return Test;
}());
var Program = /** @class */ (function () {
    function Program() {
    }
    Program.Main = function () {
        var t = new Test();
        var a = new A();
        t.h = a.handler;
        t.count = t.h();
        console.log("count is :" + t.count);
        // output
        // count is :101
    };
    return Program;
}());
Program.Main(); // 为了跟C#一致 ， 提供的静态入口
/**重载 */
console.log("----------------");
console.log("重载");
// let suits = ["hearts", "spades", "clubs", "diamonds"];
// function pickCard(x): any {
//     // Check to see if we're working with an object/array
//     // if so, they gave us the deck and we'll pick the card
//     if (typeof x == "object") {
//         let pickedCard = Math.floor(Math.random() * x.length);
//         return pickedCard;
//     }
//     // Otherwise just let them pick the card
//     else if (typeof x == "number") {
//         let pickedSuit = Math.floor(x / 13);
//         return { suit: suits[pickedSuit], card: x % 13 };
//     }
// }
// let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
// let pickedCard1 = myDeck[pickCard(myDeck)];
// console.log("card: " + pickedCard1.card + " of " + pickedCard1.suit);
// let pickedCard2 = pickCard(15);
// console.log("card: " + pickedCard2.card + " of " + pickedCard2.suit);
var suits = ["hearts", "spades", "clubs", "diamonds"];
// function pickCard(x: {suit: string; card: number; }[]): number;
// function pickCard(x: number): {suit: string; card: number; };
function pickCard(x) {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        var pickedCard_1 = Math.floor(Math.random() * x.length);
        return pickedCard_1;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        var pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}
var myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
var pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
var pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
console.log("1111111111111");

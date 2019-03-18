let z =100;

function addZ(x,y){
    return x+y+z;
}
let res = addZ(10,20);
console.log("三个值的和："+res);//130

/**完整的函数类型 */
let myAdd: (x:number, y:number)=>number =
    function(x: number, y: number): number { return z+x+y; };

let myAdd2: (x:number, y:number)=>void =
    function(x: number, y: number) {  };

//默认参数，必选参数，可选参数
//使用默认值
function moren (x = 5, y: number) { return x };
console.log("默认参数测试："+moren(undefined,4));


// function bmyAdd3(x: number, y?: number) { };
// function bmyAdd4(x?: number, y: number) { };//报错
//剩余参数
function buildName(firstName: string, ...restOfName: string[]) {
    return firstName + " " + restOfName.join(" ");
  }
  
  let employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");

  let buildNameFun: (fname: string, ...rest: string[]) => string = buildName;


/**this */
console.log("----------------");
console.log("this的使用");

let deck = {
    suits: ["hearts", "spades", "clubs", "diamonds"],
    cards: Array(52),
    createCardPicker: function() {
        // NOTE: the line below is now an arrow function, allowing us to capture 'this' right here
        return () => {
            let pickedCard = Math.floor(Math.random() * 52);
            let pickedSuit = Math.floor(pickedCard / 13);

            return {suit: this.suits[pickedSuit], card: pickedCard % 13};
        }
    }
}

let cardPicker = deck.createCardPicker();
let pickedCard = cardPicker();

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

interface UIElement {
    addClickListener(onclick: (this: void, e: Event) => void): void;
}

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
class Foo {
    name = "z";
    x = {
      name: "x",
      sayHello: () => {
        let y = {
          name: "y",
          sayHello: () => {
            console.log("hello,I'm " + this.name);
          }
        }
        y.sayHello();
      }
    };


    sayHello(){
      this.x.sayHello();
    }

  }

  let  foo=new Foo();
  foo.sayHello();//z
  var t={
     name:"t",
     x:foo.x
  }
  foo.sayHello.bind(t)();//z
  Foo.prototype.sayHello.bind(t)();//z



//   class A {
//     public count: number = 0;
//     public hander(): number {
//         this.count += 1;
//         return this.count;
//     }
// }

class A {
    public count: number = 0;
    //在构造函数中重写方法
    constructor(){
        this.handler = ()=>{
            this.count++;
            return this.count;
        }
    }   
    public  handler:()=>number;
}


class Test {
    public count: number = 100;
    public h: () => number;
}

class Program {

    static Main(): void {
        let t = new Test();
        let a = new A();
        t.h = a.handler;
        t.count = t.h();
        console.log(`count is :${t.count}`);
        // output
        // count is :101
    }
}

Program.Main();// 为了跟C#一致 ， 提供的静态入口

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

let suits = ["hearts", "spades", "clubs", "diamonds"];

// function pickCard(x: {suit: string; card: number; }[]): number;
// function pickCard(x: number): {suit: string; card: number; };
function pickCard(x): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
        let pickedCard = Math.floor(Math.random() * x.length);
        return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
        let pickedSuit = Math.floor(x / 13);
        return { suit: suits[pickedSuit], card: x % 13 };
    }
}

let myDeck = [{ suit: "diamonds", card: 2 }, { suit: "spades", card: 10 }, { suit: "hearts", card: 4 }];
let pickedCard1 = myDeck[pickCard(myDeck)];
alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);

let pickedCard2 = pickCard(15);
alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);
console.log("1111111111111");



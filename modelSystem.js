//第一种暴露方式测试
//引入了当前目录下的 modelSystem2.js 文件（./ 为当前目录，node.js 默认后缀为 js）
var modelSystem2 = require('./modelSystem2');//加载时，会把被被调用的函数从头到尾执行一遍
// hello.world1();//报错，因为，world1并没有对外暴露
modelSystem2.world2();//正确
// // hello.world3();///报错，因为，world3并没有对外暴露
modelSystem2.world4();//正确

console.log("暴露的变量："+modelSystem2.value1);
console.log("-------------------------------");

/*****第二种暴露方式的测试******/
var modelSystem3 = require('./modelSystem3');//加载时，会把被被调用的函数从头到尾执行一遍
/***暴露变量测试：***/
//一个文件就只有一个module.exports变量，这个变量可以是函数，对象实例，整数。。。
// console.log("暴露一个变量："+modelSystem3);


/***暴露函数测试：***/
// var system3 = new modelSystem3();


//如果modelSystem3文件对外暴露的是对象实力，而非对象，那么上面的实例化语句要去掉！！
modelSystem3.setName("lala");
modelSystem3.sayHello();
console.log("名字:"+modelSystem3.age);
// system3.setName("lala");
// system3.sayHello();
// console.log("module.exports暴露变量:"+system3.value);
// /********多个module.exports = world6测试，无法并存***** */
// // system3.setAge("12");
// // system3.printAge();
// /********module对象的属性***** */
// //Node内部提供一个Module构建函数。所有模块都是Module的实例。每个模块内部，都有一个module对象，代表当前模块。它有以下属性。
// console.log("module.id:"+module.id);
// console.log("module.filename:"+module.filename);
// console.log("module.loaded:"+module.loaded);
// console.log("module.parent :"+module.parent );//返回一个对象，表示调用该模块的模块。
// console.log("module.children  :"+module.children  );//返回一个数组，表示该模块要用到的其他模块。
// console.log("module.exports :"+module.exports );
// 平台信息
console.log("平台信息："+process.platform);

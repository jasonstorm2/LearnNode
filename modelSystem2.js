function world1(){
    console.log("world");
}
console.log("hello...");
//暴露方法
exports.world2 = function(){
    console.log("world2");
}

function world3(){
    console.log("world3");
}
//暴露多个方法
exports.world4 = function(){
    console.log("world4");
}
//暴露变量
exports.value1 = 10;


/**********与exports暴露模块无法兼容********** */

//对象构造器
// function world5() { 
//     var name; 
//     this.setName = function(thyName) { 
//         name = thyName; 
//     }; 
//     this.sayHello = function() { 
//         console.log('Hello ' + name); 
//     }; 
// }; 
// module.exports = world5;


world1();
//exports标志的方法只能对外使用，不能再内部调用，会报错
// world4();
console.log("end...");
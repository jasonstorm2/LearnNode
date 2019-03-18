/**********与exports暴露模块无法兼容********** */

console.log('...start'); 


//对象构造器
function world5() { 
    var name; 
    var age = 50;
    this.setName = function(thyName) { 
        name = thyName; 
    }; 
    this.sayHello = function() { 
        console.log('world5: ' + name); 
    }; 
}; 
// module.exports = world5;  //对外暴露对象--注意未实例化
module.exports = new world5();  //对外暴露对象的实例
console.log('...middle'); 
console.log(__filename); 
console.log( __dirname );
console.log();

console.log("%c3D Text"," text-shadow: 0 1px 0 #ccc,0 2px 0 #c9c9c9,0 3px 0 #bbb,0 4px 0 #b9b9b9,0 5px 0 #aaa,0 6px 1px rgba(0,0,0,.1),0 0 5px rgba(0,0,0,.1),0 1px 3px rgba(0,0,0,.3),0 3px 5px rgba(0,0,0,.2),0 5px 10px rgba(0,0,0,.25),0 10px 10px rgba(0,0,0,.2),0 20px 20px rgba(0,0,0,.15);font-size:5em");
console.log('%cRainbow Text ', 'background-image:-webkit-gradient( linear, left top, right top, color-stop(0, #f22), color-stop(0.15, #f2f), color-stop(0.3, #22f), color-stop(0.45, #2ff), color-stop(0.6, #2f2),color-stop(0.75, #2f2), color-stop(0.9, #ff2), color-stop(1, #f22) );color:transparent;-webkit-background-clip: text;font-size:5em;');

// module.exports = 155;

/**********同一个文件中，不能有多个module.exports = world6语句*********/
//对象构造器
// function world6() { 
//     var age; 
//     this.setAge = function(a) { 
//         age = a; 
//     }; 
//     this.printAge = function() { 
//         console.log('world6: ' + age); 
//     }; 
// }; 
// module.exports = world6;

console.log('...end'); 
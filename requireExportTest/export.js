var arg1  = 100;
var arg2 = 200;

var afun = function (x) {
    console.log("打印变量值x:"+x);    
}

var ss = function () {
    return function  myClass(x) {
        var self = this;
        self.x = x;
        console.log("打印构造函数时输入的值：x"+this.x);
    }
    // myClass.prototype.print = function () {
    //     console.log("打印构造函数时输入的值：x"+this.x);     
    // };
}();

module.exports={
    arg1,
    arg2,
    afun,
    ss
}
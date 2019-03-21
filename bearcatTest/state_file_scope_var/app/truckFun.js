var bearcat = require('bearcat');
var TruckFun = function(){
    this.$id = "truckfun";
}

TruckFun.prototype.run = function(){
    console.log("my truck in running...");   
    console.log("跑小汽车。。。");
    var car = bearcat.getBean('car'); // get bean
	car.run(); // call the method
     
}

module.exports = TruckFun;
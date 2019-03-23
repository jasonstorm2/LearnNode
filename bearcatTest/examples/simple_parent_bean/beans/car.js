
var rs = require("./animal");
var n = 1;

var Car = function(engine, wheel, num) {
	this.engine = engine;
	this.wheel = wheel;
	this.num = num;
	n++;
};

Car.prototype.run = function() {
	this.engine.start();
	this.wheel.run();
	console.log(this.num);
	this.animal.init();
	this.animal.destroy();
	console.log(this.animal.ar1);
	/** 普通的导入*/
	console.log("------------- 普通的导入------------");
	//取类的方法
	new rs.func().init()
	new rs.func().destroy();
	//取类的参数
	new rs.func().ar1;	
	//打印exports的参数
	console.log(rs.id);
	console.log(rs.initMethod);
	console.log(rs.ddd);
	console.log(rs.initMethod);
	
	
}

module.exports = {
	func: Car,
	id: "car",
	args: [{
		name: "engine",
		ref: "engine"
	}, 
	{
		name: "wheel",
		ref: "wheel"
	},{
		name: "num",
		value: 100
	}],
	props:[
		{
			name:"animal",
			ref:"animal"
		}
	],
	order: 1
};
var Car = function() {

}

Car.prototype.run = function() {
	console.log('run car...out没有在代码里向外暴露');
	return 'car';
}

module.exports = Car;
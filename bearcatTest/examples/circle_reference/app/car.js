var Car = function() {
	this.$id = "car";
	this.$bus = null;
	console.log("Car creating....");
}

Car.prototype.run = function() {
	console.log('run car...');
	return 'car';
}

module.exports = Car;
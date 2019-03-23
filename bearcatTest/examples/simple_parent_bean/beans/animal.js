var Animal = function() {}
var fs = require('fs');

var variabel = 100;
Animal.prototype.init = function() {
	console.log('init Animal...');
}

Animal.prototype.destroy = function() {
	console.log('destroy Animal...');
}

Animal.prototype.start = function() {
	console.log('starting Animal...');
}

Animal.prototype.ar1 = 101;

module.exports = {
	id: "animal",
	func: Animal,
	initMethod: "init",
    ddd: "destroy1",
    ar1:"sssss"
};
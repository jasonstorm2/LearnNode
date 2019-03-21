var num = 1;
var Engine = function() {
	this.$id = "engines";
}

Engine.prototype.run = function() {
	this.num = num++;
	return 'engines';
}

module.exports = Engine;
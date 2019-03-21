var Bus = function() {
	this.$id = "bus";
	this.$car = null;
	console.log("Bus creating....");
	
}

Bus.prototype.run = function() {
	console.log('run bus...');
	return 'bus';
}

module.exports = Bus;
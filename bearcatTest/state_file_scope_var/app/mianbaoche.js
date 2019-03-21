var Mianbao = function() {
	this.num = null;
}

Mianbao.prototype.run = function() {
	console.log('run mianbao...');
	return 'mianbao_' + this.num;
}

module.exports = {
	id: "mianbao",
	func: Mianbao,
	scope: "singleton",
	props: [{
		name: "num",
		value: 100
	}]
};
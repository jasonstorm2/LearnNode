var Tank = function() {
	this.$id = "tank";
}

Tank.prototype.run = function() {
	console.log('tank run .代码里暴露..out');
	return 'tank run';
}

module.exports = Tank;


// module.exports = {
// 	id:"tank",
// 	func:Tank
// };
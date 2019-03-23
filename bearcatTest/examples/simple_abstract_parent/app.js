var bearcat = require('bearcat');

var contextPath = require.resolve('./context.json'); // to run simple example

// for using stateful variable, set up BEARCAT_FUNCTION_STRING flag to use funcString to resolve $ props
bearcat.createApp([contextPath], {
	BEARCAT_FUNCTION_STRING: true
});

bearcat.start(function() {
	/** car*/
	console.log("---------------------");
	
	var bus = bearcat.getBean('bus'); // get bean
	bus.fly();//重写了父类 car的fly方法
	//抽象类car不能运行
	bus.run();


});
var bearcat = require('bearcat');

var contextPath = require.resolve('./context.json'); // to run simple example

// for using stateful variable, set up BEARCAT_FUNCTION_STRING flag to use funcString to resolve $ props
bearcat.createApp([contextPath], {
	BEARCAT_FUNCTION_STRING: true
});

bearcat.start(function() {
	/** car*/
	console.log("---------------------");
	
	var car = bearcat.getBean('car'); // get bean
	car.run(); // call the method
	console.log("car.a:"+car.a);	


	/** bus*/
	console.log("---------------------");
	var bus = bearcat.getBean('buss');//获得一个bus对象
	bus.run();
	console.log("bus的颜色："+bus.color);
	console.log("bus的$id："+bus.$id);

	/** bus 2 */
	console.log("---------------------");
	console.log("测试bus为函数");
	
	var bus = bearcat.getFunction('buss');//获得一个bus对象
	new bus().run();

	

	/** mianbao*/
	console.log("---------------------");
	var mianbao = bearcat.getBean('mianbao');
	var res = mianbao.run();
	console.log("面包车返回值:"+res);	

	/** truck*/
	console.log("---------------------");

	var truck = bearcat.getFunction("truckfun");
	var tt = new truck();
	tt.run();

	/** truck 2 */
	console.log("---------------------");
	var truck = bearcat.getBean("truckfun");
	truck.run();
});
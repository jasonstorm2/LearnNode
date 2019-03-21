var bearcat = require('bearcat');
var contextPath = require.resolve('./context.json', {
	BEARCAT_FUNCTION_STRING: true
}); 

bearcat.createApp([contextPath]);
bearcat.start(function() {
	var car = bearcat.getBean('car'); // get bean
	car.run();
});
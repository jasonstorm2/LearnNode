
/**
 * 一个模块中的 JS 代码仅在模块第一次被使用时执行一次，并在执行过程中初始化模块的导出对象。之后，缓存起来的导出对象被重复利用。
 * 
 * require函数用于在当前模块中 加载和使用别的模块，传入一个模块名，返回一个模块导出对象
 */
var run = require('./run');
var run2 = require('./run');


console.log("名字："+run.name);
run.runing();
run.sleep();
//模块初始化的测试，被初始化后，放入缓存，不再被初始化
console.log(run.count());
console.log(run2.count());





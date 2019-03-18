/**
 * nodejs的全局对象和全局变量
 * 
 * 全局对象：global。所有全局变量的宿主
 * 全局变量：global 的属性
 * 
 * 注意： 永远使用 var 定义变量以避免引入全局变量，因为全局变量会污染 命名空间，提高代码的耦合风险。
 */


/** __filename 
 * 表示当前正在执行的脚本的文件名
 * 它将输出文件所在位置的绝对路径，且和命令行参数所指定的文件名不一定相同。 如果在模块中，返回的值是模块文件的路径。
*/
console.log('__filename:' + __filename);//E:\myPro\nodeLearn\globalVariableTest.js

/** __dirname
 * __dirname 表示当前执行脚本所在的目录。
*/
console.log('__dirname:' + __dirname);//E:\myPro\nodeLearn


/** setTimeout(cb, ms)
 *全局函数在指定的毫秒(ms)数后执行指定函数(cb)。：setTimeout() 只执行一次指定函数。

返回一个代表定时器的句柄值
*/
var timer = setTimeout(function () {
    console.log("全局定时器");
}, 2000);

/** clearTimeout(t)
 *全局函数用于停止一个之前通过 setTimeout() 创建的定时器。 参数 t 是通过 setTimeout() 函数创建的定时器。
*/
clearTimeout(timer);

/** 
 *  setInterval(cb, ms))
 *  全局函数在指定的毫秒(ms)数后执行指定函数(cb)。
    返回一个代表定时器的句柄值。可以使用 clearInterval(t) 函数来清除定时器。
    setInterval() 方法会不停地调用函数，直到 clearInterval() 被调用或窗口被关
*/

var interval = setInterval(function(){console.log('hello~~');
},1000);

/**
 * clearInterval(t) 全局函数,清除定时执行器 
 * 
 */
setTimeout(function(){
    console.log("清除定时执行器中。。。");    
    clearTimeout(interval);
}, 5000);

/**
 * console 全局标准输出
 * 有多种方法
 */
console.time('timer');  //timer计时开始
var tt = 89;
console.log("清除定时执行器中。。。",tt); 
console.error('这是一个错误');
// console.trace(); //打印当前的调用栈
console.timeEnd('timer');//timer计时结束

/**
 * process 
 * 是一个全局变量，即 global 对象的属性。
 * 它用于描述当前Node.js 进程状态的对象，提供了一个与操作系统的简单接口。
 * 通常在你写本地命令行程序的时候，少不了要 和它打交道。
 */

// 输出当前目录
console.log('当前目录: ' + process.cwd());

// 输出当前版本
console.log('当前版本: ' + process.version);

// 输出内存使用情况
console.log(process.memoryUsage());

process.exit();//退出当前进程
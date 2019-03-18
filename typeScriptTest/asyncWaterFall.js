var async = require('async');
var a = 10;

/**
 * async.waterfall(tasks,callback)
 * 瀑布流函数，串行执行数组中的每一个函数,最后执行回调
 * 第一个参数tasks是一个数组，数组包含的是需要依次执行的函数名。
 * 第二个参数为回调函数，当瀑布流函数执行出现错误时会执行这个回调函数并将错误信息返回，当瀑布流函数无错误时，会在执行完tasks数组中包含的函数后执行这个回调函数
 * 上一个函数调用下一个函数的方法 ：cb(null,args); 注意，第一个参数是null
 * 
 * 
 */
async.waterfall([   // 瀑布流测试
    function(cb) {
        console.log("getb")
        setTimeout(function() {
            if (a == 0) {
                cb(new Error("a不能为0"));
            } else {
                var b = 1 / a;
                cb(null,b); //在这里通过回调函数把b传给下一个函数，记得一定要加上null，才能调用数组中的下一个函数，否则，会直接调用最终的回调函数，然后结束函数，则后面的函数将不再执行
                //如果这里写成cb(b);
                //结果会变成：
                /**
                 *getb
                 *错误的结果：0.1
                 **/
            }
        }, 1000);
    },
    function(b, cb) {
        setTimeout(function() {
            console.log("getc")
            var c = b + 1;
            cb(null,c);
        }, 1000);
    }
], function(err, result) {
    if (err) {
        console.log("错误的结果："+err);
        
    } else {
        console.log('c:' + result)
    }
});

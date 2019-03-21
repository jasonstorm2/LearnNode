//当前模块导出的对象，用于导出模块共有方法和属性
exports.runing = function(){
    console.log("running");    
}

exports.sleep = function(){
    console.log("sleeping now");
    
}

exports.name = "jason";

var sleepTime = 1;

function count(){
    return sleepTime++;
}
exports.count = count;
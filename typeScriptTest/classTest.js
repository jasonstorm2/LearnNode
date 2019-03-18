var site = /** @class */ (function () {
    function site() {
    }
    site.prototype.name = function () {
        console.log('hello world');
    };
    return site;
}());
var obj = new site();
obj.name();
var str = '1';
var str2 = str;
console.log('类型断言：' + str2);
console.log('hello：' + str2);
var str3 = str;
console.log('类型断言2：' + str3);
var cc = /** @class */ (function () {
    function cc() {
        this.param1 = 123;
        this.param2 = 22;
    }
    cc.prototype.sett = function (x) {
        return 2;
    };
    return cc;
}());
var objs = new cc();
console.log(objs.param1);
console.log(objs.param2);
console.log(objs.param3);
var s1;
var s2 = s1;
s2.param1;
s2.sett(55);

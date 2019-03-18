class site{
    name():void{
        console.log('hello world');
    }
}
var obj = new site();
obj.name();

var str:string = '1';
var str2:number = <number> <any>str;
console.log('类型断言：'+str2);
console.log('hello：'+str2);

var str3:number=<any>str as number;
console.log('类型断言2：'+str3);

interface sss{
    [lalalalala:number]:string;
}

interface ccc {
    param1:number;
    sett(x:number):number
}
class cc implements ccc{
    sett(x: number): number {
        return 2;
    }
    param1: number = 123;
    param2:number = 22;
    param3:string;     
}
let objs = new cc();
console.log(objs.param1);
console.log(objs.param2);
console.log(objs.param3);
let s1;
let s2 =<ccc>s1;
s2.param1;
s2.sett(55);




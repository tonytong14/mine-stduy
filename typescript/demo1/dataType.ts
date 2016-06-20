/**
 * Created by Administrator on 2016/6/19.
 */
//typescript 的数据类型
var isBool:boolean=true; //布尔类型
var isNum:number=666;    //number类型
var isStr:string='sajdja'; //字符串类型
var isArr:Array<number>=[1,3,6,7]; // 数组类型的声明方式一
var arr:string[]=['sf','ss','7','8']; //数组类型声明的方式二
//枚举数据类型 enum
enum Color {Red,Cyan,Blue};
var colorName:string=Color[0];
var c=Color.Blue;
function  TellEnum(){
    console.log(colorName);
    console.log(c);
}
TellEnum();
//any 数据类型
var anyting:any='任意数据类型';
    anyting=1213;
    anyting=[1,3,5];
function  tellAny(){
    console.log(anyting);
}
tellAny();

//void 数据类型 没有返回值的函数
function  VoidSting():string {
    return '10';
}

function other():void{
}

//元组 tuple 数据类型
let x:[string,number];
x=['test',3656]
x[0].substr(1);
/*x[1].substr(1);*/
x[2].toString();
/*x[3]=true;*/
//元组类型允许表示一个已知元素数量和类型的数组，各元素的类型不必相同。当访问一个越界的元素，会使用联合类型替代：

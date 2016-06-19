/**
 * Created by Administrator on 2016/6/19.
 */
//typescript 的数据类型
var isBool:boolean=true; //布尔类型
var isNum:number=666;    //number类型
var isStr:string='sajdja'; //字符串类型
var isArr:Array<number>=[1,3,6,7]; // 数组类型的声明方式一
var arr:string[]=['sf','ss','7','8']; //数据类型声明的方式二
//枚举数据类型 enum
enum Color {Red,Cyan,Blue};
var colorName:string=Color[0];
var c=Color.Blue;
function  TellEnum(){
    console.log(colorName);
    console.log(c);
}
TellEnum();

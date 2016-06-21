/**
 * Created by Administrator on 2016/6/20.
 */
//typescript 带有指定意义的函数声明方式
var myStar = function (n, sex) {
    return '周杰伦';
};
//函数的可选和默认参数
function parm(n, f) {
    return n + f;
}
/*parm();*/
parm(5, 6);
function parm1(n, f) {
    return n + f;
}
parm1(); //在形参加上？表示可选参数
/*parm(1,3,4) 参数超过形参语法报错*/
function parm2(n, f) {
    if (f === void 0) { f = 6; }
    return n + f;
}
parm2(4);
parm2(4, 7); //默认参数=值，如果传参使用默认值，传参使用传参值
//可变参数 ...表示
function changeParm() {
    var name = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        name[_i - 0] = arguments[_i];
    }
    console.log(name.join('-'));
}
changeParm('45', 'fa', 'fg', 'fnjs');
//lambads => 和 this 关键字
var keyword = {
    name: ['ttt', 'ccc', 'qqq'],
    getName: function () {
        return function () {
            var i = Math.floor(Math.random() * 3);
            return {
                n: this.name[i]
            };
        };
    }
};
var keyword1 = {
    name: ['ttt', 'ccc', 'qqq'],
    getName: function () {
        var _this = this;
        return function () {
            var i = Math.floor(Math.random() * 3);
            return {
                n: _this.name[i]
            };
        };
    }
};
var test = keyword.getName();
var test = keyword1.getName();
console.log(test().n); //underfind
console.log(test().n); //有值
//函数的重载
//js 的匿名函数  声明函数方式
function sheng() { }
var ni = function () { };
function sheng1(n) {
    return 'sheng';
}
var ni1 = function (s) {
    return 123;
};
//# sourceMappingURL=function.js.map
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/**
 * Created by Administrator on 2016/6/19.
 */
//类的实现，书写方式
var Person = (function () {
    //构造方法
    function Person(name, age) {
        this.name = name;
        this.age = age;
    }
    //普通的函数
    Person.prototype.print = function () {
        return this.name + '------' + this.age;
    };
    return Person;
}());
var ren = new Person('meiss', 19);
alert(ren.print());
//类的继承
var Star = (function () {
    function Star(name, age) {
        this.name = 'rain';
        this.age = 99;
        this.name = name;
        this.age = age;
    }
    Star.prototype.song = function (ming) {
        console.log(this.name + '--' + this.age + ming);
    };
    return Star;
}());
var SuperStar = (function (_super) {
    __extends(SuperStar, _super);
    function SuperStar(money) {
        _super.call(this, 'wulitao', 250);
        this.money = money;
    }
    SuperStar.prototype.say = function () {
        console.log(this.name + '---' + this.age + '--' + this.money);
    };
    return SuperStar;
}(Star));
var rain = new SuperStar(250);
rain.song('我不知道');
rain.say();
//访问修饰符
var People = (function () {
    function People() {
    }
    People.prototype.print = function () {
        return this.name + '----' + this.age;
    };
    return People;
}());
var Man = (function (_super) {
    __extends(Man, _super);
    function Man() {
        _super.apply(this, arguments);
    }
    Man.prototype.print = function () {
        return this.name + '---' + this.school;
    };
    return Man;
}(People));
var m = new Man();
m.name = 'wyf';
m.school = 'erxuexiao';
alert(m.print());
//封装的实现
/*
class Hello{
    private _name:string;
    tell(){
        return this.name ;
    }
    get name():string{
        return this._name;
    }
    set name(newname:string):string {
         this._name=newname;
    }
}*/
//# sourceMappingURL=classes.js.map
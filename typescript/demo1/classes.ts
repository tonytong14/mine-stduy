/**
 * Created by Administrator on 2016/6/19.
 */
//类的实现，书写方式
class Person {
    //属性
    name:string;
    age:number;
    //构造方法
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    //普通的函数
    print(){
        return this.name +'------' +this.age ;
    }
}

var ren=new Person('meiss',19);
alert(ren.print());

//类的继承
class Star {
    name:string='rain';
    age:number=99;
    constructor(name:string,age:number){
        this.name=name;
        this.age=age;
    }
    song(ming){
        console.log(this.name +'--'+this.age +ming);
    }
}
class SuperStar extends Star{
    money:number;
    constructor(money:number){
        super('wulitao',250);
        this.money=money;
    }
    say(){
        console.log(this.name +'---'+this.age+'--'+this.money);
    }
}

var rain=new SuperStar(250);
rain.song('我不知道');
rain.say();

//访问修饰符 public private protected
class People{
    public name:string;
    private age:any;
    protected height:number;
    constructor(h:number){
        this.height=h;
    }
    print(){
        return this.name +'----'+ this.age ;
    }
}

class Man extends People{
    school:string;
    constructor(s:string){
        super(173);
        this.school=s;
    }
    print(){
        return this.name  +'---'+this.school;
    }
}

var m=new Man('yp');
m.name='wyf';
m.school='erxuexiao';
alert(m.print());

//封装的实现

/*class Hello{
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

//static
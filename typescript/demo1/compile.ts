/*
function person(name){
	return '男:' + name;
}
var name=34555;

document.body.innerHTML=person(name);
*/
//定义参数类型：强类型
function person(name:string){
	return '男:' + name;
}
var name='周杰伦';
document.body.innerHTML=person(name);


//类class 接口interface 构造函数constructor
//定义接口对象
interface Stduent{
	firstNum:string;
	lastNum:string;
}

function build(stu:Stduent){
	return '周杰伦' + stu.firstNum + stu.lastNum ;
}
var lev={firstNum:'一年级',lastNum:'博士后'};
document.body.innerHTML=build(lev);

//类的使用
class Star{
	info:string;
	constructor(public name,public sex,public height){
		this.info=name +'<br/>' + sex + '<br/>' + height
	}
}

interface Man{
		name:string;
		sex:string;
}

function log(m:Man){
	return m.name + m.sex
}
var user=new Star('黄晓明','男','1.5米');

document.body.innerHTML=log(user);


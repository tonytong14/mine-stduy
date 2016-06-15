/*
function person(name){
    return '男:' + name;
}
var name=34555;

document.body.innerHTML=person(name);
*/
//定义参数类型：强类型
function person(name) {
    return '男:' + name;
}
var name = '周杰伦';
document.body.innerHTML = person(name);
function build(stu) {
    return '周杰伦' + stu.firstNum + stu.lastNum;
}
var lev = { firstNum: '一年级', lastNum: '博士后' };
document.body.innerHTML = build(lev);
//类的使用
var Star = (function () {
    function Star(name, sex, height) {
        this.name = name;
        this.sex = sex;
        this.height = height;
        this.info = name + '<br/>' + sex + '<br/>' + height;
    }
    return Star;
}());
function log(m) {
    return m.name + m.sex;
}
var user = new Star('黄晓明', '男', '1.5米');
document.body.innerHTML = log(user);

// 引入 events 模块
var events = require('events');
/*var http=require('http');
// 创建 eventEmitter 对象
var eventEmitter = new events.EventEmitter();
// 创建事件处理程序
var connectHandler = function connected() {
    console.log('连接成功。');

    // 触发 data_received 事件
    eventEmitter.emit('data_received');
}

// 绑定 connection 事件处理程序
eventEmitter.on('connection', connectHandler);

// 使用匿名函数绑定 data_received 事件
eventEmitter.on('data_received', function(){
    console.log('数据接收成功。');
});

// 触发 connection 事件
eventEmitter.emit('connection');

console.log("程序执行完毕。");*/

//继承
// 引用util工具方便继承

var util = require ( 'util' ) ;

var events = require ( 'events' ) ;

// 创建自定义对象

var Cat = function ( name ) {

    this . name = name ;

}

// 继承events.EventEmitter

util . inherits ( Cat , events . EventEmitter ) ;

// 创建自定义对象实例

var Tom = new Cat ( 'Tom' ) ;

// 绑定sayHiTo事件

Tom . on ( 'sayHi' , function ( someone ) {

// this指向实例Tom

    console . log ( this . name , " sayHiTo " , someone )

} )

Tom . emit ( 'sayHi' , 'jerry' )
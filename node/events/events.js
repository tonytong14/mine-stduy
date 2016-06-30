    //加载events模块
    var events=require('events');
        //events模块只提供了一个对象 EventEmitter
        //实例化EventEmitter对象
        var eventemitter=new events.EventEmitter();
        //EventEmitter的事件绑定方法 on('事件名'，'回调函数');
            //绑定方式一
            eventemitter.on('eventName',function(){
                console.log('事件绑定方式一');
            });
            //绑定方式二
            var twoWay=function(para){
                console.log('事件绑定方式二');
                console.log(para);
            }
            eventemitter.on('eventName',twoWay);
        //Emitter 的事件绑定方法 once('事件名'，‘回调函数’)
        //once 为为指定事件注册一个单次监听器，即 监听器最多只会触发一次，触发后立刻解除该监听器。
            eventemitter.once('eventName',function(){
                console.log('这是个一次性事件');
            });
        //Emitter的事件执行方法 emit('事件名'，‘参数’)
            eventemitter.emit('eventName','参数');

        //Emitter的事件方法 addListenner
        //addListener('事件名'，‘回调函数’) 为指定事件添加一个监听器到监听器数组的尾部。
        eventemitter.addListener('eventName',function(){
            console.log('为事件添加一个监听器到监听数组尾部');
        });
        eventemitter.emit('eventName');

        //removeListener('事件名'，‘回调函数名’) 移除指定事件的某个监听器，监听器 必须是该事件已经注册过的监听器。
        eventemitter.removeListener('eventName',twoWay);
        eventemitter.emit('eventName');

        //setMaxListeners('数量') 默认情况下， EventEmitters 如果你添加的监听器超过 10 个就会输出警告信息。 setMaxListeners 函数用于提高监听器的默认限制的数量。
        eventemitter.setMaxListeners(15);

        //listeners('事件名') 返回指定事件的监听器数组
        var arr=eventemitter.listeners('eventName');
        console.log(arr);

        //listenerCount(emitter,'事件名') 返回指定事件的监听器数量。
        //类方法
        var leg=require('events').EventEmitter.listenerCount(eventemitter,'eventName');
        console.log(leg);

       /* //removeAllListeners('事件名'); 移除指定事件上的所有监听器
        eventemitter.removeAllListeners('eventName');
        eventemitter.emit('eventName');*/

        //事件
        //newListener 该事件在添加新监听器时被触发。参数 事件名 处理函数
        eventemitter.on('newListener',function(event,listener){
            if(event === 'eventName'){
                console.log(listener);
                console.log('newListener 新增事件监听');
            }
        });
        eventemitter.on('eventName',function(){
            console.log('这是一个新的事件监听器');
        });
        eventemitter.emit('eventName');

        //removeListener 从指定监听器数组中删除一个监听器。需要注意的是，此操作将会改变处于被删监听器之后的那些监听器的索引。参数 事件名 处理函数
        eventemitter.on('removeListener',function(event,listener){
            if(event === 'eventName'){
                console.log('移除事件的处理函数');
            }
        });
        function  rm(){
            console.log('移除事件测试');
        }
        eventemitter.on('eventName',rm);
        eventemitter.removeListener('eventName',rm);
        eventemitter.emit('eventName');
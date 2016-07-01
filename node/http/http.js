//引入http模块
    /*
        'http'模块提供两种使用方式：

        作为服务端使用时，创建一个HTTP服务器，监听HTTP客户端请求并返回响应。

        作为客户端使用时，发起一个HTTP客户端请求，获取服务端响应。
    */
var http=require('http');
//创建服务器
http.createServer(function(request,response){
    //发送http头部
    //http状态值
    //内容类型：text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('this my log\n');
}).listen(5858);

//console.log('Server running at http://127.0.0.1:8888/');
//npm install supervisor -g 全局安装监听模块方便修改
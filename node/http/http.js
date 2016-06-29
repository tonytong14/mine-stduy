//引入http模块
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
//引入http模块
var http=require('http');
//创建服务器
http.createServer(function(request,response){
    //发送http头部
    //http状态值
    //内容类型：text/plain
    response.writeHead(200,{'Content-Type':'text/plain'});
    response.end('hello word\n');
}).listen(8888);

console.log('Server running at http://127.0.0.1:8888/');
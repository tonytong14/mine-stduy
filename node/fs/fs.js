//获取fs模块
var fs=require('fs');
  //同步读取文件
    var data=fs.readFileSync('fd.txt','utf-8');
    console.log(data);
    console.log('这是同步');
  //异步读取文件
    fs.readFile('fd.txt','utf-8',function (err,data) {
        if(err){
            console.log('读取失败');
        }else{
            console.log(data);
        }
    });
    console.log('这是异步');
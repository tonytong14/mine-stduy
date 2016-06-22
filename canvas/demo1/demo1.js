var mycanvas=document.getElementById('canvas');
/*
if(mycanvas.getContext){
    var can=mycanvas.getContext('2d');
   /!* can.beginPath();
    can.strokeStyle='cyan';
    can.fillStyle='#000';
    can.lineWidth='1px';
    can.lineCap='round';//圆头round，方头square，平头butt
    can.lineJoin='';//线相交方式 圆 round 斜交bevel 斜接 miter
    can.fillRect(10,10,300,300);
    can.strokeRect(10,10,300,300);
    can.closePath();*!/
    can.beginPath();
    can.arc(300,300,100,0,360);
    can.strokeStyle='#000000';
    can.stroke();
}*/

function taiJi(deg){
    if(mycanvas.getContext){
        var can=mycanvas.getContext('2d');
        can.clearRect(0,0,600,600);
        can.beginPath();
        can.strokeStyle='#000';
        can.fillStyle='#000';
        can.arc(300,300,100,(Math.PI * 0)/180,(Math.PI * 360)/180);
        can.fill();
        can.stroke();
        can.beginPath();
        can.fillStyle='#fff';
        can.arc(300,300,100,(Math.PI * 0)/180,(Math.PI * 180)/180,true);
        //can.arcTo(400,300,200,300,0);
        can.fill();
        can.beginPath();
        can.fillStyle='#fff';
        can.arc(250,300,50,(Math.PI * 0)/180,(Math.PI *180)/180);
        can.fill();
        can.beginPath();
        can.fillStyle='#000';
        can.arc(350,300,50,(Math.PI * 0)/180,(Math.PI *180)/180,true);
        can.fill();
        //can.translate(300,300);
        //can.rotate(deg);
    }
}

taiJi(0);
var deg=1;
setInterval(function(){
   taiJi(deg)
    deg++;
},10)
闭包：变量的私有化问题

计数器 ：每次调用+1
var countter=0;
function add(){
    var countter=0;
    plus=function (){
        countter ++;  //全局变量的生命周期 局部变量
        console.log("counter="+countter);
    }
}
add(); //counter 初始化
plus()
plus()
// 函数： 代码的复用
var time=7
function foo(arg1,arg2,...){
    执行的语句
}

动态参数
function add(){
    var z=0
    for(var i=0;i<arguments.length;i++){
        z+=arguments[i]
    }
    return z;

}
var rs=add(1,2,3,4,5);

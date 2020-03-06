对象：
变量var
函数function
对象： 一堆变量+一堆函数
var obj1={
    x:0,
    y:1,
    z:function(){console.log("hello world")}
}
属性：名：值
名： 隐式转化为string x:0等同于"x":0
如果包含了特殊字符，必须加引号，否则报错
对象的直接量

var obj2={
    x:0,
    y:1
}
增：obj2.z=2; obj2["z"]=2;
删：delete obj2.x 
改：obj2.x=1;

遍历
for(var p in obj2){
    
}




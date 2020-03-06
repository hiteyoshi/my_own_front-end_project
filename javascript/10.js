引用和赋值
var person1={
    name:"xm",
    sex:"male",
    age:"19",
    slogan:function(){
        console.log("I am xm");
    }
}

var person2=person1;//指向这个地址，两者指的是同一个地方
person2.name="xm2";
-》person1-》 "xm2"
   person2 -> "xm2"

要独立的对象
用类的形式创建对象
class PersonClass{
    name="xm";
    sex="male";
    age="19";
    slogan=function(){
        console.log("I am xm");
    }
}
var person3=new PersonClass();
var person4=new PersonClass();
person4.name="xh"

命名空间： 多个人在写，相互合作,防止命名冲突
var cc={};
cc.age=100;

系统提供的类 可用的方法
var obj1={};
等同于
var obj2=new Object();

值             万物 皆 对象
数字123        -》对象 类型 Number
字符串"abc"                String
布尔值 true                Boolean

var n1=123;
var str1=n1.toString();

时间相关 Date
var time1=new Date(); //获取当前的时间，本地电脑的时间
var time2=new Date();
var time=time2.getTime()-time1.getTime();  得到运行的毫秒数
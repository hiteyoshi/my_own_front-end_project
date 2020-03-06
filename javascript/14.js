DOM树
document 节点：只有一个
标签节点 元素节点：
文本节点

标签节点 元素节点：样式 
找到这些节点

3重最常用的方法
1. 通过ID查找
2.通过标签名查找
3. 通过class查找

id -》唯一性
var div1=document.getElementById("div1") //节点,相同的id选第一个
js 时间线

var ps=document.getElementsByTagName("p"); //数组
var p1=ps[0]; //节点

var ps=document.getElementsByClassName("box1");
ps[0]

1. id 返回节点
   tag class 返回数组
2. id 只能通过document
    tag class 可通过任意标签节点

var div1=document.getElementById("div1")
div1.getElementsByClassName("txt1") //当前节点以下，不包含本节点



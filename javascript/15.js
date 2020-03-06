创建节点 添加到DOM树 删除节点

var div1=document.getElementById("div1")

创建一个p标签
var p=document.createElement("p");
创建一个文本节点
var p1txt=document.createTextNode("p1");
p.appendChild(p1txt))
添加节点
div1.appendChild(p)

删除节点
var div2=document.getElementById("div2")
div1.removeChild(div2)

自己删除自己
div2.parentNode.removeChild(div2)
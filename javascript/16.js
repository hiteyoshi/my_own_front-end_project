//修改节点
//对节点的属性 内容

对html中定义好的属性 对象.属性
var img1=document.getElementById("img1")
img1.src="1.jpg"
//class   class是js的关键词，用className来代替
img1.className="a"
针对css样式的修改
img1.style.width="100px";

获取属性
img1.getAttribute("class")

设置属性
img1.setAttribute("属性名"，属性值)

删除属性
img1.removeAttribute("src")；

针对内容操作
var p1=document.getElementById("p1");
p1.innerHTML="hello <a href='www.baidu.com'>this is a</a>";//表示p标签内的文本内容,支持html语法
p1.textContent="hello <a href='www.baidu.com'>this is a</a>";//仅为纯文本



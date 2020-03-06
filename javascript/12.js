//DOM BOM
// windows 对象 -》 全局对象 全局的方法
console.log(window.cc)
var cc=100;
console.log(window.cc)

window可省略不写

//BOM
//弹窗 -》 浏览器的弹窗

//同步：阻断
alert("alert 弹窗")；
等同于
window.alert() //无返回值

var bcf=confirm("confirm 弹窗")  // 返回布尔值，确定取消

var strp=prompt("prompt 输入框","默认是cc");// 返回用户的输入，如果是空，返回第二个参数作为缺省值
console.log("用户输入为："+strp);


浏览器的导航栏信息，即地址栏
使用window.location 对象
属性：URL的各个部分
location.href;
location.toString()

刷新页面，打开新的页面
location.reload();
location.replace("http://www.baidu.com/")

浏览器的历史：前进后退
history.back()
history.forward()
history.go(-1); -1表示后退一次，1表示前进1次

浏览器的信息：版本 厂家
navigator.userAgent

浏览器的分辨率
screen

计时器
循环执行：
var sil= setInterval(函数名,时间); 每隔时间(毫秒），执行一次函数名
     停掉：clearInterval(sil);
一次执行
var sil=setTimeout(函数名，时间); 时间之后，执行函数名
    clearTimeout(sil);
var num=0
function add(){
    console.log("num"+ ++num);
}
var sil=setInterval(add,1000);
function end(){
    clearInterval(sil);
}
setTimeout(end,10000)
10秒之后停掉add任务




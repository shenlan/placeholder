placeholder
===========
基于jquery开发的一个placeholder插件，测试兼容所有浏览器。

原理就是在input框上方创建一个label标签，控制其隐藏显示，好处就是跟HTML5下体验一样，避免提交时再去验证默认提示字符。

引用方式：
 $("input").placeHolder();
 
 特殊情况下也可调用隐藏、显示method；
 
 隐藏
 $("input").placeHolder("hide");
 
 显示
 $("input").placeHolder("show");
 
 

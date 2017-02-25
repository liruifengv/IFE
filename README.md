# IFE
##自定义checkbox和radio样式<br>
![](https://liruifengv.github.io/IFE/checkbox/img/checkbox.png)
* 本任务使用了两种方式：1定位背景图片 2使用伪元素`::after` `::before`，主要练习关于`label`标签的使用<br>
`label`有两种使用方式：<br>
	* 显式：```<label for="username">Click me</label>```<br>
				```<input type="text" id="username">```<br>
	* 隐式： ```<label>Click me <input type="text"></label>```<br>
`label`标签拥有for属性，for与`input`的ID属性绑定，即可通过操控`label`来自定义`input`的样式
* [Demo]( https://liruifengv.github.io/IFE/checkbox/checkbox.html "自定义按钮")

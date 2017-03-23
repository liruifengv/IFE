/**
 * Created by 旧梦 on 2017/3/23.
 */
window,onload=function(){
    document.oncontextmenu=function(){
        return false;
    };                                          //屏蔽页面本身右键菜单
}

var menu_width=100,
    menu_height=90;

var wrap=document.getElementById("wrap");
var menu=document.getElementById("menu");

//自定义右键菜单
wrap.addEventListener('contextmenu',function(e){
    var left= e.layerX,              //鼠标相对当前坐标系的border左上角开始的坐标
        top= e.layerY,
        clientX= e.clientX,          //相对可视区域的坐标
        clientY= e.clientY,
        clientWidth=document.body.clientWidth,          //内容可是区域的尺寸
        clientHeight=document.body.clientHeight;
    //右边区域不够大，显示在左下方
    if(clientX+menu_width>clientWidth){
        left-=menu_width;
    }

    if(clientY+menu_height>clientHeight){
        top-=menu_height;
    }

    //设置menu并设置坐标
    menu.style.left=left+'px';
    menu.style.top=top+'px';
    menu.style.display='block';

});


//左键单击事件
document.addEventListener('click',function(e){
    if(!e){
        var e=window.event;
    }
    var target= e.target;                   //获取事件点击元素
    var elId=target.getAttribute('class');   //获取事件点击元素的class

    if(elId==='item'){                       //如果点击的是menu里的选项，弹出所点击内容
        alert(target.innerText);
    }else{
        menu.style.display='none';          //点击的不是menu，隐藏菜单
    }
});



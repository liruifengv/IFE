/**
 * Created by 旧梦 on 2017/3/22.
 */

//封装事件绑定函数，兼容浏览器
function addEvent(element,event,listener){
    if(element.addEventListener){
        element.addEventListener(event,listener,false);
    }
    else if(element.attachEvent){
        element.attachEvent("on"+event,listener);
    }
    else{
        element["on"+event]=listener;
    }
}

//绑定按钮
var data=[];
var bth=document.getElementsByTagName('input');
var input=bth[0];
var leftIn=bth[1];
var rightIn=bth[2];
var leftOut=bth[3];
var rightOut=bth[4];
var random=bth[5];
var sort=bth[6];
var ul=document.getElementById("container");


//在 <ul> 里面创建 <li> 标签
function createValue(el,value){
    el=document.createElement('li');
    el.style.height=value+'px';       //设置高度
    return el;
}

//左侧入函数
function leftInFunc(value){
    if(data.length>60){                    //判断数组长度是否大于60
        alert("队列已满");
        return false;
    }
    else{
        var li=createValue(li,value);              //调用创建函数，创建li
        data.unshift(value);
        ul.insertBefore(li,ul.firstChild);
    }
}
//给左侧入按钮绑定左侧入函数
addEvent(leftIn,"click",function(){
    var value=parseInt(input.value);
    /^([0-9]{2}|100)$/.test(value) ? leftInFunc(value*2):alert("Your input must between 10 and 100 !");
    //正则匹配
});

//右侧入函数
function rightInFunc(value){
    if(data.length>60){
        alert("队列已满");
        return false;
    }
    else{
        var li=createValue(li,value);
        data.push(value);
        ul.appendChild(li);
    }
}
//给右侧入按钮绑定右侧入函数
addEvent(rightIn,"click",function(){
    var value=parseInt(input.value);
    /^([0-9]{2}|100)$/.test(value)?rightInFunc(value*2):alert("Your input must between 10 and 100 !");

});

//左侧出函数
function leftOutFunc(){
    if(ul.firstChild!=null){
        data.shift();
        ul.removeChild(ul.firstChild);                     //删除第一个
    }
    else{
        alert("Please input your value !")
    }
}
//绑定左侧出按钮
addEvent(leftOut,"click",leftOutFunc);

//右侧出函数
function rightOutFunc(){
    if(ul.lastChild!=null){
        data.pop();
        ul.removeChild(ul.lastChild);
    }
    else{
        alert("Please input your value !")
    }
}
//绑定右侧出按钮
addEvent(rightOut,"click",rightOutFunc);

//随机函数，随机生成30个数
function randomFunc(){
    data.length=0;
    ul.innerHTML=null;
    for(var i=0;i<30;i++){
        leftInFunc((parseInt(Math.random()*90+10))*2);
    };
}
//绑定随机函数
addEvent(random,"click",randomFunc);


//冒泡排序函数
function sortFunc(el){
    var len=data.length,
        li=el,
        i= 0,
        j= 0,
        temp;
    var clear=setInterval(run,50);

    function run(){
        if(i<len){
            if(j<len-i-1){
                if(data[j]>data[j+1]){
                    temp=data[j];
                    data[j]=data[j+1];
                    data[j+1]=temp;
                    li[j].style.height=data[j]+'px';

                    li[j+1].style.height=data[j+1]+'px';

                }
                j++;
                return false;
            }
            else{
                j=0;              //这组if-else相当于"for(var j=0;j<len-i-1;j++)"
            }
            i++;
        }
        else{
            clearInterval(clear);        //这组if-else相当于"for(var i=0;i<len;i++)"
        }
    }
}
//绑定排序函数
addEvent(sort,"click",function(){
    var li=ul.getElementsByTagName('li');
    sortFunc(li);
});








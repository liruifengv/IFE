/**
 * Created by ���� on 2017/3/22.
 */

//��װ�¼��󶨺��������������
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

//�󶨰�ť
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


//�� <ul> ���洴�� <li> ��ǩ
function createValue(el,value){
    el=document.createElement('li');
    el.style.height=value+'px';       //���ø߶�
    return el;
}

//����뺯��
function leftInFunc(value){
    if(data.length>60){                    //�ж����鳤���Ƿ����60
        alert("��������");
        return false;
    }
    else{
        var li=createValue(li,value);              //���ô�������������li
        data.unshift(value);
        ul.insertBefore(li,ul.firstChild);
    }
}
//������밴ť������뺯��
addEvent(leftIn,"click",function(){
    var value=parseInt(input.value);
    /^([0-9]{2}|100)$/.test(value) ? leftInFunc(value*2):alert("Your input must between 10 and 100 !");
    //����ƥ��
});

//�Ҳ��뺯��
function rightInFunc(value){
    if(data.length>60){
        alert("��������");
        return false;
    }
    else{
        var li=createValue(li,value);
        data.push(value);
        ul.appendChild(li);
    }
}
//���Ҳ��밴ť���Ҳ��뺯��
addEvent(rightIn,"click",function(){
    var value=parseInt(input.value);
    /^([0-9]{2}|100)$/.test(value)?rightInFunc(value*2):alert("Your input must between 10 and 100 !");

});

//��������
function leftOutFunc(){
    if(ul.firstChild!=null){
        data.shift();
        ul.removeChild(ul.firstChild);                     //ɾ����һ��
    }
    else{
        alert("Please input your value !")
    }
}
//��������ť
addEvent(leftOut,"click",leftOutFunc);

//�Ҳ������
function rightOutFunc(){
    if(ul.lastChild!=null){
        data.pop();
        ul.removeChild(ul.lastChild);
    }
    else{
        alert("Please input your value !")
    }
}
//���Ҳ����ť
addEvent(rightOut,"click",rightOutFunc);

//����������������30����
function randomFunc(){
    data.length=0;
    ul.innerHTML=null;
    for(var i=0;i<30;i++){
        leftInFunc((parseInt(Math.random()*90+10))*2);
    };
}
//���������
addEvent(random,"click",randomFunc);


//ð��������
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
                j=0;              //����if-else�൱��"for(var j=0;j<len-i-1;j++)"
            }
            i++;
        }
        else{
            clearInterval(clear);        //����if-else�൱��"for(var i=0;i<len;i++)"
        }
    }
}
//��������
addEvent(sort,"click",function(){
    var li=ul.getElementsByTagName('li');
    sortFunc(li);
});








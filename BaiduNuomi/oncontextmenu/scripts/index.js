/**
 * Created by ���� on 2017/3/23.
 */
window,onload=function(){
    document.oncontextmenu=function(){
        return false;
    };                                          //����ҳ�汾���Ҽ��˵�
}

var menu_width=100,
    menu_height=90;

var wrap=document.getElementById("wrap");
var menu=document.getElementById("menu");

//�Զ����Ҽ��˵�
wrap.addEventListener('contextmenu',function(e){
    var left= e.layerX,              //�����Ե�ǰ����ϵ��border���Ͻǿ�ʼ������
        top= e.layerY,
        clientX= e.clientX,          //��Կ������������
        clientY= e.clientY,
        clientWidth=document.body.clientWidth,          //���ݿ�������ĳߴ�
        clientHeight=document.body.clientHeight;
    //�ұ����򲻹�����ʾ�����·�
    if(clientX+menu_width>clientWidth){
        left-=menu_width;
    }

    if(clientY+menu_height>clientHeight){
        top-=menu_height;
    }

    //����menu����������
    menu.style.left=left+'px';
    menu.style.top=top+'px';
    menu.style.display='block';

});


//��������¼�
document.addEventListener('click',function(e){
    if(!e){
        var e=window.event;
    }
    var target= e.target;                   //��ȡ�¼����Ԫ��
    var elId=target.getAttribute('class');   //��ȡ�¼����Ԫ�ص�class

    if(elId==='item'){                       //����������menu���ѡ��������������
        alert(target.innerText);
    }else{
        menu.style.display='none';          //����Ĳ���menu�����ز˵�
    }
});



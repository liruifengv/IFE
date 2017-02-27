/**
 * Created by ¾ÉÃÎ on 2017/2/25.
 */
function oncontextmenu(){
    if(!document.getElementById) return false;
    if(!document.getElementsByTagName) return false;

    var menu=document.getElementById("menu");
    var li=document.getElementsByTagName("li");
    browserHeight=window.innerHeight;
    browserWidth=window.innerWidth;

    document.oncontextmenu=function(e){
        menu.style.display="block";
        document.body.style.overflow="hidden";
        var e=e||window.event;
        scrollTop=document.documentElement.scrollTop||document.body.scrollTop;
        scrollLeft=document.documentElement.scrollLeft||document.body.scrollLeft;
        clientX= e.clientX;
        clientY= e.clientY;

        offsetWidth=menu.offsetWidth;
        offsetHeight=menu.offsetHeight;
        var top;
        var left;

        if(clientY+offsetHeight>=browserHeight){
            top=clientY-offsetHeight;
        }else{
            top=clientY;
        }
        if(clientX+offsetWidth>=browserWidth){
            left=clientX-offsetWidth;
        }else{
            left=clientX;
        }
    }
}

addloadEvent(oncontextmenu);
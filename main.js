var canvas= document.getElementById("myCanvas");
var mouse_event= "";
var color="green"
var width=2
ctx=canvas.getContext("2d");
var last_x,last_y,current_x,current_y;
canvas.addEventListener("mousedown",md);
function md(e){
color=document.getElementById("color_input").value;
width=document.getElementById("number_input").value;
    mouse_event="mousedown";
}
canvas.addEventListener("mouseup",mu);
function mu(e){
    mouse_event="mouseup"
}
canvas.addEventListener("mouseleave",ml);
function ml(e){
    mouse_event="mouseleave"
}
canvas.addEventListener("mousemove",mm);
function mm(e){
    current_x=e.clientX-canvas.offsetLeft;
    current_y=e.clientY-canvas.offsetTop;
    if(mouse_event == "mousedown"){
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(current_x,current_y)
        ctx.stroke();
    }
    last_x=current_x;
    last_y=current_y;
}
width= screen.width;
new_width= screen.width-100;
new_height= screen.height-300;

if(width < 992){
   document.getElementById("myCanvas").width=new_width
   document.getElementById("myCanvas").height=new_height
}

canvas.addEventListener("touchstart",ts);
function ts(e){
last_x=e.touches[0].clientX-canvas.offsetLeft;
last_y=e.touches[0].clientY-canvas.offsetTop;
color=document.getElementById("color_input").value;
width=document.getElementById("number_input").value;
    }

canvas.addEventListener("touchmove",tm);
function tm(e){
    current_x=e.touches[0].clientX-canvas.offsetLeft;
    current_y=e.touches[0].clientY-canvas.offsetTop;
        ctx.beginPath();
        ctx.strokeStyle=color;
        ctx.lineWidth=width;
        ctx.moveTo(last_x,last_y);
        ctx.lineTo(current_x,current_y)
        ctx.stroke();
    last_x=current_x;
    last_y=current_y;
}
function clearArea(){
    ctx.clearRect(0,0,ctx.canvas.width,ctx.canvas.height);
}


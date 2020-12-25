var canvas= document.getElementById("Mycanvas")

ctx=canvas.getContext("2d")
var colour="green"
var width=3
var mouse_event=""

canvas.addEventListener("mouseup",mu)
function mu(e){
    mouse_event="mouseup"
    console.log("mouse is up")
}

canvas.addEventListener("mouseleave",ml)
function ml(e){
    mouse_event="mouseleave"
    console.log("mouse left")
}

canvas.addEventListener("mousedown",md)
function md(e){
    mouse_event="mousedown"
    console.log("mouse is down")
    colour=document.getElementById("colour").value;
    lastX=e.clientX-canvas.offsetLeft
    lastY=e.clientY-canvas.offsetTop
}

canvas.addEventListener("mousemove",mm)
function mm(e){
    currentX=e.clientX-canvas.offsetLeft
    currentY=e.clientY-canvas.offsetTop
    if(mouse_event=="mousedown"){
        ctx.beginPath()
        ctx.strokeStyle=colour
        ctx.lineWidth=width
        ctx.moveTo(lastX,lastY)
        ctx.lineTo(currentX,currentY)
        ctx.stroke()
    }
    lastX=currentX
    lastY=currentY
}
var screen_width=screen.width
if(screen_width<992){
    document.getElementById("Mycanvas").width=screen_width-100
    document.getElementById("Mycanvas").height=screen.height-300
    document.body.style.overflow="hidden"
}




canvas.addEventListener("touchstart",ts)
function ts(e){
    
    console.log("touch has started")
    colour=document.getElementById("colour").value;
    lastX=e.touches[0].clientX-canvas.offsetLeft
    lastY=e.touches[0].clientY-canvas.offsetTop
}

canvas.addEventListener("touchmove",tm)
function tm(e){
    currentX=e.touches[0].clientX-canvas.offsetLeft
    currentY=e.touches[0].clientY-canvas.offsetTop
    
        ctx.beginPath()
        ctx.strokeStyle=colour
        ctx.lineWidth=width
        ctx.moveTo(lastX,lastY)
        ctx.lineTo(currentX,currentY)
        ctx.stroke()
    
    lastX=currentX
    lastY=currentY
}


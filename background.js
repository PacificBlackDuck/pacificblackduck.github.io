var c = document.getElementById("workofart");
var ctx = c.getContext("2d");

var duckframes = [];

var ducks = [];

var frame = 0;

function addDuck(x,y){
    ducks.push({x:x,y:y,frame:0});
}

function pageClick(e){
    addDuck(e.pageX-100, e.pageY-100);
}

window.addEventListener("click", pageClick);

for (var i = 1; i <= 60; i++) {
    if (i<10){
        path = 'duckframes/frame0000'+i+'.png';
    }
    else{
        path = 'duckframes/frame000'+i+'.png';
    }
    duckframes[i-1] = new Image();duckframes[i-1].src = path;
}

for (var i = 0; i < 10; i++){
    x = -192+(Math.random()*window.innerWidth+96);
    y = -192+(Math.random()*window.innerHeight+96);
    addDuck(x,y);
}

function resize(){
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    x = 0
    y = window.innerHeight
    ctx.lineCap = "round";
    ctx.lineWidth = 30;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}
window.addEventListener('resize', resize);
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
var freq = 140
var amp = 300
var x = -50
var y = window.innerHeight
var z = 0
ctx.lineCap = "round";
ctx.lineWidth = 30;
ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);

ctx.globalCompositeOperation = 'source-over'
ctx.fillStyle = "#FFFFFF";

function draw(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.globalCompositeOperation = 'destination-out';
    while (x<window.innerWidth+50){
    ctx.beginPath();
    ctx.moveTo(x, y);
    x = x + 30;
    y = -(Math.sin(x/freq+z)*amp) - x*window.innerHeight/(window.innerHeight*window.innerWidth/750) + window.innerHeight;
    ctx.lineTo(x,y);
    ctx.stroke();
    }
    x=-50
    y = window.innerHeight
    z = z + 0.1
    ctx.globalCompositeOperation = 'source-over';


    for (var i = 0; i < ducks.length; i++) {
        var duck = ducks[i]
        ctx.drawImage(duckframes[duck.frame],duck.x,duck.y)
        duck.frame += 1;
        if(duck.frame==60){
            duck.frame = 0;
        }
    }
    requestAnimationFrame(draw);
}

draw();
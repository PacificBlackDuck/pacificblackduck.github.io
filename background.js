var c = document.getElementById("workofart");
var ctx = c.getContext("2d");
function resize(){
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    x = 0
    y = window.innerHeight
    ctx.lineCap = "round";
    ctx.lineWidth = 30;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.globalCompositeOperation = 'destination-out';
}
window.addEventListener('resize', resize);
ctx.canvas.width  = window.innerWidth;
ctx.canvas.height = window.innerHeight;
var freq = 50
var amp = 150
var x = 0
var y = window.innerHeight
ctx.lineCap = "round";
ctx.lineWidth = 30;
ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
ctx.globalCompositeOperation = 'destination-out';
function draw(){
    ctx.beginPath();
    ctx.moveTo(x, y);
    x = x + 10
    y = -(Math.sin(x/freq)*amp) - x*window.innerHeight/(window.innerHeight*window.innerWidth/1000) + window.innerHeight
    ctx.lineTo(x,y);
    ctx.stroke();
}

var repeat = setInterval(draw, 10);
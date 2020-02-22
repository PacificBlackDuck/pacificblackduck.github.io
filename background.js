var c = document.getElementById("workofart");
var ctx = c.getContext("2d");

var starcounter = document.getElementById("starcounter");

var stars = []

function resize(){
    ctx.canvas.width  = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    x = 0
    y = window.innerHeight
    ctx.lineCap = "round";
    ctx.lineWidth = 30;
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
}
function pixel(x,y){
    ctx.fillRect(x, y, 1, 1)
}
function rand(){
    r = Math.floor(Math.random()*2)
    if (r == 1){return 1}
    else{return -1}
}
function randpos(xy){
    if (xy == 'x'){return Math.floor(Math.random()*window.innerWidth)}
    if (xy == 'y'){return Math.floor(Math.random()*window.innerHeight)}
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

window.addEventListener('click', function(event){
    stars.push([event.clientX, event.clientY, 1, 1]);
    stars.push([event.clientX, event.clientY, 1, -1]);
    stars.push([event.clientX, event.clientY, -1, 1]);
    stars.push([event.clientX, event.clientY, -1, -1]);
})

ctx.globalCompositeOperation = 'source-over'
ctx.fillStyle = "#FFFFFF";
for (i = 0; i < 100; i++) {
    stars.push([randpos('x'), randpos('y'), rand(), rand()])
}
stars.forEach(function(star) {
    pixel(star[0], star[1]);
});

function draw(){
    ctx.fillStyle = "#000000";
    ctx.fillRect(0, 0, window.innerWidth, window.innerHeight);
    ctx.globalCompositeOperation = 'destination-out';
    while (x<window.innerWidth+50){
    ctx.beginPath();
    ctx.moveTo(x, y);
    x = x + 10;
    y = -(Math.sin(x/freq+z)*amp) - x*window.innerHeight/(window.innerHeight*window.innerWidth/750) + window.innerHeight;
    ctx.lineTo(x,y);
    ctx.stroke();
    }
    x=-50
    y = window.innerHeight
    z = z + 0.1
    ctx.globalCompositeOperation = 'source-over'
    stars.forEach(function(star) {
        ctx.fillStyle = "#000000";
        pixel(star[0], star[1]);
        star[0] = star[0] + star[2]
        star[1] = star[1] + star[3]
        ctx.fillStyle = "#FFFFFF";
        pixel(star[0], star[1]);

        if (star[0] >= window.innerWidth){star[2] = star[2] * -1}
        if (star[0] <= 0){star[2] = star[2] * -1}
        if (star[1] >= window.innerHeight){star[3] = star[3] * -1}
        if (star[1] <= 0){star[3] = star[3] * -1}
    });
    requestAnimationFrame(draw);
}

requestAnimationFrame(draw);
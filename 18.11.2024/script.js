const canvas = document.querySelector("canvas");
const ctx = canvas.getContext("2d");
const angleToRadian = function(angle) {
    return Math.PI/180 * angle;
}

//koło
ctx.clearRect(0, 0, canvas.width, canvas.height);
ctx.arc(100, 100, 70, 0, angleToRadian(360));
ctx.fill();
//kwadrat
ctx.beginPath();
ctx.fillRect(200,50,100,100);
//trujkot
ctx.beginPath();
ctx.moveTo(200, 150);
ctx.lineTo(150, 250);
ctx.lineTo(250, 250);
ctx.closePath();
ctx.fill();

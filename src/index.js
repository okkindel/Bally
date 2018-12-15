var canvas, context, fps;
window.onload = function () {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    fps = 60;
    setInterval(function () {
        context.clearRect(0, 0, canvas.width, canvas.height);
        // functions
        update();

    }, 1000 / fps);
}

var Sx = 0, Sy = 0;

function update() {
    Sy += 2;
    Sx += 2;
    circle(Sx, Sy, 20, 'red')
}

function text(txt, fnt, x, y, c) {
    context.font = fnt;
    context.fillStyle = c;
    context.fillText(txt, x, y);
}

function rect(x, y, w, h, c) {
    context.fillStyle = c;
    context.fillRect(x, y, w, h);
}

function line(sx, sy, dx, dy, c) {
    context.moveTo(sx, sy);
    context.lineTo(dx, dy);
    context.strokeStyle = c;
    context.stroke();
}

function circle(x, y, r, c) {
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI, false);
    context.strokeStyle = c;
    context.stroke();
}
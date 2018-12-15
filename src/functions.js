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
    context.arc(x, y, r, 0, 2 * Math.PI, false);
    context.fillStyle = c;
    context.fill();
}
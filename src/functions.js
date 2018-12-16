function text(txt, fnt, x, y, a, c) {
    context.font = fnt;
    context.fillStyle = c;
    context.textAlign = a;
    context.fillText(txt, x, y);
}

function rect(x, y, w, h, c) {
    context.fillStyle = c;
    context.fillRect(x, y, w, h);
}

function line(sx, sy, dx, dy, c) {
    context.moveTo(sx, sy);
    context.lineTo(dx, dy);
    context.lineWidth = 5;
    context.strokeStyle = c;
    context.stroke();
}

function circle(x, y, r, c) {
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI, false);
    context.fillStyle = c;
    context.fill();
}

function getCollision(vecA, vecB) {
    const r = (vecA.r + vecB.r) * (vecA.r + vecB.r);
    const dist = (vecA.x - vecB.x) * (vecA.x - vecB.x) + (vecA.y - vecB.y) * (vecA.y - vecB.y);
    return dist < r;
}

function divide(vecA, vecB) {
    const r_min = Math.min(vecA.r, vecB.r)
    const dist = (vecA.x - vecB.x) * (vecA.x - vecB.x) + (vecA.y - vecB.y) * (vecA.y - vecB.y);
    return Math.sqrt(dist) < 2 * r_min;
}

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

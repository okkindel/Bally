var canvas, context;
var particle;
window.onload = function () {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    const fps = 60;
    particle = new Particle(canvas.width / 2, canvas.height / 2, 'red');

    setInterval(function () {

        draw();
        update();

    }, 1000 / fps);
}

function draw() {
    context.clearRect(0, 0, canvas.width, canvas.height);
    particle.show();
}

function update() {
    particle.update();
}
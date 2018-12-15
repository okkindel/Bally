var canvas, context;
var particles = [];

window.onload = function () {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');

    const fps = 60;

    setInterval(function () {

        clear();
        draw();
        update();

    }, 1000 / fps);
}

function clear() {
    context.clearRect(0, 0, canvas.width, canvas.height);
}

function draw() {
    particles.forEach(function (item) {
        item.show();
    });
}

function update() {
    particles.forEach(function (item) {
        item.update();
    });
}

document.addEventListener('mousedown', function () {
    const particle = new Particle(event.clientX, event.clientY, getRandomColor());
    particle.addForce(0, 0.25);
    particles.push(particle);
});
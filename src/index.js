var canvas, context;
var particles = [];
var gravity = 0.25;
var floor;

window.onload = function () {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    floor = 3 * canvas.height / 4;

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
    line(0, floor, canvas.width, floor, 'black');
}

function update() {
    particles.forEach(function (item) {
        item.update();
        bounce(item);
        checkCollision(item);
    });
}

document.addEventListener('mousedown', function () {
    const particle = new Particle(event.clientX, event.clientY);
    particle.addForceX(Math.random() - 0.5);
    particles.push(particle);
});
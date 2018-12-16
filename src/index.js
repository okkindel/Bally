var canvas, context;
var particles = [];
var gravity = 0.5;
var floor;
var checkColl = true;

window.onload = function () {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    context.canvas.width = window.innerWidth;
    context.canvas.height = window.innerHeight;

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
    rect(0, floor, canvas.width, canvas.height, 'black');
}

function draw() {
    particles.forEach(function (item) {
        item.show();
    });
}

function update() {
    particles.forEach(function (item) {
        item.update();
        bounce(item);
        if (checkColl)
            checkCollision(item);
    });
    text("Click on screen to place a ball", "2rem Arial", canvas.width / 2, canvas.height / 4, 'center', 'black');
    text("Press C to turn ball collision " + (checkColl == true ? "off" : "on") + ".", "1rem Arial", canvas.width - 20, 30, 'end', 'black');
    text("Press arrows to modify gravity, current: " + gravity + ".", "1rem Arial", canvas.width - 20, 50, 'end', 'black');
    text('"Some balls just want to fly away."', "1rem Arial", canvas.width - 20, canvas.height - 40, 'end', 'white');
    text("- Me", "1rem Arial", canvas.width - 20, canvas.height - 20, 'end', 'white');
}

document.addEventListener('mousedown', function () {
    const particle = new Particle(event.clientX, event.clientY);
    particle.addForceX(Math.random() - 0.5);
    particle.addForceY(Math.random() * (-10));
    particles.push(particle);
});

document.addEventListener('keydown', function () {
    if (event.keyCode == 67) {
        checkColl = !checkColl;
    }
    if (event.keyCode == 38 && gravity < 2) {
        gravity += 0.125;
    }
    if (event.keyCode == 40 && gravity > -2) {
        gravity -= 0.125;
    }
});
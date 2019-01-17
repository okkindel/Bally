var canvas, context;
var particles = [];
var gravity = 0.5;
var quantity = 200;
var floor;
var checkColl = false;

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
    text("Number of particles: " + particles.length, "1rem Arial", 20, 30, 'start', 'black');
    text("Press arrows to modify gravity, current: " + gravity + ".", "1rem Arial", canvas.width - 20, 50, 'end', 'black');
    text("Press arrows to modify spawn timeout, current: " + quantity + ".", "1rem Arial", canvas.width - 20, 70, 'end', 'black');
    text('"Some balls just want to fly away."', "1rem Arial", canvas.width - 20, canvas.height - 40, 'end', 'white');
    text("- Me", "1rem Arial", canvas.width - 20, canvas.height - 20, 'end', 'white');
}

document.addEventListener('mousedown', function () {
    mouse = true; callEvent(event.clientX, event.clientY);
});
document.addEventListener('mouseup', function () {
    mouse = false;
});

function callEvent(x, y) {
    if (mouse) {
        const particle = new Particle(x, y);
        particle.addForceX(Math.random() - 0.5);
        particle.addForceY(Math.random() * (-10));
        particles.push(particle);
        setTimeout("callEvent(" + x + "," + y + ")", quantity);
    } else return;
}

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
    if (event.keyCode == 37 && quantity > 0) {
        quantity -= 10;
    }
    if (event.keyCode == 39 && quantity < 400) {
        quantity += 10;
    }
});
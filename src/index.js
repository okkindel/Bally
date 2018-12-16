var canvas, context;
var particles = [];
var gravity = 0.25;

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
        if (particles.length > 1)
            particles.forEach(function (ball) {

                var a = item.x - ball.x;
                var b = item.y - ball.y;
                var c = Math.sqrt(a ^ 2 + b ^ 2);

                if (c < 10 && ball != item) {
                    
                    // let accx = (Math.abs(ball.accx) + Math.abs(item.accx)) / 2;
                    let accy = (Math.abs(ball.accy) + Math.abs(item.accy)) / 2;

                    dump = { vx: item.velx, vy: item.vely };
                    // item.velx = ball.velx;
                    item.vely = ball.vely;
                    // ball.velx = dump.vx;
                    ball.vely = dump.vy;

                    // ball.accx > 0 ? ball.addForceX(-accx) : ball.addForceX(accx);
                    // item.accx > 0 ? item.addForceX(-accx) : item.addForceX(accx);

                    ball.accy > 0 ? ball.addForceY(-0.25) : ball.addForceY(0.25);
                    item.accy > 0 ? item.addForceY(-0.25) : item.addForceY(0.25);

                }
            });
    });
    line(0, canvas.height / 2, canvas.width, canvas.height / 2, 'black');
}

function update() {
    particles.forEach(function (item) {
        item.update();
        bounce(item);
    });
}

document.addEventListener('mousedown', function () {
    const particle = new Particle(event.clientX, event.clientY, getRandomColor());
    particle.addForceX(0.0);
    particles.push(particle);
});
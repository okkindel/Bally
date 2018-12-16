function bounce(particle) {

    // Bounce on floor
    if (particle.y + particle.r >= floor && particle.vely > 0) {
        particle.addForceY(-particle.vely - particle.vely / 1.25);
    }

    // Dont drown in floor
    if (particle.y > floor - particle.r && particle.vely < 1) {
        particle.y = floor - particle.r;
    }

    // Bounce right
    if (particle.x + particle.r >= canvas.width) {
        particle.addVelX(-particle.velx);
        particle.addForceX(-0.25);
    }

    // Bounce left
    if (particle.x - particle.r <= 0 && particle.velx < 0) {
        particle.addVelX(-particle.velx);
        particle.addForceX(0.25);
    }

    // Get rid of left / right vector every update
    particle.velx = particle.velx * 0.90;
}

function checkCollision(particle) {
    particles.forEach(function (ball) {
        if (particle !== ball && particles.length > 1) {
            // if colided
            if (getCollision(particle, ball)) {

                let accx = (Math.abs(ball.accx) + Math.abs(particle.accx)) / 2;
                let accy = (Math.abs(ball.accy) + Math.abs(particle.accy)) / 2;

                swap(particle, ball);

                ball.accx > 0 ? ball.addForceX(-accx) : ball.addForceX(accx);
                particle.accx > 0 ? particle.addForceX(-accx) : particle.addForceX(accx);

                ball.accy > 0 ? ball.addForceY(-accy) : ball.addForceY(accy);
                particle.accy > 0 ? particle.addForceY(-accy) : particle.addForceY(accy);
            }
            if (divide(particle, ball)) {
                dump = particle.r;
                particle.x -= ball.r;
                ball.x += dump;
            }
        }
    });
}

// swap velocities
function swap(vecX, vecY) {
    dump = { vx: vecX.velx, vy: vecX.vely };
    vecX.velx = vecY.velx;
    vecX.vely = vecY.vely;
    vecY.velx = dump.vx;
    vecY.vely = dump.vy;
}
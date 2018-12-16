function bounce(particle) {

    if (particle.y + particle.w >= canvas.height / 2 && particle.vely > 0) {
        particle.addForceY(-particle.vely - particle.vely / 1.25);
    }
    
    if (particle.y > canvas.height / 2 - particle.w && particle.vely < 1) {
        particle.y = canvas.height / 2 - particle.w;
    }
    
    if (particle.x + particle.w >= canvas.width) {
        particle.addVelX(-particle.velx);
        particle.addForceX(-0.25);
    }
    
    if (particle.x - particle.w <= 0 && particle.velx < 0) {
        particle.addVelX(-particle.velx);
        particle.addForceX(0.25);
    }
    
    particle.velx = particle.velx * 0.90;
}
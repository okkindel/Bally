function Particle(x, y) {
    this.x = x; this.y = y; this.r = Math.random() * 50; 
    this.col = getRandomColor();
    this.velx = 0; this.vely = 0;
    this.accx = 0; this.accy = 0;

    this.restitution = 10;

    this.show = function () {
        circle(this.x, this.y, this.r, this.col);
    }

    this.update = function () {
        this.velx += this.accx;
        this.vely += this.accy;
        this.x += this.velx;
        this.y += this.vely;

        this.addForceY(gravity);
    }

    this.addForce = function (x, y) {
        this.accx = x;
        this.accy = y;
    }

    this.addVel = function (x, y) {
        this.velx = x;
        this.vely = y;
    }

    this.addForceX = function (x) {
        this.accx = x;
    }

    this.addForceY = function (y) {
        this.accy = y;
    }

    this.addVelX = function (x) {
        this.velx = x;
    }

    this.addVelY = function (y) {
        this.vely = y;
    }
}
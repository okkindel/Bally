function Particle(x, y, col) {
    this.x = x; this.y = y;
    this.w = 10; this.col = col;
    this.velx = -2; this.vely = -2;
    this.accx = 0.1; this.accy = 0;
    this.show = function () {
        circle(this.x, this.y, this.w, this.col);
    }

    this.update = function () {
        this.velx += this.accx;
        this.vely += this.accy;
        this.x += this.velx;
        this.y += this.vely;
    }
}
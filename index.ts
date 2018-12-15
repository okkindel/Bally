import * as functions from './functions';

var canvas, context;

window.onload = () => {
    canvas = document.getElementById('canvas');
    context = canvas.getContext('2d');
    const fps = 60;
    setInterval(() => {
        context.clearRect(0, 0, canvas.width, canvas.height);
        update();

    }, 1000 / fps);
}

var Sx = 0, Sy = 0;

function update() {
    Sy += 2;
    Sx += 2;
    functions.circle(Sx, Sy, 20, 'red')
}

export default context;
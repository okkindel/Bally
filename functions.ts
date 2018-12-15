import context from './index';

export function text(txt: string, fnt: string, x: number, y: number, c: string): void {
    context.font = fnt;
    context.fillStyle = c;
    context.fillText(txt, x, y);
}

export function rect(x: number, y: number, w: number, h: number, c: string): void {
    context.fillStyle = c;
    context.fillRect(x, y, w, h);
}

export function line(sx: number, sy: number, dx: number, dy: number, c: string): void {
    context.moveTo(sx, sy);
    context.lineTo(dx, dy);
    context.strokeStyle = c;
    context.stroke();
}

export function circle(x: number, y: number, r: number, c: string): void {
    context.beginPath();
    context.arc(x, y, r, 0, 2 * Math.PI, false);
    context.strokeStyle = c;
    context.stroke();
}
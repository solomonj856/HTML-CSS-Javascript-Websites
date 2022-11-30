const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
const ball2 = {
    x: 25,
    y: 25
  };
const velocity2 = 10;
const startingAngle2 = 70;
const rad2 = 20;
let moveX2 = Math.cos(Math.PI / 180 * startingAngle2) * velocity2;
let moveY2 = Math.sin(Math.PI / 180 * startingAngle2) * velocity2;
const drawMe2 = () => {
 ctx.clearRect(0, 0, 500, 500);
 if (ball2.x > canvas.width - rad2 || ball2.x < rad2) moveX2 = -moveX2;
 if (ball2.y > canvas.height - rad2 || ball2.y < rad2) moveY2 = -moveY2;
 ball2.x += moveX2;
 ball2.y += moveY2;
 ctx.beginPath();
 ctx.fillStyle = 'red';
 ctx.arc(ball2.x, ball2.y, rad2, 0, Math.PI * 2);
 ctx.fill();
 ctx.closePath();
}


setInterval(drawMe2, 10);

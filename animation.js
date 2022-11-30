const canvas = document.getElementById('mycanvas');
const ctx = canvas.getContext('2d');
const ball = {
    x: 25,
    y: 25
  };
const velocity = 5;
const startingAngle = 70;
const rad = 20;
let moveX = Math.cos(Math.PI / 180 * startingAngle) * velocity;
let moveY = Math.sin(Math.PI / 180 * startingAngle) * velocity;


const ball2 = {
    x: 25,
    y: 25
  };
const velocity2 = 10;
const startingAngle2 = 60;
const rad2 = 25;
let moveX2 = Math.cos(Math.PI / 180 * startingAngle2) * velocity2;
let moveY2 = Math.sin(Math.PI / 180 * startingAngle2) * velocity2;

const ball3 = {
    x: 25,
    y: 25
  };
const velocity3 = 15;
const startingAngle3 = 30;
const rad3 = 15;
let moveX3 = Math.cos(Math.PI / 180 * startingAngle3) * velocity3;
let moveY3 = Math.sin(Math.PI / 180 * startingAngle3) * velocity3;



const drawMe = () => {
 ctx.clearRect(0, 0, 500, 500);
 if (ball.x > canvas.width - rad || ball.x < rad) moveX = -moveX;
 if (ball.y > canvas.height - rad || ball.y < rad) moveY = -moveY;
 ball.x += moveX;
 ball.y += moveY;
 ctx.beginPath();
 ctx.fillStyle = 'blue';
 ctx.arc(ball.x, ball.y, rad, 0, Math.PI * 2);
 ctx.fill();
 ctx.closePath();
    
    
 if (ball2.x > canvas.width - rad2 || ball2.x < rad2) moveX2 = -moveX2;
 if (ball2.y > canvas.height - rad2 || ball2.y < rad2) moveY2 = -moveY2;
 ball2.x += moveX2;
 ball2.y += moveY2;
 ctx.beginPath();
 ctx.fillStyle = 'orange';
 ctx.arc(ball2.x, ball2.y, rad2, 0, Math.PI * 2);
 ctx.fill();
 ctx.closePath();

    
 if (ball3.x > canvas.width - rad3 || ball3.x < rad3) moveX3 = -moveX3;
 if (ball3.y > canvas.height - rad3 || ball3.y < rad3) moveY3 = -moveY3;
 ball3.x += moveX3;
 ball3.y += moveY3;
 ctx.beginPath();
 ctx.fillStyle = 'green';
 ctx.arc(ball3.x, ball3.y, rad3, 0, Math.PI * 2);
 ctx.fill();
 ctx.closePath();
    
}


setInterval(drawMe, 10);




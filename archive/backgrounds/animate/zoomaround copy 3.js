var mainBall = document.getElementById("ball1");
var jBall = document.getElementById("ball2");

// let intervalID = setInterval(colorChange, 2000, mainBall);

let counter = 0;
var x = 0;
var y = 0;
let direction = 90;
var walkLength = 300;
var speed = 5;

moveBall(mainBall, 115, 200, 10, 0, 0, 0);

// console.log(Math.sin(toRadians(90)));

function toDegrees(angle) {
  return angle * (180 / Math.PI);
}

function toRadians(angle) {
  return angle * (Math.PI / 180);
}

function moveBall(target, direction, distance, speed, x, y, iter) {
  var counter = 0;

  let intervalID = setInterval(ballMotion, speed, direction, x, y);

  console.log(iter);

  function reBounce(check) {
    if (check < 10) {
      ballMotion();
    }
  }

  function ballMotion() {
    var xpush = Math.sin(toRadians(direction)) / 10;
    var ypush = Math.sin(toRadians(direction)) / 10;
    x += xpush;
    y += ypush;
    target.style.top = x + "%";
    target.style.left = y + "%";

    counter++;
    if (counter == distance) {
      iter++;
      direction = direction + 30;
      console.log(iter);
      reBounce(iter);
      clearInterval(intervalID);
    }
  }

  //   if (iter < 10) {
  //     console.log("ping");
  //     //   moveBall(target, direction + 30, distance, speed, x, y, iter);
  //   }
}

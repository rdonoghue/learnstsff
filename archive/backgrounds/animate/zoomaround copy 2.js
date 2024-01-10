var mainBall = document.getElementById("ball1");
var jBall = document.getElementById("ball2");

// let intervalID = setInterval(colorChange, 2000, mainBall);

let counter = 0;
var x = 0;
var y = 0;
walkLength = 300;

function kickBall() {
  moveBall(mainBall, x, y, 4, walkLength, 5);
}

function moveBall(
  target = mainBall,
  startx = 0,
  starty = 0,
  direction = 4,
  distance = 300,
  speed = 5
) {
  let x = startx;
  let y = starty;
  var lengthCounter = 0;
  var pushx;
  var pushy;

  if (direction == 1) {
    pushx = 0;
    pushy = -0.2;
  } else if (direction == 2) {
    pushx = 0.1;
    pushy = -0.1;
  } else if (direction == 3) {
    pushx = 0.2;
    pushy = 0;
  } else if (direction == 4) {
    pushx = 0.1;
    pushy = 0.1;
  } else if (direction == 5) {
    pushx = 0;
    pushy = 0.2;
  } else if (direction == 6) {
    pushx = -0.1;
    pushy = 0.1;
  } else if (direction == 7) {
    pushx = -0.2;
    pushy = 0;
  } else if (direction == 8) {
    pushx = -0.1;
    pushy = -0.1;
  }

  let intid = setInterval(pushBall, speed, target);
  function pushBall() {
    console.log(lengthCounter);
    lengthCounter++;

    x = x + pushx;
    y = y + pushy;

    target.style.left = x + "%";
    target.style.top = y + "%";

    lengthCounter++;
    if (lengthCounter == distance) {
      clearInterval(intid);
      console.log(target.style);
      moveBall();
    }
  }

  function pickDirection() {
    var turnDie = Math.floor(Math.random() * 10) + 1;
    console.log("Rolled: " + turnDie);
    if (1 <= turnDie <= 4) {
      newDir = newDir;
    } else if (turndie == 5 || turndie == 6) {
      newDir++ % 10;
    } else if (turndie == 7 || turndie == 8) {
      newDir-- % 10;
    } else if (turndie == 9) {
      newDir = (newDir + 2) % 10;
    } else if (turndie == 10) {
      newDir = (newDir - 2) % 10;
      direction = newDir;
    }
  }
}

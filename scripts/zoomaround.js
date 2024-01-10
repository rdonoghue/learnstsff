var mainBall = document.getElementById("ball1");

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

var x = 0;
var y = 0;

// document.addEventListener("keydown", function (e) {
//   if (e.keyCode == 38) {
//     alert("Up!");
//     your_event.preventDefault();
//   }
// });

document.addEventListener(
  "keydown",
  (event) => {
    const keyName = event.key;

    if (keyName === "Control") {
      // do not alert when only Control key is pressed.
      return;
    }

    if (event.ctrlKey) {
      // Even though event.key is not 'Control' (e.g., 'a' is pressed),
      // event.ctrlKey may be true if Ctrl key is pressed at the same time.
      alert(`Combination of ctrlKey + ${keyName}`);
    } else {
      alert(`Key pressed ${keyName}`);
    }
  },
  false
);
Z;

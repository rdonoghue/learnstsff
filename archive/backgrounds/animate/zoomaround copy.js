var mainBall = document.getElementById("ball1");
var jBall = document.getElementById("ball2");

// let intervalID = setInterval(colorChange, 2000, mainBall);
moveBall(jBall);

let counter = 0;
var x = 0;
var y = 0;
walkLength = 300;
let intid = setInterval(moveBall, 5, mainBall, 0, 0, 4, 300, 5);

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
    var lengthCounter = 0;
    target.style.left = pushx + "%";
    target.style.top = pushy + "%";
    lengthCounter++;
    if (lengthCounter == distance) {
      clearInterval(intid);
    }
  }
}

function colorChange(myObject) {
  console.log(myObject.className);
  myObject.className =
    myObject.className === "ball navyball" ? "ball redball" : "ball navyball";
}

function drunkBall(myObject, direction = "4") {
  //   var counter = 0;
  //   var x = 0;
  //   var y = 0;
  //   walkLength = 300;
  let intid = setInterval(walkBall, 5, myObject);
  function walkBall() {
    console.log(counter);
    console.log(direction);
    counter++;
    if (counter % 300 == 0) {
      console.log("ding");
      direction = 7;
      direction = turnBall(direction);
    }
    if (direction == 4) {
      x = x + 0.1;
      y = y + 0.1;
      myObject.style.left = x + "%";
      myObject.style.top = y + "%";
    } else if (direction == 3) {
      //   console.log("Going E");
      x++;
      myObject.style.left = x + "%";
    } else if (direction == 2) {
      x = x + 0.1;
      y = y - 0.1;
      myObject.style.left = x + "%";
      myObject.style.top = y + "%";
    } else if (direction == 1) {
      x = x;
      y = y - 0.2;
      myObject.style.left = x + "%";
      myObject.style.top = y + "%";
    } else if (direction == 0) {
      x = x - 0.1;
      y = y + 0.1;
      myObject.style.left = x + "%";
      myObject.style.top = y + "%";
    } else if (direction == 7) {
      x = x - 0.2;
      y = y;
      myObject.style.left = x + "%";
      myObject.style.top = y + "%";
    } else if (direction == 6) {
      x = x + 0.1;
      y = y - 0.1;
      myObject.style.left = x + "%";
      myObject.style.top = y + "%";
    } else if (direction == 5) {
      x = x - 0.1;
      y = y - 0.1;
      myObject.style.left = x + "%";
      myObject.style.top = y + "%";
    } else {
      console.log("No Direction!");
    }

    if (x >= 98 || y >= 96.25 || (y <= 0 && counter > 3)) {
      clearInterval(intid);
    }

    function turnBall(direction) {}
    console.log("RECEIVE: " + direction);
    var newDir = direction;

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
    }
    console.log("RETURN: " + newDir);

    return newDir;
  }
}

function drunkBall2(myObject, direction = "4") {
  var counter = 0;
  var x = 0;
  var y = 0;
  let intid = setInterval(walkBall, 5, myObject);

  function walkBall() {
    console.log(counter);
    console.log(direction);
    // N1 NE:2  E:3, SE:4 S:5, SW:6: w:7 NW:8

    if (counter % 300 == 0) {
      direction = "3";
      //   direction = turnball();
      console.log("dir: " + direction);
      //   direction++;
    }

    if (x >= 1170 || y >= 770 || (y <= 0 && counter > 3)) {
      clearInterval(intid);
    }

    counter++;
    if (direction == 4) {
      x = x + 0.5;
      y = y + 0.5;
      myObject.style.left = x + "px";
      myObject.style.top = y + "px";
    } else if (direction == 3) {
      //   console.log("Going E");
      x++;
      myObject.style.left = x + "px";
    } else if (direction == 2) {
      x = x + 0.5;
      y = y - 0.5;
      myObject.style.left = x + "px";
      myObject.style.top = y + "px";
    } else if (direction == 1) {
      x = x;
      y = y - 1;
      myObject.style.left = x + "px";
      myObject.style.top = y + "px";
    } else if (direction == 0) {
      x = x - 0.5;
      y = y + 0.5;
      myObject.style.left = x + "px";
      myObject.style.top = y + "px";
    } else if (direction == 7) {
      x = x - 1;
      y = y;
      myObject.style.left = x + "px";
      myObject.style.top = y + "px";
    } else if (direction == 6) {
      x = x + 0.5;
      y = y - 0.5;
      myObject.style.left = x + "px";
      myObject.style.top = y + "px";
    } else if (direction == 5) {
      x = x - 0.5;
      y = y - 0.5;
      myObject.style.left = x + "px";
      myObject.style.top = y + "px";
    }
  }
}

//     function turnball() {}
//     var turnDie = Math.floor(Math.random() * 10) + 1;
//     if (1 <= turnDie <= 4) {
//       direction = direction;
//     } else if (turndie == 5 || turndie == 6) {
//       direction++;
//     } else if (turndie == 7 || turndie == 8) {
//       direction--;
//     } else if (turndie == 9) {
//       direction = direction + 2;
//     } else if (turndie == 10) {
//       direction = direction - 2;
//     }

//     direction = direction % 10;
//     return direction;
//   }

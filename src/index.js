function start() {
  let canvas = document.getElementById("myCanvas");
  canvas.style.border = "2px solid black";
  // canvas.style.backgroundColor = "#2a3342";

  let ctx = canvas.getContext("2d");

  let score = 0;
  let virusimg = new Image();
  virusimg.src = "./img/burgercopy.png";
  let background = new Image();
  background .src = "./img/black.png";

  //DRAWING
  function drawbackground() {
    ctx.drawImage(background, 0, 0);
    // ctx.beginPath();
    // ctx.fillStyle = "black";
    // ctx.fillRect(0, 0, 598, 448);
  }

  function drawHoles() {
    ctx.beginPath(); //top left
    ctx.ellipse(150, 160, 50, 60, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#6d2827";
    ctx.fill();

    ctx.beginPath(); //top left middle
    ctx.ellipse(300, 160, 50, 60, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#6d2827";
    ctx.fill();

    ctx.beginPath(); //top right
    ctx.ellipse(450, 160, 50, 60, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#6d2827";
    ctx.fill();

    ctx.beginPath(); //bottom left
    ctx.ellipse(150, 320, 50, 60, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#6d2827";
    ctx.fill();

    ctx.beginPath(); //middle
    ctx.ellipse(300, 320, 50, 60, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#6d2827";
    ctx.fill();

    ctx.beginPath(); //bottom rigt
    ctx.ellipse(450, 320, 50, 60, Math.PI / 2, 0, 2 * Math.PI);
    ctx.fillStyle = "#6d2827";
    ctx.fill();
  }
  function drawSpace() {
    ctx.beginPath();
    ctx.fillStyle = "#6d2827";
    ctx.fillRect(120, 120, 66, 80);
  }
  function drawSpace2() {
    ctx.beginPath();
    ctx.fillStyle = "#6d2827";
    ctx.fillRect(270, 120, 66, 80);
  }
  function drawSpace3() {
    ctx.beginPath();
    ctx.fillStyle = "#6d2827";
    ctx.fillRect(420, 120, 66, 80);
  }
  function drawSpace4() {
    ctx.beginPath();
    ctx.fillStyle = "#6d2827";
    ctx.fillRect(120, 280, 66, 80);
  }
  function drawSpace5() {
    ctx.beginPath();
    ctx.fillStyle = "#6d2827";
    ctx.fillRect(270, 280, 66, 80);
  }
  function drawSpace6() {
    ctx.beginPath();
    ctx.fillStyle = "#6d2827";
    ctx.fillRect(420, 280, 66, 80);
  }
//bad viruses
  function drawVirus1() {
    ctx.drawImage(virusimg, 120, 120);
  }
  function drawVirus2() {
    ctx.drawImage(virusimg, 270, 120);
  }
  function drawVirus3() {
    ctx.drawImage(virusimg, 420, 120);
  }
  function drawVirus4() {
    ctx.drawImage(virusimg, 120, 280);
  }
  function drawVirus5() {
    ctx.drawImage(virusimg, 270, 280);
  }
  function drawVirus6() {
    ctx.drawImage(virusimg, 420, 280);
  }

//function to draw every not changing object
  function draw() {
    drawbackground();
    drawHoles();
  }

  //EVENT CLICKER
  //creating objects for viruses
  let virus1 = false;
  let virus2 = false;
  let virus3 = false;
  let virus4 = false;
  let virus5 = false;
  let virus6 = false;

  //checking if you click in the right place and if yes add a space to hide the virus
  document.addEventListener(
    "click",
    (event) => {
      if (
        event.clientY > 133 &&
        event.clientY < 207 &&
        event.clientX > 130 &&
        event.clientX < 188
      ) {
        drawSpace();
        score++;
        virus1 = false;
      }
      if (
        event.clientY > 133 &&
        event.clientY < 207 &&
        event.clientX > 282 &&
        event.clientX < 339
      ) {
        drawSpace2();
        score++;
        virus2 = false;
      }
      if (
        event.clientY > 133 &&
        event.clientY < 207 &&
        event.clientX > 432 &&
        event.clientX < 489
      ) {
        drawSpace3();
        score++;
        virus3 = false;
      }
      if (
        event.clientY > 281 &&
        event.clientY < 358 &&
        event.clientX > 130 &&
        event.clientX < 188
      ) {
        drawSpace4();
        score++;
        virus4 = false;
      }
      if (
        event.clientY > 281 &&
        event.clientY < 358 &&
        event.clientX > 282 &&
        event.clientX < 339
      ) {
        drawSpace5();
        score++;
        virus5 = false;
      }
      if (
        event.clientY > 281 &&
        event.clientY < 358 &&
        event.clientX > 432 &&
        event.clientX < 489
      ) {
        drawSpace6();
        score++;
        virus6 = false;
      }
    },
    50
  );

  //INTERVALS
  //intervals to show viruses
  let intervalId1 = 0;
  let intervalId2 = 0;
  let intervalId3 = 0;
  let intervalId4 = 0;
  let intervalId5 = 0;
  let intervalId6 = 0;
  let n1 = 3000;
  let n2 = 4000;
  let n3 = 7000;
  let n4 = 5000;
  let n5 = 13000;
  let n6 = 9000;

  function interval() {
    //background
    let intervalId0 = setTimeout(function () {
      requestAnimationFrame(draw);
      clearTimeout(intervalId0);
    }, 50);
    //top left
    intervalId1 = setInterval(function () {
      requestAnimationFrame(drawVirus1);
      virus1 = true;
    }, n1-150);
    //top middle
    intervalId2 = setInterval(function () {
      requestAnimationFrame(drawVirus2);
      virus2 = true;
    }, n2-250);
    //top right
    intervalId3 = setInterval(function () {
      requestAnimationFrame(drawVirus3);
      virus3 = true;
    }, n3-250);
    //bottom right
    intervalId4 = setInterval(function () {
      requestAnimationFrame(drawVirus4);
      virus4 = true;
    }, n4-250);
    //bottom middle
    intervalId5 = setInterval(function () {
      requestAnimationFrame(drawVirus5);
      virus5 = true;
    }, n5-1000);
    //bottom left
    intervalId6 = setInterval(function () {
      requestAnimationFrame(drawVirus6);
      virus6 = true;
    }, n6-300);
  }
  interval();

  let music = new Audio ("./audio/GameMusic.mp3");
  music.volume = 0.2;
  music.play();

//END
//to end the game after 1min
  let ending = setTimeout(function () {
    clearInterval(intervalId6);
    clearInterval(intervalId5);
    clearInterval(intervalId4);
    clearInterval(intervalId3);
    clearInterval(intervalId2);
    clearInterval(intervalId1);
    clearInterval(intervalId7);
    music.pause();
    music.currentTime = 0;

    //SETTING GAME-OVER SCREEN
    function createGameOverScreen() {
      gameScreen.remove();

      gameOverScreen = buildDom(`
    <main>
        <div class="end">
            <div>
                <h1>Your score is ${score}</h1>
            </div>
            <div>
            <button id="restart-btn" class="button" >RESTART</button>
            </div>
        </div>
    </main>`);

      document.body.appendChild(gameOverScreen);
      var button = gameOverScreen.querySelector("button");
      button.addEventListener("click", () => {
        location.reload();
      });
    }
    function removeGameScreen() {
      gameScreen.remove();
    }
    removeGameScreen();
    createGameOverScreen();
  }, 100000);


  //to end the game if all holes are full or lives = 0
  function over() {
    music.pause();
    music.currentTime = 0;
    //SETTING GAME-OVER SCREEN
    function createGameOverScreen() {
      gameScreen.remove();

      gameOverScreen = buildDom(`
        <main>
        <div class="end">
            <div>
                <h1>You lost!!!</h1>
            </div>
            <div>
            <button id="restart-btn" class="button" >RESTART</button>
            </div>
            <div id="score">
            <h2>Your score is ${score}</h2>
            </div>
        </div>
    </main>`);

      document.body.appendChild(gameOverScreen);
      var button = gameOverScreen.querySelector("button");
      button.addEventListener("click", () => {
        location.reload();
      });
    }
    function removeGameScreen() {
      gameScreen.remove();
    }
    removeGameScreen();
    createGameOverScreen();
  }

  let intervalId7 = setInterval(function () {
    if (
      virus1 == true &&
      virus2 == true &&
      virus3 == true &&
      virus4 == true &&
      virus5 == true &&
      virus6 == true
    ) {
      clearInterval(intervalId7);
      clearInterval(intervalId6);
      clearInterval(intervalId5);
      clearInterval(intervalId4);
      clearInterval(intervalId3);
      clearInterval(intervalId2);
      clearInterval(intervalId1);
      clearTimeout(ending);
      over();
    }
  }, 1000);
}
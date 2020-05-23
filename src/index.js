function start() {
  let canvas = document.getElementById("myCanvas");
  canvas.style.border = "2px solid black";
  // canvas.style.backgroundColor = "#2a3342";

  let ctx = canvas.getContext("2d");

  let score = 0;
  let lives = 3;
  let background = new Image();
  background.src = "./img/without.png";
  let virusimg = new Image();
  virusimg.src = "./img/red.png";
  let greenVirus = new Image();
  greenVirus.src = "./img/greenV.png"

  //DRAWING
  function drawbackground() {
    ctx.drawImage(background, 0, 0);
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
  
  //good viruses(green)
  function drawgreenV1() {
    ctx.drawImage(greenVirus, 270, 280);
  }
  function drawgreenV2() {
    ctx.drawImage(greenVirus, 420, 120);
  }
  function drawgreenV3() {
    ctx.drawImage(greenVirus, 420, 280);
  }
  function drawgreenV4() {
    ctx.drawImage(greenVirus, 120, 280);
  }
  function drawgreenV5() {
    ctx.drawImage(greenVirus, 120, 120);
  }
  function drawgreenV6() {
    ctx.drawImage(greenVirus, 270, 120);
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
  let greenV1 = false;
  let greenV2 = false;
  let greenV3 = false;
  let greenV4 = false;
  let greenV5 = false;
  let greenV6 = false;

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
        if (greenV5){
          lives --;
          greenV5 = false;
          score--;
        }
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
        if (greenV6){
          lives --;
          greenV6 = false;
          score--;
        }
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
        if (greenV2){
          lives --;
          greenV2 = false;
          score--;
        }
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
        if (greenV4){
          lives --;
          greenV4 = false;
          score--;
        }
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
        if (greenV1){
          lives --;
          greenV1 = false;
          score--;
        }
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
        if (greenV3){
          lives --;
          greenV3 = false;
          score--;
        }
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
      greenV5 = false;
    }, 3000);
    //top middle
    intervalId2 = setInterval(function () {
      requestAnimationFrame(drawVirus2);
      virus2 = true;
      greenV6 = false;
    }, 4000);
    //top right
    intervalId3 = setInterval(function () {
      requestAnimationFrame(drawVirus3);
      virus3 = true;
      greenV2 = false;
    }, 7000);
    //bottom right
    intervalId4 = setInterval(function () {
      requestAnimationFrame(drawVirus4);
      virus4 = true;
      greenV4 = false;
    }, 5000);
    //bottom middle
    intervalId5 = setInterval(function () {
      requestAnimationFrame(drawVirus5);
      virus5 = true;
      greenV1 = false;
    }, 13000);
    //bottom left
    intervalId6 = setInterval(function () {
      requestAnimationFrame(drawVirus6);
      virus6 = true;
      greenV3 = false;
    }, 9000);

    //good viruses
    //same spot as virus5 every 13000
    let greenVirus1 = setTimeout(function () {
      requestAnimationFrame(drawgreenV1);
      clearTimeout(greenVirus1);
      greenV1 = true;
    }, 61000);
    //same spot as virus3 every 7000
    let greenVirus2 = setTimeout(function () {
      requestAnimationFrame(drawgreenV2);
      clearTimeout(greenVirus2);
      greenV2 = true;
    }, 45000);
    //same spot as virus6 every 9000
    let greenVirus3 = setTimeout(function () {
      requestAnimationFrame(drawgreenV3);
      clearTimeout(greenVirus3);
      greenV3 = true;
    }, 23000);
    //same spot as virus4 every 5000
    let greenVirus4 = setTimeout(function () {
      requestAnimationFrame(drawgreenV4);
      clearTimeout(greenVirus4);
      greenV4 = true;
    }, 82000);
    //same spot as virus4 every 3000
    let greenVirus5 = setTimeout(function () {
    requestAnimationFrame(drawgreenV5);
    clearTimeout(greenVirus5);
    greenV5 = true;
    }, 73000);
    //same spot as virus4 every 4000
    let greenVirus6 = setTimeout(function () {
    requestAnimationFrame(drawgreenV6);
    clearTimeout(greenVirus6);
    greenV6 = true;
    }, 94000);
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
        <div class="container">
            <div>
                <h1>You won!!!</h1>
            </div>
            <div id="score">
            <h2>Your score is ${score}</h2>
            </div>
            <div id="lives">
            <h2>${lives} lives left</h2>
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
        <div class="container">
            <div>
                <h1>You died from virus!!!</h1>
            </div>
            <div id="score">
              <h2>Your score is ${score}</h2></h2>
            </div>
            <div id="lives">
            <h2>0 lives left</h2>
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
    if (lives == 0)
    {
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
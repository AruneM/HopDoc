// to modify the DOM depending on the screen
function buildDom(htmlString) {
    var div = document.createElement("div");
    div.innerHTML = htmlString;
    return div.children[0];
  }
  
  // main game function for page load
  function main() {
    var splashScreen;
  
    // SETTING GAME SPLASH SCREEN
    function createSplashScreen() {
      splashScreen = buildDom(`
        <main>
          <div class="container">
            <div id="title-box">
              <h1>Burger Smack</h1>
            </div>
            <div class="input-container">
              <button id="start-btn" class ="button">START</button>
            </div>
          </div>
          <div id="instructions">
          <h2>Collect burgers(by clicking on them), before all squares fill up.</h2>
          </div>
          <div class="icon">Burger Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" title="Flaticon">www.flaticon.com</a></div>
        </main>`);
  
      document.body.appendChild(splashScreen);
      var startButton = splashScreen.querySelector("#start-btn");
      startButton.addEventListener("click", function() {
        startGame();
      });
    }
    function removeSplashScreen() {
      splashScreen.remove();
    }
  
    // SETTING GAME SCREEN
    function createGameScreen() {
      var gameScreen = buildDom(`
      <main class="game game-container">
          <div class="canvas-container">
            <canvas id="myCanvas" width="598" height="448"></canvas>
          </div>
      </main>
      `);
  
      document.body.appendChild(gameScreen);
      return gameScreen;
    }
    function startGame() {
      removeSplashScreen();

      gameScreen = createGameScreen();
      start();
    }
    createSplashScreen();
  }
  window.addEventListener("load", main);
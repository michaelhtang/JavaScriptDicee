var randomNumber1 = Math.random()
var randomNumber2 = Math.random()

function randomNumber() {
    randomNumber1 = Math.floor(randomNumber1 * 6) + 1;
    randomNumber2 = Math.floor(randomNumber2 * 6) + 1;
      document.getElementsByClassName("img1")[0].setAttribute("src", 'images/dice'+randomNumber1+'.png');
      document.getElementsByClassName("img2")[0].setAttribute("src", 'images/dice'+randomNumber2+'.png');
}

function compareNumbers() {

  if (randomNumber1 === randomNumber2) {
    document.querySelector("h1").textContent = "Draw";
  }
  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").textContent = "🚩Player 1 Wins";
  }
  if (randomNumber1 < randomNumber2) {
    document.querySelector("h1").textContent = "Player 2 Wins🚩";
  }
}

randomNumber()
compareNumbers()

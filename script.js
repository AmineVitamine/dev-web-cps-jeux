var clickCount = 0;
var clickButton = document.getElementById("click-button");
var clickCountDisplay = document.getElementById("click-count");
var countdownDisplay = document.getElementById("countdown");
var countdown = 30;
var testInProgress = false;

function startTest() {
  if (!testInProgress) {
    clickCount = 0;
    countdown = 30;
    clickButton.disabled = false;
    clickButton.innerHTML = "Cliquez ici";
    clickCountDisplay.innerHTML = "0";
    countdownDisplay.innerHTML = countdown;
    testInProgress = true;

    clickButton.removeEventListener("click", startTest);
    clickButton.addEventListener("click", countClicks);

    var countdownInterval = setInterval(function() {
      countdown--;
      countdownDisplay.innerHTML = countdown;
      if (countdown <= 0) {
        clearInterval(countdownInterval);
        clickButton.disabled = true;
        clickButton.innerHTML = "Temps écoulé - Vous avez cliqué " + clickCount + " fois. Cliquez pour recommencer.";
        testInProgress = false;
        clickButton.removeEventListener("click", countClicks);
        clickButton.addEventListener("click", startTest);
      }
    }, 1000);
  }
}

function countClicks() {
  clickCount++;
  clickCountDisplay.innerHTML = clickCount;
}

clickButton.addEventListener("click", startTest);
const topLine = document.querySelector(".one");
const rightLine = document.querySelector(".two");
const bottomLine = document.querySelector(".three");
const leftLine = document.querySelector(".four");

const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");

// iteration declaration

let iteration = 0;

function getRandomColor() {
  var letters = "0123456789ABCDEF";
  var color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function addRandomColorToLines() {
  iteration += 1;
  if (iteration % 2 === 0) {
    iteration = 0;
    topLine.style.backgroundColor = getRandomColor();
    rightLine.style.backgroundColor = getRandomColor();
    bottomLine.style.backgroundColor = getRandomColor();
    leftLine.style.backgroundColor = getRandomColor();
  }
}

function startAnimation() {
  topLine.classList.add("leftToRight");
  rightLine.classList.add("topToBottom");
  bottomLine.classList.add("rightToLeft");
  leftLine.classList.add("bottomToTop");

  topLine.addEventListener("animationiteration", addRandomColorToLines);
}

function stopAnimation() {
  topLine.classList.remove("leftToRight");
  rightLine.classList.remove("topToBottom");
  bottomLine.classList.remove("rightToLeft");
  leftLine.classList.remove("bottomToTop");

  topLine.removeEventListener("animationiteration", addRandomColorToLines);
}

startBtn.addEventListener("click", startAnimation);

stopBtn.addEventListener("click", stopAnimation);

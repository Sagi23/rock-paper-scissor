const images = document.querySelectorAll(".arsenal");
const middle = document.querySelector(".middle");
const show = document.querySelector(".show");
const change = document.querySelector(".change");
const userScoreOne = document.querySelector(".user-score");
const computerScoreOne = document.querySelector(".computer-score");
const winner = document.querySelector(".winner");
const label = document.querySelector(".label");
const playAgainBtn = document.querySelector(".btn-two");
const numsVal = document.querySelectorAll(".select");
let draw = document.createElement("h1");
let userImag = document.createElement("img");
let compImg = document.createElement("img");
let userScoreTwo = 0;
let computerScoreTwo = 0;
let bestOut;
let newImages = Array.from(images);

function win(num = 3) {
  if (userScoreTwo == num) {
    show.style.display = "block";
    winner.textContent = "You Win !";
  } else if (computerScoreTwo == num) {
    show.style.display = "block";
    winner.textContent = "You Lose !";
  }
}

function check(user, computer) {
  if (user === computer) {
    draw.textContent = "Its a Draw !";
  } else if (
    (user == newImages[0].src && computer == newImages[2].src) ||
    (user == newImages[1].src && computer == newImages[0].src) ||
    (user == newImages[2].src && computer == newImages[1].src)
  ) {
    draw.textContent = "You Win !";
    userScoreTwo += 1;
    userScoreOne.textContent = userScoreTwo;
  } else if (
    (computer == newImages[0].src && user == newImages[2].src) ||
    (computer == newImages[1].src && user == newImages[0].src) ||
    (computer == newImages[2].src && user == newImages[1].src)
  ) {
    draw.textContent = "You Lose !";
    computerScoreTwo += 1;
    computerScoreOne.textContent = computerScoreTwo;
  }
  win(bestOut);
  change.append(draw);
}

images.forEach((image) => {
  image.addEventListener("click", function () {
    userImag.src = image.src;
    middle.append(userImag);
    let rand = Math.floor(Math.random() * 3) + 1;
    if (rand == 1) {
      compImg.src = newImages[0].src;
    } else if (rand == 2) {
      compImg.src = newImages[1].src;
    } else if (rand == 3) {
      compImg.src = newImages[2].src;
    }
    middle.append(compImg);
    userImag.style.display = "block";
    compImg.style.display = "block";
    check(userImag.src, compImg.src);
  });
});

playAgainBtn.addEventListener("click", function (e) {
  e.preventDefault();
  numsVal.forEach((subNum) => {
    bestOut = subNum.value;
    show.style.display = "none";
    userScoreOne.textContent = 0;
    computerScoreOne.textContent = 0;
    userScoreTwo = 0;
    computerScoreTwo = 0;
    label.innerHTML = `I am playing best out of<span> ${bestOut}<span>`;
    draw.textContent = "";
    userImag.style.display = "none";
    compImg.style.display = "none";
  });
});

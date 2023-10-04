'use strict';

const fp_score = document.querySelectorAll(".score");
const dice_img = document.querySelector(".dice");
const roll_btn = document.querySelector(".btn--roll");
const current_score = document.querySelectorAll(".current-score");
const back_color = document.querySelectorAll(".player")
const hold_btn = document.querySelector(".btn--hold")


fp_score[0].textContent = 0;
fp_score[1].textContent = 0;
dice_img.style.display = "none";
let score = 0;
let activePlayer = 0;
roll_btn.readOnly = true
const end = function () {
    console.log(roll_btn.readOnly = true)
    if (fp_score[0].textContent === 20 || fp_score[1].textContent === 20) {
        roll_btn.readOnly = true;
    }
}
const switchPlayer = function () {
    current_score[activePlayer].textContent = score;
    back_color[activePlayer].classList.remove("player--active")
    activePlayer = activePlayer === 0 ? 1 : 0;
    back_color[activePlayer].classList.add("player--active")
}
roll_btn.addEventListener("click", function () {
    let randomNumber = Math.trunc(Math.random() * 6) + 1;
    dice_img.src = `dice-${randomNumber}.png`;
    dice_img.style.display = "block";

    if (randomNumber !== 1) {
        score += randomNumber;
        current_score[activePlayer].textContent = score;
    } else {
        score = 0;
        switchPlayer();
    }
});

hold_btn.addEventListener("click", function () {

    fp_score[activePlayer].textContent = current_score[activePlayer].textContent
    switchPlayer();

})
end();


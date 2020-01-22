//Generate a random number from 1 to 6
const randomNumber1 = Math.floor(Math.random()*6)+1;
// Assign a random image (dice1-dice6) to the <img class="img1">
document.querySelector(".img1").setAttribute("src", "images/dice" + randomNumber1 + ".png");

// Do as previous to generate second random number from 1 to 6 and assign image to <img class="img2">
const randomNumber2 = Math.floor(Math.random()*6)+1;
document.querySelector(".img2").setAttribute("src", "images/dice" + randomNumber2 + ".png");

// Compare two values and return result to the screen in <h1>
if(randomNumber1>randomNumber2){
  document.querySelector("h1").textContent = "🚩 Player 1 wins!";
}else if(randomNumber2>randomNumber1){
  document.querySelector("h1").textContent = "Player 2 wins! 🚩";
}else{
  document.querySelector("h1").textContent = "🚩 Draw! 🚩";
}

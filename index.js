var randomNumber1 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomDiceImage = "dice" + randomNumber1 + ".png"; // dice1.png - dice6.png

var randomImageSource = "images/" + randomDiceImage; // images/dice1.png - images/dice6.png

var image1 = document.querySelectorAll("img")[0]; // select the first <img> element in the HTML file.

image1.setAttribute("src", randomImageSource); // set the source attribute of image1 to be equal to randomImageSource.

var randomNumber2 = Math.floor(Math.random() * 6) + 1; // 1 - 6

var randomImageSource2 = "images/dice" + randomNumber2 + ".png"; // images/dice1.png - images/dice6.png

var image2 = document
  .querySelectorAll("img")[1]
  .setAttribute("src", randomImageSource2); // select the second <img> element in the HTML file. Set the source attribute of image2 to be equal to randomImageSource.

// If player 1 wins.
if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins! 🥳";
}
// If player 2 wins.
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins! 🥳";
}
// If there is a draw.
else {
  document.querySelector("h1").innerHTML = "It's a draw! 😐";
}

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

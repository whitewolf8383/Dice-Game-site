var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6
var randomImageSource = "images/dice" + randomNumber1 + ".png"; //dice1.png - dice6.png
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "images/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[2].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "Player 1 Wins!";
  document.getElementById("pic2").style.visibility = "hidden";
}
else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player 2 Wins!";
  document.getElementById("pic1").style.visibility = "hidden";
}
else {
  document.querySelector("h1").innerHTML = "Draw!";
}

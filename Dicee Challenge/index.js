
var randomNumber1 = Math.floor(Math.random()*6) + 1; //randomNumber from 1 to 6
var randomNumber2 = Math.floor(Math.random()*6) + 1; //randomNumber from 1 to 6

var randomDiceImage1 = "images/dice" + randomNumber1 + ".png"; // idce image from 1 to 6
var randomDiceImage2 = "images/dice" + randomNumber2 + ".png"; // idce image from 1 to 6


var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomDiceImage1);

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src", randomDiceImage2);


if (randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins";
}else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins";
}else{
    document.querySelector("h1").innerHTML = "Draw!";
}
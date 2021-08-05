
var randomNumber1 = Math.ceil(6 * Math.random());
var randomNumber2 = Math.ceil(6 * Math.random());
document.querySelectorAll("img")[0].setAttribute("src","images/dice"+randomNumber1+".png");
document.querySelectorAll("img")[1].setAttribute("src","images/dice"+randomNumber2+".png")
if (randomNumber1 > randomNumber2){
  document.querySelector("h1").innerText = "Player1 Wins!"
}
else if (randomNumber1 == randomNumber2){
  document.querySelector("h1").innerText = "It's a tie."
}
else{
  document.querySelector("h1").innerText = "Player2 Wins!"
}

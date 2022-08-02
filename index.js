  let dice1 = Math.random() * 6;
  dice1 = Math.floor(dice1) + 1;
  let dice2 = Math.random() * 6;
  dice2 = Math.floor(dice2) + 1;
  var result1 = "";
  var result2 = "";

  if (dice1 === 1) {
    result1 = "images/dice1.png";
  } else if (dice1 === 2) {
    result1 = "images/dice2.png";
  } else if (dice1 === 3) {
    result1 = "images/dice3.png";
  } else if (dice1 === 4) {
    result1 = "images/dice4.png";
  } else if (dice1 === 5) {
    result1 = "images/dice5.png";
  } else if (dice1 === 6) {
    result1 = "images/dice6.png";
  }
  if (dice2 === 1) {
    result2 = "images/dice1.png";
  } else if (dice2 === 2) {
    result2 = "images/dice2.png";
  } else if (dice2 === 3) {
    result2 = "images/dice3.png";
  } else if (dice2 === 4) {
    result2 = "images/dice4.png";
  } else if (dice2 === 5) {
    result2 = "images/dice5.png";
  } else if (dice2 === 6) {
    result2 = "images/dice6.png";
  }


  document.querySelectorAll(".dice")[0].setAttribute("src", result1);
  document.querySelectorAll(".dice")[1].setAttribute("src", result2);

  if (dice1 > dice2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  } else if (dice2 > dice1) {
    document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩";
  } else {
    document.querySelector("h1").innerHTML = "Draw!";
  }

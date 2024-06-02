function rollDice() {
    var randomNumber1 = Math.floor(Math.random() * 6) + 1;
    var randomNumber2 = Math.floor(Math.random() * 6) + 1;
    
    document.querySelector(".img1").src = "./images/dice"+randomNumber1+".svg";
    document.querySelector(".img2").src = "./images/dice"+randomNumber2+".svg";
    
    if (randomNumber1 > randomNumber2) {
        document.querySelector("h1").textContent = "Player 1 wins!";
    }
    else if (randomNumber1 < randomNumber2) {
        document.querySelector("h1").textContent = "Player 2 wins!";
    }
    else if (randomNumber1 === randomNumber2) {
        document.querySelector("h1").textContent = "Draw!";
    }
}


document.querySelector("#guessBtn").addEventListener("click", checkGuess);
document.querySelector("#resetBtn").addEventListener("click", initializeGame);

//Global variables
let randomNumber;
let attempts = 0;
let win = 0;
let loss = 0;

initializeGame();

function initializeGame() {
   randomNumber = Math.floor(Math.random() * 99) + 1;
   console.log("randomNumber: " + randomNumber);
   attempts = 0;

   //hiding the Reset button
   document.querySelector("#resetBtn").style.display = "none";

   //showing the Guess button
   document.querySelector("#guessBtn").style.display = "inline";

   //shows attempts made
   document.querySelector("#guessNum").textContent = 7;

   //show wins/ losses
   document.querySelector("#wins").textContent = win;
   document.querySelector("#losses").textContent = loss;

   let playerGuess = document.querySelector("#playerGuess");
   playerGuess.focus(); //adding focus to the textbox
   playerGuess.value = ""; //clearing the textbox

   let feedback = document.querySelector("#feedback");
   feedback.textContent = ""; //clearing the feedback
  
   //clearing previous guesses
   document.querySelector("#guesses").textContent = "";
}

function checkGuess(){
    let feedback = document.querySelector("#feedback");
    feedback.textContent = "";
    let guessNum = document.querySelector("#guessNum");
    guessNum.textContent = "";
    let guess = document.querySelector("#playerGuess").value;
    console.log("Player guess: " + guess);
    if (guess < 1 || guess > 99) {
        feedback.textContent = "Enter a number  between 1 and 99";
        guessNum.textContent = "Guesses left: " + (7 - attempts);
        feedback.style.color = "red";
        return;
    } 
    attempts++;
    console.log("Attemps: " + attempts);
    feedback.style.color = "orange";
    if (guess == randomNumber) {
        if(attempts < 7){
            feedback.textContent = "Congrats on beating the game in under 7 tries!";
        } else {
            feedback.textContent = "You guessed it! You won!";
        }
        feedback.style.color = "darkgreen";
        guessNum.textContent = 7 - attempts + "It took you " + attempts + " times to win the game.";
        win++;
        gameOver();
    } else {
        document.querySelector("#guesses").textContent += guess + " ";
        if (attempts == 7) {
            feedback.textContent = "Sorry, you lost! The random number was " + randomNumber;
            feedback.style.color = "red";
            guessNum.textContent = "Out of guesses.";
            loss++;
            gameOver();
        } else if (guess > randomNumber){
            feedback.textContent = "Guess was high";
            guessNum.textContent = 7 - attempts;
        } else {
            feedback.textContent = "Guess was low";
            guessNum.textContent = 7 - attempts;
        }
    }
    // let guess = document.querySelector("#playerGuess").value;
    // console.log("Player guess: " + guess);
    // if (guess < 1 || guess > 99) {
    //     let feedback = document.querySelector("#feedback");
    //     feedback.textContent = "Enter a number between 1 and 99";
    //     feedback.style.color = "red";
    //     return;
    // }
}

function gameOver(){
    let guessBtn = document.querySelector("#guessBtn");
    let resetBtn = document.querySelector("#resetBtn");
    guessBtn.style.display = "none";
    resetBtn.style.display = "inline";
    document.querySelector("#wins").textContent = win;
    document.querySelector("#losses").textContent = loss;
}
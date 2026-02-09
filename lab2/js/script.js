//event listeners
document.querySelector("#guessBtn").addEventListener("click", guess);

//Global variables
let randomNumber = Math.floor(Math.random() * 99) + 1;
//generates random number between 1 and 99

let score = 0;

function guess(){
    if(score === 7){
    
        return;
    }
    //"value" is ONLY for input elements    
    let userGuess = document.querySelector("#userGuess").value;
    //alert(userGuess);
    // document.querySelector("#userGuesses").textContent += userGuess + " ";
    document.querySelector("#userGuesses").textContent += ` ${userGuess} `;

    document.querySelector("#userGuesses").style.color = "red";
    document.querySelector("#userGuesses").style.backgroundColor = "yellow";

    if(userGuess > randomNumber) {

    }
    score++;
}   
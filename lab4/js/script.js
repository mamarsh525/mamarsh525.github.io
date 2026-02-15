//event listener
document.querySelector("button").addEventListener("click", gradeQuiz);

shuffleQ1Choices();
function shuffleQ1Choices(){
    let q1Choices = ["font-color", "color", "text-color", 'fontColor'];
    q1Choices = _.shuffle(q1Choices);
    console.log(q1Choices);

    //<label><input type="radio" name="q1" value="fontColor">font-color</label>
    for (let i of q1Choices) {
        let radioElement = document.createElement("input");

        radioElement.type = "radio";
        radioElement.name = "q1";
        radioElement.value = i;

        console.log(radioElement);

        let labelElement = document.createElement("label");
        labelElement.textContent = i;

        labelElement.prepend(radioElement);
        document.querySelector("#q1").append(labelElement);
        console.log(labelElement);
    }
} //for

function gradeQuiz(){
    let answerQ1 = "color";
    let answerQ2 = "Max";
    let answerQ3 = "Singleton";
    let answerQ4 = "2026";
    let answerQ5 = "I am ready for class";
    let userAnswer1 = document.querySelector("input[name=q1]:checked").value;
    let userAnswer2 = document.querySelector("#q2").value;
    let userAnswer3 = document.querySelector("#q3").value;
    let userAnswer4 = document.querySelector("#q4").value;
    let userAnswer5 = document.querySelector("#q5").value;
    let totalScore = 0;

    if(userAnswer1 == answerQ1) {
        document.getElementById("q1Div").style.backgroundColor = "green";
        totalScore += 5;
    }
    else{
        document.getElementById("q1Div").style.backgroundColor = "red";
    }
    if(userAnswer2 == answerQ2) {
        document.getElementById("q2Div").style.backgroundColor = "green";
        totalScore += 5;
    }
    else{
        document.getElementById("q2Div").style.backgroundColor = "red";
    }
    if(userAnswer3 == answerQ3) {
        document.getElementById("q3Div").style.backgroundColor = "green";
        totalScore += 5;
    }
    else{
        document.getElementById("q3Div").style.backgroundColor = "red";
    }
    if(userAnswer4 == answerQ4) {
        document.getElementById("q4Div").style.backgroundColor = "green";
        totalScore += 5;
    }
    else{
        document.getElementById("q4Div").style.backgroundColor = "red";
    }
    if(userAnswer5 == answerQ5){
        document.getElementById("q5Div").style.backgroundColor = "green";
        totalScore += 5;
    }
    else{
        document.getElementById("q5Div").style.backgroundColor = "red";
    }
    document.getElementById("q6Div").textContent = totalScore;
}


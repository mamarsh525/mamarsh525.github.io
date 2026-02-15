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
        document.querySelector("#q1ChoicesDiv").append(labelElement);
        console.log(labelElement);
    }
} //for

function gradeQuiz(){
    let answerQ1 = "color";
    let userAnswer1 = document.querySelector("input[name=q1]:checked").value;
    alert("Grading quiz..." + userAnswer1);

    if(userAnswer1 == answerQ1) {
        //display "Right!"
    }
}


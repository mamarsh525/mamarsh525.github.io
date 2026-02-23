//event listener
document.querySelector("button").addEventListener("click", gradeQuiz);

// show persisted count on page load
let timesTaken = localStorage.getItem("timesTaken") || 0;
document.getElementById("timesDiv").textContent = "Total Times Taken: " + timesTaken;

shuffleQ1Choices();
function shuffleQ1Choices() {
    let q1Choices = ["shutter speed", "aperture", "iso", 'mirror lock'];
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
}

function setFeedback(divId, correct) {
    let div = document.getElementById(divId);
    div.style.backgroundColor = correct ? "green" : "red";
    div.innerHTML = "";
    let img = document.createElement("img");
    img.src = correct ? "img/green_check.png" : "img/red_check.png";
    img.alt = correct ? "Correct" : "Wrong";
    img.style.height = "30px";
    div.appendChild(img);
}

function gradeQuiz() {
    let answerQ1 = "shutter speed";
    let answerQ2 = "Max";
    let answerQ3 = "Singleton";
    let answerQ4 = "1.8";
    let answerQ5 = true;
    let userAnswer1 = document.querySelector("input[name=q1]:checked").value;
    let userAnswer2 = document.querySelector("#q2").value;
    let userAnswer3 = document.querySelector("#q3").value;
    let userAnswer4 = document.querySelector("#q4").value;
    let userAnswer5 = document.querySelector("#q5").checked;
    let totalScore = 0;

    if (userAnswer1 == answerQ1) { setFeedback("q1Div", true); totalScore += 20; }
    else { setFeedback("q1Div", false); }

    if (userAnswer2 == answerQ2) { setFeedback("q2Div", true); totalScore += 20; }
    else { setFeedback("q2Div", false); }

    if (userAnswer3 == answerQ3) { setFeedback("q3Div", true); totalScore += 20; }
    else { setFeedback("q3Div", false); }

    if (userAnswer4 == answerQ4) { setFeedback("q4Div", true); totalScore += 20; }
    else { setFeedback("q4Div", false); }

    if (userAnswer5 == answerQ5) { setFeedback("q5Div", true); totalScore += 20; }
    else { setFeedback("q5Div", false); }

    document.getElementById("totalScoreDiv").textContent = "total score: " + totalScore + "/100";

    if (totalScore > 80) {
        document.getElementById("congratsDiv").textContent = "Congratulations! Great job!";
    } else {
        document.getElementById("congratsDiv").textContent = "";
    }

    // increment and persist quiz-taken counter
    let count = Number(localStorage.getItem("timesTaken") || 0) + 1;
    localStorage.setItem("timesTaken", count);
    document.getElementById("timesDiv").textContent = "Total Times Taken: " + count;
}


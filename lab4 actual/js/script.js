let zipElement = document.querySelector("#zipCode");

// zipElement.addEventListener("change", displayCity);
// zipElement.addEventListener("change", displayLatitude);
// zipElement.addEventListener("change", displayLongitude);
zipElement.addEventListener("change", displayZip);
document.querySelector("#password").addEventListener("click", displayPassword);
document.querySelector("#password").addEventListener("change", signupError);
document.querySelector("#usernameTextBox").addEventListener("change", usernameAvailability);
document.querySelector("#usernameTextBox").addEventListener("change", usernameLength);
document.querySelector("#state").addEventListener("change", displayCounty);
document.querySelector("#retypePassword").addEventListener("change", passwordMatching);
document.querySelector("#password").addEventListener("change", passwordMatching);
document.querySelector("#submitBtn").addEventListener("click", finishSignup);
displayZip();
displayStates();
async function displayStates(){
    let url = "https://csumb.space/api/allStatesAPI.php";
    try {
        const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Error accessing API endpoint")
            }
        const data = await response.json();
        console.log(data);
        //alert(data[0].state);

        for (let i of data){
            let optionEl = document.createElement("option");
            optionEl.textContent = i.state;
            optionEl.value = i.usps;

            document.querySelector("#state").append(optionEl);

        }
        displayCounty();

        } catch (err) {
                if (err instanceof TypeError) {
                    alert("Error accessing API endpoint (network failure)");
                } else {
                    alert(err.message);
                }
        } //catch    
}

async function displayZip(){
    let zipCode = zipElement.value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        if(!data){
            document.querySelector("#city").textContent = "";
            document.querySelector("#latitude").textContent = "";
            document.querySelector("#longitude").textContent = "";
            document.querySelector("#badZip").textContent = "Zip code not found";
        }
        else {
            displayCity();
            displayLatitude();
            displayLongitude();
            document.querySelector("#badZip").textContent = "";
        }
    } catch (err) {
            if (err instanceof TypeError) {
                alert("Error accessing API endpoint (network failure)");
            } else {
                alert(err.message);
            }
    } //catch    
}


async function displayCity(){
    //alert("displaying city...")
    let zipCode = zipElement.value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    //alert(data.city);
    document.querySelector("#city").textContent = data.city;
}

async function displayLatitude(){
    let zipCode = zipElement.value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    //alert(data.city);
    document.querySelector("#latitude").textContent = data.latitude;
}

async function displayLongitude(){
    let zipCode = zipElement.value;
    let url = "https://csumb.space/api/cityInfoAPI.php?zip=" + zipCode;
    let response = await fetch(url);
    let data = await response.json();
    console.log(data);
    //alert(data.city);
    document.querySelector("#longitude").textContent = data.longitude;
}

async function displayPassword(){
    let url = "https://csumb.space/api/suggestedPassword.php?length=8 ";
    let response = await fetch(url);
    let data = await response.json();
    document.querySelector("#suggestedPassword").textContent = data.password;
}

async function displayCounty() {
    let countySel = document.querySelector("#state").value;
    let url = "https://csumb.space/api/countyListAPI.php?state=" + countySel;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint")
        }
        const data = await response.json();
        console.log(data);
        //alert(data[0].state);

        document.querySelector("#county").innerHTML = "";

        for (let i of data) {
            let optionEl = document.createElement("option");
            optionEl.textContent = i.county;
            document.querySelector("#county").append(optionEl);

        }

    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    } //catch    
}

async function usernameAvailability() {
    let usernameAvailability = document.querySelector("#usernameTextBox").value;
    let url = "https://csumb.space/api/usernamesAPI.php?username=" + usernameAvailability;
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Error accessing API endpoint");
        }
        const data = await response.json();
        console.log(data.available);

        if(data.available){
            document.querySelector("#usernameAvailability").textContent = "Username is available!";
            document.querySelector("#usernameAvailability").style.color = "green";
        }
        else{
            document.querySelector("#usernameAvailability").textContent = "Username is NOT available!";
            document.querySelector("#usernameAvailability").style.color = "red";
        }
       
    } catch (err) {
        if (err instanceof TypeError) {
            alert("Error accessing API endpoint (network failure)");
        } else {
            alert(err.message);
        }
    }
}

async function signupError(){
    let password = document.querySelector("#password").value;
    if(password.length < 6){
        document.querySelector("#signupError").textContent  = "Password too short";
        document.querySelector("#signupError").style.color = "red";
    }
    else{
        document.querySelector("#signupError").textContent  = "Password good length";
        document.querySelector("#signupError").style.color = "green";
    }
}

function usernameLength(){
    let username = document.querySelector("#usernameTextBox").value;
    if(username.length < 3){
        document.querySelector("#usernameError").textContent  = "Username too short";
        document.querySelector("#usernameError").style.color = "red";
    }
    else{
        document.querySelector("#usernameError").textContent  = "Username good length";
        document.querySelector("#usernameError").style.color = "green";
    }
}

function passwordMatching(){
    let password1 = document.querySelector("#password").value;
    let password2 = document.querySelector("#retypePassword").value;
    if (password1 != password2) {
        document.querySelector("#matchingError").textContent = "Retype Password";
        document.querySelector("#matchingError").style.color = "red";
    } 
    else {
        document.querySelector("#matchingError").textContent = "Passwords matching!";
        document.querySelector("#matchingError").style.color = "green";
    }
}

function finishSignup(){
    let isValid = true;
    let username = document.querySelector("#usernameTextBox").value;
    if(username.length < 3){
        document.querySelector("#usernameFinalError").textContent  = "Username too short";
        document.querySelector("#usernameFinalError").style.color = "red";
        isValid = false;
    }
    else{
        document.querySelector("#usernameFinalError").textContent  = "Username good length";
        document.querySelector("#usernameFinalError").style.color = "green";
    }

    let password1 = document.querySelector("#password").value;
    let password2 = document.querySelector("#retypePassword").value;
    if (password1 != password2) {
        document.querySelector("#passwordFinalError").textContent = "Retype Password";
        document.querySelector("#passwordFinalError").style.color = "red";
        isValid = false;
    } 
    else {
        document.querySelector("#passwordFinalError").textContent = "Passwords matching!";
        document.querySelector("#passwordFinalError").style.color = "green";
    }

    if (password1.length < 6) {
        document.querySelector("#passwordFinalLengthError").textContent = "Password too short";
        document.querySelector("#passwordFinalLengthError").style.color = "red";
        isValid = false;
    } 
    else {
        document.querySelector("#passwordFinalLengthError").textContent = "Password good length!";
        document.querySelector("#passwordFinalLengthError").style.color = "green";
    }

    if (isValid){
        document.querySelector("#successMessage").textContent = "Sign up Success!";
    }
}
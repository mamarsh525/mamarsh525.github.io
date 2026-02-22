let zipElement = document.querySelector("#zipCode");

zipElement.addEventListener("change", displayCity);
zipElement.addEventListener("change", displayLatitude);
zipElement.addEventListener("change", displayLongitude);
document.querySelector("#password").addEventListener("click", displayPassword);
document.querySelector("#password").addEventListener("change", signupError);
document.querySelector("#usernameTextBox").addEventListener("change", usernameAvailability);

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
        }
        else{
            document.querySelector("#usernameAvailability").textContent = "Username is NOT available!";
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
        document.querySelector("#signupError").textContent  = "Error";
        document.querySelector("#signupError").style.color = "red";
    }
    else{
        document.querySelector("#signupError").textContent  = "";
    }
}

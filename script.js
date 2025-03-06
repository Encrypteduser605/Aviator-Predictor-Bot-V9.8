// Handle the transition after the 'START' button click
document.getElementById("startButton").addEventListener("click", function() {
    document.getElementById("startSection").style.display = "none";
    document.getElementById("welcomeSection").style.display = "block";
});

// Handle the transition after the 'Continue' button on the welcome screen
document.getElementById("continueButton").addEventListener("click", function() {
    document.getElementById("welcomeSection").style.display = "none";
    document.getElementById("selectionSection").style.display = "block";
});

// Function to go to betting site selection
function goToBettingSiteSelection() {
    document.getElementById("selectionSection").style.display = "none";
    document.getElementById("bettingSiteSelection").style.display = "block";
}

// Function to go to the Betting Site ID section
function goToBettingSiteID() {
    document.getElementById("bettingSiteSelection").style.display = "none";
    document.getElementById("bettingSiteID").style.display = "block";
}

// Handle activation code validation
function validateActivationCode() {
    const activationCode = document.getElementById("activationCode").value;
    if (activationCode === "GXW764") {
        document.getElementById("activationCodeSection").style.display = "none";
        document.getElementById("getSignalSection").style.display = "block";
    } else {
        document.getElementById("error-message").style.display = "block";
    }
}

// Show the spider web loading animation
function showSpiderWeb() {
    document.getElementById("spiderWeb").style.display = "block";
}

// Show the 'Get Signal' button after activation code validation
function getSignal() {
    alert("Signal Received!");
}

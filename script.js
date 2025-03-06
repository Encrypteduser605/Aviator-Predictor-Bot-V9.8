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

// Handle betting site selection
function bettingSiteSelected(siteName) {
    alert("You selected: " + siteName);
    document.getElementById("bettingSiteSelection").style.display = "none";
    document.getElementById("bettingSiteID").style.display = "block";
}

// Handle betting site ID input
document.getElementById("bettingSiteIDInput").addEventListener("input", function() {
    var bettingSiteID = document.getElementById("bettingSiteIDInput").value;
    if (bettingSiteID.length > 0) {
        document.getElementById("bettingSiteID").style.display = "none";
        document.getElementById("activationCodeSection").style.display = "block";
    }
});

// Validate activation code
function validateActivationCode() {
    var code = document.getElementById("activationCode").value;
    if (code === "") {
        document.getElementById("error-message").style.display = "block";
    } else {
        document.getElementById("activationCodeSection").style.display = "none";
        document.getElementById("getSignalSection").style.display = "block";
    }
}

// Handle signal request
function getSignal() {
    alert("Signal Request Sent!");
    // Additional signal functionality can be added here
}

// Restart the app
function restartApp() {
    location.reload();
}

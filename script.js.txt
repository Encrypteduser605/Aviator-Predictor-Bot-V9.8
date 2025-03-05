// Show the welcome message and warning after the start button is clicked
document.getElementById('startButton').addEventListener('click', function() {
    document.getElementById('startSection').style.display = 'none';
    document.getElementById('welcomeSection').style.display = 'block';
});

// Proceed to the language and country selection page
document.getElementById('continueButton').addEventListener('click', function() {
    document.getElementById('welcomeSection').style.display = 'none';
    document.getElementById('selectionSection').style.display = 'block';
});

// Proceed to betting site selection after language and country selection
function goToBettingSiteSelection() {
    var country = document.getElementById('countrySelect').value;
    if (country === "") {
        alert("Please select a country.");
        return;
    }
    
    document.getElementById('selectionSection').style.display = 'none';
    document.getElementById('bettingSiteSelection').style.display = 'block';
}

// Handle betting site selection
function bettingSiteSelected(site) {
    alert("You selected: " + site);
    document.getElementById('bettingSiteSelection').style.display = 'none';
    document.getElementById('bettingSiteID').style.display = 'block';
}

// Proceed to activation code entry page
function goToActivationCode() {
    var siteID = document.getElementById('bettingSiteIDInput').value;
    if (siteID === "") {
        alert("Please enter your Betting Site ID.");
        return;
    }
    
    document.getElementById('bettingSiteID').style.display = 'none';
    document.getElementById('activationCodeSection').style.display = 'block';
}

// Validate the activation code
function validateActivationCode() {
    var activationCode = document.getElementById('activationCode').value;
    if (activationCode === "ABC123") {  // You can replace this with a dynamic validation logic if needed
        alert("Activation Code is valid!");
    } else {
        document.getElementById('error-message').style.display = 'block';
    }
}

// JavaScript file (script.js)

// Global variables to track the selected options
let selectedLanguage = '';
let selectedCountry = '';
let selectedBettingSite = '';
let activationCode = 'GXW764'; // The correct activation code

// Function to navigate to Betting Site Selection
function goToBettingSiteSelection() {
    // Get selected language and country
    selectedLanguage = document.getElementById('languageSelect').value;
    selectedCountry = document.getElementById('countrySelect').value;

    // Hide the selection section and show the betting site section
    document.getElementById('selectionSection').style.display = 'none';
    document.getElementById('bettingSiteSelection').style.display = 'block';
}

// Function to handle betting site selection
function bettingSiteSelected(siteName) {
    selectedBettingSite = siteName;
    console.log(`Betting Site Selected: ${selectedBettingSite}`);
}

// Function to navigate to the Betting Site ID section
function goToBettingSiteID() {
    // Hide the betting site selection and show the Betting Site ID section
    document.getElementById('bettingSiteSelection').style.display = 'none';
    document.getElementById('bettingSiteID').style.display = 'block';
}

// Function to navigate to the Activation Code section
function goToActivationCode() {
    // Hide the Betting Site ID section and show the Activation Code section
    document.getElementById('bettingSiteID').style.display = 'none';
    document.getElementById('activationCodeSection').style.display = 'block';
}

// Function to validate the entered activation code
function validateActivationCode() {
    const enteredCode = document.getElementById('activationCode').value;
    
    if (enteredCode === activationCode) {
        // Show the "Get Signal" button if the activation code is correct
        document.getElementById('activationCodeSection').style.display = 'none';
        document.getElementById('getSignalSection').style.display = 'block';
    } else {
        // Show an error message if the activation code is incorrect
        document.getElementById('error-message').style.display = 'block';
    }
}

// Function to handle the "Get Signal" button click
function getSignal() {
    // Simulate the delay of entering details
    setTimeout(() => {
        // Show the error page if the user took too long
        document.getElementById('getSignalSection').style.display = 'none';
        document.getElementById('errorSection').style.display = 'block';
    }, 5000); // 5 seconds delay for demo purposes
}

// Function to restart the app from the error page
function restartApp() {
    // Hide error section and show the start section
    document.getElementById('errorSection').style.display = 'none';
    document.getElementById('startSection').style.display = 'block';
}

// Function to handle the "START" button click on the welcome screen
document.getElementById('startButton').addEventListener('click', () => {
    // Hide the start screen and show the welcome screen
    document.getElementById('startSection').style.display = 'none';
    document.getElementById('welcomeSection').style.display = 'block';
});

// Function to handle the "Continue" button click on the welcome screen
document.getElementById('continueButton').addEventListener('click', () => {
    // Hide the welcome screen and show the language and country selection
    document.getElementById('welcomeSection').style.display = 'none';
    document.getElementById('selectionSection').style.display = 'block';
});

// Function to handle the "Continue" button click on the Betting Site ID screen
document.getElementById('bettingSiteIDInput').addEventListener('input', () => {
    const bettingSiteID = document.getElementById('bettingSiteIDInput').value;
    if (bettingSiteID) {
        document.getElementById('bettingSiteID').style.display = 'none';
        document.getElementById('activationCodeSection').style.display = 'block';
    }
});

// Initialize sections and buttons
const startButton = document.getElementById('startButton');
const continueButton = document.getElementById('continueButton');
const continueSiteSelectionButton = document.querySelector('.continue-btn');
const bettingSiteSelection = document.getElementById('bettingSiteSelection');
const bettingSiteIDSection = document.getElementById('bettingSiteID');
const activationCodeSection = document.getElementById('activationCodeSection');
const getSignalSection = document.getElementById('getSignalSection');
const errorSection = document.getElementById('errorSection');
const errorMessage = document.getElementById('error-message');

// Functions to navigate between sections
function goToWelcomeScreen() {
    document.getElementById('startSection').style.display = 'none';
    document.getElementById('welcomeSection').style.display = 'block';
}

function goToSelectionSection() {
    document.getElementById('welcomeSection').style.display = 'none';
    document.getElementById('selectionSection').style.display = 'block';
}

function goToBettingSiteSelection() {
    const language = document.getElementById('languageSelect').value;
    const country = document.getElementById('countrySelect').value;

    if (language && country) {
        document.getElementById('selectionSection').style.display = 'none';
        bettingSiteSelection.style.display = 'block';
    } else {
        alert("Please select both language and country!");
    }
}

function bettingSiteSelected(site) {
    console.log(`Betting Site Selected: ${site}`);
    // Highlight the selected site (for better visibility)
    const allSites = document.querySelectorAll('.site');
    allSites.forEach(s => s.style.backgroundColor = 'white');
    event.target.style.backgroundColor = 'green';
}

function goToBettingSiteID() {
    bettingSiteSelection.style.display = 'none';
    bettingSiteIDSection.style.display = 'block';
}

function goToActivationCode() {
    const bettingSiteID = document.getElementById('bettingSiteIDInput').value;

    if (bettingSiteID.trim() === '') {
        alert("Please enter a valid Betting Site ID!");
        return;
    }

    bettingSiteIDSection.style.display = 'none';
    activationCodeSection.style.display = 'block';
}

function validateActivationCode() {
    const activationCode = document.getElementById('activationCode').value;

    if (activationCode === 'GXW764') {
        activationCodeSection.style.display = 'none';
        getSignalSection.style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
    }
}

function getSignal() {
    console.log('Fetching Signal...');
}

function restartApp() {
    location.reload();  // Reloads the page to restart the app
}

// Event listeners for buttons
startButton.addEventListener('click', goToWelcomeScreen);
continueButton.addEventListener('click', goToSelectionSection);
continueSiteSelectionButton.addEventListener('click', goToBettingSiteSelection);

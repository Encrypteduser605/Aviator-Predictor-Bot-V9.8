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
    // You can save the selected betting site or handle it further
}

function goToBettingSiteID() {
    bettingSiteSelection.style.display = 'none';
    bettingSiteIDSection.style.display = 'block';
}

function goToActivationCode() {
    const bettingSiteID = document.getElementById('bettingSiteIDInput').value;

    if (bettingSiteID.trim() === '') {  // Ensure that the input is not empty
        alert("Please enter a valid Betting Site ID!");
        return; // Prevent moving to next section if the input is empty
    }

    // Hide Betting Site ID section and move to the Activation Code section
    bettingSiteIDSection.style.display = 'none';
    activationCodeSection.style.display = 'block';
}

function validateActivationCode() {
    const activationCode = document.getElementById('activationCode').value;

    if (activationCode === 'GXW764') {  // Example code validation
        activationCodeSection.style.display = 'none';
        getSignalSection.style.display = 'block';
    } else {
        errorMessage.style.display = 'block';
    }
}

function getSignal() {
    console.log('Fetching Signal...');
    // Add logic to retrieve signal or handle the functionality further
}

function restartApp() {
    location.reload();  // Reloads the page to restart the app
}

// Event listeners for buttons

startButton.addEventListener('click', goToWelcomeScreen);
continueButton.addEventListener('click', goToSelectionSection);
continueSiteSelectionButton.addEventListener('click', goToBettingSiteSelection);

// Error handling for activation code section
function handleError(message) {
    errorMessage.textContent = message;
    errorSection.style.display = 'block';
}

// Optional spinner for loading
function showLoading() {
    const spinner = document.createElement('div');
    spinner.classList.add('spinner');
    document.body.appendChild(spinner);
}

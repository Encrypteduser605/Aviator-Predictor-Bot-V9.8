let currentStep = 'start';  // Keeps track of the current section

// Go to the next section after "Start"
document.getElementById('startButton').onclick = function() {
    document.getElementById('startSection').style.display = 'none';
    document.getElementById('welcomeSection').style.display = 'block';
};

// Proceed after "Welcome" step
document.getElementById('continueButton').onclick = function() {
    document.getElementById('welcomeSection').style.display = 'none';
    document.getElementById('selectionSection').style.display = 'block';
};

// Language and Country Selection
function goToBettingSiteSelection() {
    document.getElementById('selectionSection').style.display = 'none';
    document.getElementById('bettingSiteSelection').style.display = 'block';
}

// Betting Site Selection
function bettingSiteSelected(siteName) {
    console.log('Betting site selected: ' + siteName);
    document.getElementById('bettingSiteSelection').style.display = 'none';
    document.getElementById('bettingSiteID').style.display = 'block';
}

// Proceed to activation code section
function goToBettingSiteID() {
    document.getElementById('bettingSiteSelection').style.display = 'none';
    document.getElementById('bettingSiteID').style.display = 'block';
}

// Validate Activation Code
function validateActivationCode() {
    var activationCode = document.getElementById('activationCode').value;
    var errorMessage = document.getElementById('error-message');
    var getSignalButton = document.getElementById('getSignalButton');
    
    if (activationCode === 'GXW764') {
        getSignalButton.style.display = 'block';
        errorMessage.style.display = 'none';
    } else {
        errorMessage.style.display = 'block';
        getSignalButton.style.display = 'none';
    }
}

// Show the Get Signal button after successful code validation
function getSignal() {
    alert('Signal retrieved!');  // Replace this with actual logic for signal
}

// Handle error (timeout or other issues)
function restartApp() {
    location.reload();
}

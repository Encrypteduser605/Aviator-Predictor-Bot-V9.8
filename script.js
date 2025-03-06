// Functions for managing the flow of the app and language changes

// Function to handle the start of the app
document.getElementById('startButton').addEventListener('click', function () {
    document.getElementById('startSection').style.display = 'none';
    document.getElementById('welcomeSection').style.display = 'block';
});

// Function to handle the continue button on the welcome screen
document.getElementById('continueButton').addEventListener('click', function () {
    document.getElementById('welcomeSection').style.display = 'none';
    document.getElementById('selectionSection').style.display = 'block';
});

// Function to handle the continue button on the language and country selection
function goToBettingSiteSelection() {
    document.getElementById('selectionSection').style.display = 'none';
    document.getElementById('bettingSiteSelection').style.display = 'block';
}

// Function to handle the continue button on the betting site selection
function bettingSiteSelected(siteName) {
    // Process betting site selection here
    console.log('Selected site:', siteName);
}

// Function to go to the Betting Site ID section
function goToBettingSiteID() {
    document.getElementById('bettingSiteSelection').style.display = 'none';
    document.getElementById('bettingSiteID').style.display = 'block';
}

// Function to handle the continue button on the betting site ID input
document.getElementById('continueButton').addEventListener('click', function () {
    document.getElementById('bettingSiteID').style.display = 'none';
    document.getElementById('activationCodeSection').style.display = 'block';
});

// Function to validate the activation code
function validateActivationCode() {
    var code = document.getElementById('activationCode').value;
    if (code === '') {
        document.getElementById('error-message').style.display = 'block';
    } else {
        document.getElementById('activationCodeSection').style.display = 'none';
        document.getElementById('getSignalSection').style.display = 'block';
    }
}

// Function to display the signal button
function getSignal() {
    alert('Signal received! 🚀');
}

// Function to handle restarting the app
function restartApp() {
    document.getElementById('errorSection').style.display = 'none';
    document.getElementById('startSection').style.display = 'block';
}

// Function to handle the language selection change
document.getElementById('languageSelect').addEventListener('change', function (event) {
    var selectedLanguage = event.target.value;
    changeLanguage(selectedLanguage);
});

// Function to change the language (this should load the translated strings or update text)
function changeLanguage(language) {
    var welcomeText = '';
    var warningText = '';

    if (language === 'Arabic') {
        welcomeText = 'مرحبًا بك في Zayd Aviator Predictor Bot';
        warningText = 'تحذير: الاستخدام الأقصى للبرنامج هو 10 ساعات في اليوم';
    } else if (language === 'French') {
        welcomeText = 'Bienvenue dans Zayd Aviator Predictor Bot';
        warningText = 'AVERTISSEMENT: L\'utilisation maximale du logiciel est de 10 heures par jour';
    } else if (language === 'Portuguese') {
        welcomeText = 'Bem-vindo ao Zayd Aviator Predictor Bot';
        warningText = 'AVISO: O uso máximo do software é de 10 horas por dia';
    } else {
        welcomeText = 'Welcome to Zayd Aviator Predictor Bot';
        warningText = 'WARNING: Software maximum usage is 10 hours per day';
    }

    document.querySelector('#welcomeSection h1').textContent = welcomeText;
    document.querySelector('#welcomeSection p').textContent = warningText;
}

// Function to dynamically adjust the warning sticker for clarity
function adjustWarningSticker() {
    const warningSticker = document.querySelector('.warning-sticker');
    if (warningSticker) {
        warningSticker.textContent = 'WARNING: Please do not share your activation code.';
    }
}

// Function for activation code entry error handling
document.getElementById('activationCode').addEventListener('input', function () {
    document.getElementById('error-message').style.display = 'none';
});

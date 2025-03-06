// Script for the Zayd Aviator Predictor Bot

// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
    // Variables to handle sections
    const startButton = document.getElementById('startButton');
    const continueButton = document.getElementById('continueButton');
    const languageSelect = document.getElementById('languageSelect');
    const countrySelect = document.getElementById('countrySelect');
    const bettingSiteSelection = document.getElementById('bettingSiteSelection');
    const bettingSiteID = document.getElementById('bettingSiteID');
    const activationCodeSection = document.getElementById('activationCodeSection');
    const getSignalButton = document.getElementById('getSignalButton');
    const errorSection = document.getElementById('errorSection');
    const errorMessage = document.getElementById('error-message');

    // Sections in HTML
    const startSection = document.getElementById('startSection');
    const welcomeSection = document.getElementById('welcomeSection');
    const selectionSection = document.getElementById('selectionSection');

    // Event listener to start the app
    startButton.addEventListener('click', function () {
        startSection.style.display = 'none';
        welcomeSection.style.display = 'block';
    });

    // Event listener to continue after the welcome section
    continueButton.addEventListener('click', function () {
        welcomeSection.style.display = 'none';
        selectionSection.style.display = 'block';
    });

    // Function to move to the Betting Site selection
    function goToBettingSiteSelection() {
        selectionSection.style.display = 'none';
        bettingSiteSelection.style.display = 'block';
    }

    // Function to move to Betting Site ID section
    function goToBettingSiteID() {
        bettingSiteSelection.style.display = 'none';
        bettingSiteID.style.display = 'block';
    }

    // Function to validate Activation Code
    function validateActivationCode() {
        const activationCode = document.getElementById('activationCode').value;

        if (activationCode.length === 6) {  // Example condition to check length
            activationCodeSection.style.display = 'none';
            getSignalButton.style.display = 'block'; // Show the GET SIGNAL button after activation code
        } else {
            errorMessage.style.display = 'block'; // Show error message if code is invalid
        }
    }

    // Function to get Signal when the user clicks the button
    function getSignal() {
        // Add logic to generate signal or notify user about the signal
        alert("Signal Generated! 🚀");
    }

    // Function to handle the restart action
    function restartApp() {
        errorSection.style.display = 'none';
        startSection.style.display = 'block'; // Go back to start section
    }

    // Function to handle betting site selection
    function bettingSiteSelected(site) {
        console.log("Betting site selected: " + site);
        // Proceed to next section or process
    }

    // Implement language change functionality
    languageSelect.addEventListener('change', function () {
        const selectedLanguage = languageSelect.value;
        console.log("Language selected: " + selectedLanguage);
        // Add language translation logic here if needed
    });

    // Handle activation code and further steps
    document.querySelector("#bettingSiteIDInput").addEventListener("input", function () {
        // This could be added for input validation
        const bettingSiteIDInput = document.querySelector("#bettingSiteIDInput").value;
        console.log("Betting site ID: " + bettingSiteIDInput);
    });

    // Handle the selection of betting sites (add event listeners to all sites)
    const bettingSites = document.querySelectorAll('.site');
    bettingSites.forEach(site => {
        site.addEventListener('click', function () {
            bettingSiteSelected(site.textContent);
        });
    });

    // Function to change the language and country (extend with translation if needed)
    const languageOptions = ['English', 'Arabic', 'French', 'Portuguese'];
    const countryOptions = ['Zimbabwe', 'Tanzania', 'Bangladesh', 'Pakistan', 'Bulgaria', 'Mexico', 'Somalia', 'Uganda', 'Ethiopia', 'Mozambique', 'Algeria', 'Egypt', 'Morocco', 'Nigeria', 'Kenya', 'Sudan', 'Saudi Arabia', 'United Arab Emirates', 'Jordan', 'Lebanon', 'Brazil'];

    // Make language and country selection work
    languageSelect.addEventListener('change', function () {
        const selectedLanguage = languageSelect.value;
        console.log("Language Selected: " + selectedLanguage);
        // Add translation logic here if needed
    });

    countrySelect.addEventListener('change', function () {
        const selectedCountry = countrySelect.value;
        console.log("Country Selected: " + selectedCountry);
        // Perform any logic based on selected country
    });

    // Handling notifications
    function showNotification(message, type) {
        const notification = document.createElement('div');
        notification.classList.add('notification', type);
        notification.innerText = message;
        document.body.appendChild(notification);

        setTimeout(() => {
            notification.remove();
        }, 5000);
    }

    // Call to show notification example
    showNotification('Betting Site Selected!', 'success');
    
    // Make sure to handle all section switches properly for usability
    function switchSection(sectionToShow) {
        const allSections = document.querySelectorAll('.container');
        allSections.forEach(section => {
            section.style.display = 'none';
        });

        sectionToShow.style.display = 'block';
    }

    // Attach the restart functionality to restart the app when needed
    document.getElementById('restartApp').addEventListener('click', restartApp);
});

// Add more functions as needed to fit your logic

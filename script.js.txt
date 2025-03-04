// Function to go to the next step
function nextStep() {
    const currentStep = document.querySelector('.step:not([style="display: none;"])');
    const nextStep = currentStep.nextElementSibling;

    if (nextStep) {
        currentStep.style.display = 'none';
        nextStep.style.display = 'block';
    } else {
        document.querySelector('.step').style.display = 'none';
        document.getElementById('confirmation').style.display = 'block'; // Show confirmation when all steps are completed
    }
}

// Function to handle the selection of a betting site
function bettingSiteSelected(siteName) {
    console.log(`Selected Betting Site: ${siteName}`);
    nextStep();
}

// Validate the activation code
function validateActivationCode() {
    const activationCode = document.getElementById('activation-code').value;

    if (activationCode === "") {
        document.getElementById('error-message').style.display = 'block';
        document.querySelector('.step-5').style.display = 'none';
    } else {
        nextStep();
    }
}

// Handling form submission for each step
document.querySelectorAll('.continue').forEach(button => {
    button.addEventListener('click', nextStep);
});

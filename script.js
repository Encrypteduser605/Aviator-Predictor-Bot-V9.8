function startApp() {
    // Hide the start button and show step 1
    document.querySelector('.step-0').style.display = 'none';
    nextStep(1);
}

function nextStep(step) {
    // Hide all steps
    let steps = document.querySelectorAll('.step');
    steps.forEach(step => step.style.display = 'none');

    // Show the current step based on the number
    const currentStep = document.querySelector('.step-' + step);
    currentStep.style.display = 'block';
}

function bettingSiteSelected(site) {
    console.log('Selected Site:', site);
    // Proceed to the next step when a site is selected
    nextStep(3);
}

function validateActivationCode() {
    const activationCode = document.getElementById('activation-code').value;
    
    // Check if the activation code is valid
    if (activationCode === "ABC123") { // Replace this logic with actual validation
        alert("Code is valid. You can proceed.");
        // Proceed to the next steps here
    } else {
        // Show error message for invalid code
        document.querySelector('.error-message').style.display = 'block';
    }
}

function resetApp() {
    // Reset the app to the initial step
    document.querySelector('.error-message').style.display = 'none';
    document.querySelector('.step-1').style.display = 'none';
    document.querySelector('.step-2').style.display = 'none';
    document.querySelector('.step-3').style.display = 'none';
    document.querySelector('.step-4').style.display = 'none';
    document.querySelector('.step-0').style.display = 'block'; // Show the Start button again
}

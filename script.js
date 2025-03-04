function nextStep() {
    const steps = document.querySelectorAll('.step');
    for (let i = 0; i < steps.length; i++) {
        if (steps[i].style.display !== 'none') {
            steps[i].style.display = 'none'; // Hide the current step
            if (i + 1 < steps.length) {
                steps[i + 1].style.display = 'block'; // Show the next step
            }
            break;
        }
    }
}

function bettingSiteSelected(siteName) {
    // Store the selected betting site (You can expand this to save more data)
    localStorage.setItem('selectedSite', siteName);
    alert("You selected: " + siteName);
}

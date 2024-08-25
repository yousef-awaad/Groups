const checkbox = document.getElementById('sun');

function updateCSSVariables() {
    if (checkbox.checked) {
        document.documentElement.style.setProperty('--main-color', 'rgb(100, 120, 150)');
        document.documentElement.style.setProperty('--glass-color', 'rgba(255, 255, 255, 0.8)');
        document.documentElement.style.setProperty('--text-color', 'rgb(0, 0, 0)');
        document.documentElement.style.setProperty('--new', 'rgb(154, 205, 50)');
        document.documentElement.style.setProperty('--active', 'rgb(1, 0, 136)');
    } else {
        document.documentElement.style.setProperty('--main-color', 'rgb(26, 32, 55)');
        document.documentElement.style.setProperty('--glass-color', 'rgba(255, 255, 255, 0.1)');
        document.documentElement.style.setProperty('--text-color', 'rgb(209, 211, 219)');
        document.documentElement.style.setProperty('--new', 'rgb(145, 97, 252)');
        document.documentElement.style.setProperty('--active', 'rgb(154, 205, 50)');
    }
}

// Retrieve the stored preference and update the checkbox state
function applyStoredPreference() {
    const storedLightMode = sessionStorage.getItem('lightMode');
    if (storedLightMode === 'true') {
        checkbox.checked = true;
        updateCSSVariables();
    }
}

// Listen for changes to the checkbox
checkbox.addEventListener('change', () => {
    updateCSSVariables();
    // Store the user's preference in session storage
    sessionStorage.setItem('lightMode', checkbox.checked);
});

// On DOMContentLoaded (similar to window.onload), apply the stored preference
document.addEventListener('DOMContentLoaded', applyStoredPreference);
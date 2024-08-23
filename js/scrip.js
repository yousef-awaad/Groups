const defaultHoverElement = document.querySelector('.top .display .bi-grid');
const triggerElement = document.querySelector('.top .display .bi-view-stacked');
const checkbox = document.getElementById('sun');

triggerElement.addEventListener('mouseenter', () => {
    defaultHoverElement.style.backgroundColor = 'var(--main-color)';
});

triggerElement.addEventListener('mouseleave', () => {
    defaultHoverElement.style.backgroundColor = 'var(--glass-color)';
});

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

checkbox.addEventListener('change', updateCSSVariables);

updateCSSVariables();

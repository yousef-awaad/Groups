const defaultHoverElement = document.querySelector('.top .display .bi-grid');
const triggerElement = document.querySelector('.top .display .bi-view-stacked');

triggerElement.addEventListener('mouseenter', () => {
    defaultHoverElement.style.backgroundColor = 'var(--main-color)';
});

triggerElement.addEventListener('mouseleave', () => {
    defaultHoverElement.style.backgroundColor = 'var(--glass-color)';
});

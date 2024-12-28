document.addEventListener('DOMContentLoaded', function() {
    // Example animation: fade in elements
    const elements = document.querySelectorAll('.container, header, footer');
    elements.forEach((element, index) => {
        element.style.opacity = 0;
        element.style.transition = 'opacity 0.5s ease-in-out';
        setTimeout(() => {
            element.style.opacity = 1;
        }, 100 * index);
    });
});

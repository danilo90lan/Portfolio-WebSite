const typed = new Typed('.multiple', {
    strings: ['Full Stack Developer', 'Freelancer'],
    typeSpeed:50,
    backSpeed:50,
    backDelay: 1000,
    loop: true
});


// Select the toggle button and the nav element
const toggleButton = document.querySelector('.toggle');
const nav = document.querySelector('nav');

// Add click event listener to the toggle button
toggleButton.addEventListener('click', () => {
    nav.classList.toggle('active'); // Toggle the 'active' class on the nav
    toggleButton.classList.toggle('active'); // Toggle the 'active' class on the toggle button
});